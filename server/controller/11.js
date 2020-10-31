const express = require("express");
const router = express.Router();
const mongoose   = require('mongoose');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const { ObjectId } = require("mongodb");
const cron = require("node-cron");
const db = require('../commonQuery/dbcontroller');
const common = require('../helper/common');

var levelAmount = [
700000000,1600000000,2600000000,5000000000,
9000000000,14000000000,23000000000,30000000000,
62000000000,90000000000,175000000000,350000000000
];

function getLevelamount(level){

	console.log('level',level)
	var level_price = 0;
	var pool_price = 0;
	if(level==1){
		level_price = 300;
		pool_price = 400;
	}else if(level==2){
		level_price = 800;
		pool_price = 800;
	}else if(level==3){
		level_price = 1000;
		pool_price = 1600;
	}else if(level==4){
		level_price = 2000;
		pool_price = 3000;
	}else if(level==5){
		level_price = 4000;
		pool_price = 5000;
	}else if(level==6){
		level_price = 6000;
		pool_price = 8000;
	}else if(level==7){
		level_price = 13000;
		pool_price = 10000;
	}else if(level==8){
		level_price = 10000;
		pool_price = 20000;
	}else if(level==9){
		level_price = 22000;
		pool_price = 40000;
	}else if(level==10){
		level_price = 25000;
		pool_price = 75000;
	}else if(level==11){
		level_price = 25000;
		pool_price = 150000;
	}else if(level==12){
		level_price = 50000;
		pool_price = 300000;
	}

	var priceValue = {
		level_price:level_price,
		pool_price:pool_price
	}

	return priceValue;

}
router.get('/cron',async(req,res) =>{
// cron.schedule("*/10 * * * * *", function() { 
//     console.log("running a task every 10 second"); 
// });
var exits = await db.AsyncfindOne('users');
console.log(exits.amount,'exits!!!!!!!!!!!!!!');
var amount = exits.amount/1000000;
var admin_id=exits._id;
console.log(amount)
var a=(amount*1.5)/100;
console.log(a,'@@@@@@@@@@@@@@@@@@@@@@@@@')
//const exits1 = await db.AsyncfindOne('daily_income',{'admin_id':admin_id,'amount':a},{'_id':1});
 var userData1 ={
		'user_id':admin_id,
		'amount' : a
   };
const insert = await db.AsyncInsert('daily_income',userData1);
console.log(insert,'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
return res.status(200).json({status:true, message: "Register successfully",data:a }); 
})




router.post("/save-users",async (req, res) => {
console.log(req.body,'savedata***********************(((((((((((((')
   var userData ={
		'address': req.body.address,
		'amount' : req.body.amount,
		'current_level': 1
   };
   console.log('~~~~~~~~~~~~~~~~',userData);
   const exits = await db.AsyncfindOne('users',{'address':req.body.address},{'_id':1});
   if(!exits){
//    	cron.schedule("*/10 * * * * *", function() { 
//     console.log("running a task every 10 second"); 
// }); 
	const insert = await db.AsyncInsert('users',userData);
	var transaction = {
		from: req.body.address,
		to: req.body.refer,
		txid: req.body.txid,
		level: 1,
	}
	eventEmitter.emit('create-trasansaction', transaction, function () {
    });
	res.send({'status':200, 'message':'succesfully added users'});
   }else{
   	res.send({'status':400, 'message':'already exits user'});
   }

});

router.post("/update-users",async (req, res) => {
	
	console.log('update-users',req.body)
	var userData ={
		'affliteId': req.body.affliteId
	};

	const exits = await db.AsyncfindOne('users',{'address':req.body.address},{'_id':1});
	if(exits){
		db.findByIdAndUpdate('users',exits._id, userData, {new: false}, function(err, response){
			eventEmitter.emit('create-referal', req.body, function () {
	        });
	        var transData = {
	        	level:1,
	        	from:req.body.address,
	        	transaction:req.body.transaction,
	        	amountTransfer:req.body.amountTransfer
	        }
	        eventEmitter.emit('update-transaction', transData, function () {
	        });
			res.send({'status':200, 'message':'succesfully added users'});
		});
	}else{
		res.send({'status':400, 'message':'invalid  user'});
	}

});

eventEmitter.on('create-transaction', async function (data, done) {

	var savedata = {
		from : data.from,
		to:data.to,
		transactionId:data.txid
	};
	const insert = await db.AsyncInsert('transaction_status',savedata);
	done();
});


eventEmitter.on('update-transaction', async function (data, done) {
	console.log('datadatadatadata',data)
	var level_price =0;
	var pool_price =0;
	var workingplan = data.amountTransfer[0];
	var nonworkingplan = data.amountTransfer[1];
	try{
		var getprice = getLevelamount(data.level)
		level_price =getprice.level_price;
		pool_price =getprice.pool_price;
	}catch(err){

	}

	db.findOneAndUpdate('transaction_status',{"transactionId":data.transaction}, {pay_status:true}, {new: false}, function(err, response){
	});

	const count = await db.Asynccount('transaction',{"transactionId":data.transaction});
	if(count==0){
		const affliteuser = await db.AsyncfindOne('users',{'address':data.amountTransfer[0]},{'_id':1, 'affliteId':1, 'address':1});
		const affliteuser1 = await db.AsyncfindOne('users',{'address':data.amountTransfer[1]},{'_id':1, 'affliteId':1});
		if(level_price > 0){
			var savedata = {
				from : data.from,
				to:workingplan,
				afflite_id:affliteuser.affliteId,
				pay_status:true,
				level:data.level,
				transactionId:data.transaction,
				level_price:level_price
			};
			const insert = await db.AsyncInsert('transaction',savedata);
		}
		if(pool_price > 0){
			var savedata1 = {
				from : data.from,
				to:nonworkingplan,
				afflite_id:affliteuser1.affliteId,
				pay_status:true,
				level:data.level,
				transactionId:data.transaction,
				pool_price:pool_price
			};
			const insert = await db.AsyncInsert('transaction',savedata1);
		}
	}
	done();

});

eventEmitter.on('create-referal', async function (data, done) {
	console.log('create-referal', data)
	try{
		var alliateId = data.affliteId;
		var referalId = data.refererId;

		const affliteuser = await db.AsyncfindOne('users',{'affliteId':alliateId},{'_id':1, 'affliteId':1, 'address':1});
		const referalUser = await db.AsyncfindOne('users',{'affliteId':referalId},{'_id':1});
		const exits = await db.AsyncfindOne('referal',{'user_id':affliteuser._id},{'_id':1});
		if(!exits){
			var savedata = {
				user_id : affliteuser._id,
				afflite_id:affliteuser.affliteId,
				address:affliteuser.address,
				childs : []
			};
			const insert = await db.AsyncInsert('referal',savedata);
		}
		
		console.log('count')
		
		var condition = {'user_id':{"$eq":referalUser._id}};
		var update = { '$addToSet': { childs: data.affliteId } };
		db.update('referal',condition, update, {multi:false}, function(err, response){
			console.log('response',err,response)
		});

		var condition1 = {'childs':{"$in":data.refererId},'user_id':{"$ne":referalUser._id}};
		var update1 = { '$addToSet': { childs: data.affliteId } };
		db.update('referal',condition1, update1, {multi:true}, function(err, response){
			console.log('response',err,response)
		});
		
		done();
	}catch(err){
		console.log('errerr',err);
		done();
	}
	
});


router.post("/update-level",async (req, res) => {
	
	console.log('req.body',req.body)
	try{
		var alliateId = req.body.affliteId;
		var referalId = req.body.refererId;

		const affliteuser = await db.AsyncfindOne('users',{'affliteId':alliateId},{'_id':1});
		const referalUser = await db.AsyncfindOne('users',{'affliteId':referalId},{'_id':1});
			if(affliteuser && referalUser){
			var data = {
				child_afflite: alliateId,
				parent_afflite: referalId,
				child : affliteuser._id,
				parent : referalUser._id,
				level : req.body.level,
			}
			const insert = await db.AsyncInsert('referal',data);
			db.findOneAndUpdate('users',{"affliteId":alliateId}, {current_level:req.body.level}, {new: false}, function(err, response){
			});
			var transData = {
	        	level:req.body.level,
	        	from:req.body.address,
	        	transaction:req.body.transaction,
	        	amountTransfer:req.body.amountTransfer
	        }
	        eventEmitter.emit('update-transaction', transData, function () {
	        });
			res.send({'status':200,'message': "succesfully upgraded level"});
		}else{
			res.send({'status':400,'message': "failed to upgraded level"});
		}
	}catch(err){
		res.send({'status':400,'message': "failed to upgraded level"});	
	}

});

router.post("/check-user",async (req, res) => {

	const exits = await db.AsyncfindOne('users',{'address':req.body.address},{'_id':1});
	console.log('exits',exits)
	var status = (exits)?true:false;
	res.send({'status':200, 'message':status});

});

router.post("/update-profile",async (req, res) => {
	
	const exits = await db.AsyncfindOne('users',{'address':req.body.address},{'_id':1});
	if(exits){
		var updateData = {
			email:req.body.email,
			username:req.body.username,
			subscription:req.body.subscription
		}
		db.findOneAndUpdate('users',{"address":req.body.address}, updateData, {new: false}, function(err, response){

			res.send({'status':200, 'message':'succesfully added users'});
		});
	}else{
		res.send({'status':400, 'message':'invalid  user'});
	}

});

router.get("/get-profile",async (req, res) => {
	
	console.log('update-users',req.query)
	
	const exits = await db.AsyncfindOne('users',{'address':req.query.address},{'_id':0,address:1,amount:1});
	console.log('exitsexits',exits)
	if(exits){
		res.send({'status':200, 'message':exits});
	}else{
		res.send({'status':400, 'message':''});
	}

});



router.post("/root-user",async (req, res) => {

	var data ={
		'affliteId':1,
		'address':req.body.address
	}

	const exits = await db.AsyncfindOne('users',{'address':req.body.address},{'_id':1});
   	if(!exits){
		const insert = await db.AsyncInsert('users',data);
		var data1 ={
			'affliteId':1,
			'address':req.body.address,
			'user_id':insert._id,
			'childs':[]
		}
		const update = await db.AsyncInsert('referal',data1);
	}
	res.send('succesfully')

});

module.exports = router;
