const express = require("express");
const router = express.Router();
const mongoose   = require('mongoose');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const { ObjectId } = require("mongodb");

const db = require('../commonQuery/dbcontroller');
const common = require('../helper/common');

router.get("/get-level",async (req, res) => {

	const affliteuser = await db.AsyncfindOne('users',{'address':req.query.address},{'_id':1});

	var query = [
      {$match: { parent: affliteuser._id}}
    ];
    const getLevels = await db.AsyncAggregation('referal',query);


    var levelList = [
      {'level':1,'lamount':300,'pamount':400,'lid':245789,'pid':123456,'earningtrx':3800.2587,'status':'completed'},
      {'level':2,'lamount':800,'pamount':800,'lid':12587,'pid':6545,'earningtrx':3800.2587,'status':'completed'},
      {'level':3,'lamount':1000,'pamount':1600,'lid':0,'pid':0,'earningtrx':0,'status':'next'},
      {'level':4,'lamount':2000,'pamount':4000,'lid':0,'pid':0,'earningtrx':0,'status':'next'},
      {'level':5,'lamount':2000,'pamount':4000,'lid':0,'pid':0,'earningtrx':0,'status':'next'},
      {'level':6,'lamount':2000,'pamount':4000,'lid':0,'pid':0,'earningtrx':0,'status':'next'},
      {'level':7,'lamount':2000,'pamount':4000,'lid':0,'pid':0,'earningtrx':0,'status':'next'},
      {'level':8,'lamount':2000,'pamount':4000,'lid':0,'pid':0,'earningtrx':0,'status':'next'},
      {'level':9,'lamount':2000,'pamount':4000,'lid':0,'pid':0,'earningtrx':0,'status':'next'},
      {'level':10,'lamount':2000,'pamount':4000,'lid':0,'pid':0,'earningtrx':0,'status':'next'},
      {'level':11,'lamount':2000,'pamount':4000,'lid':0,'pid':0,'earningtrx':0,'status':'next'},
      {'level':12,'lamount':2000,'pamount':4000,'lid':0,'pid':0,'earningtrx':0,'status':'next'}
    ];
    var current =false;
    for(var l=0;l<levelList.length;l++){

    	var index = getLevels.findIndex(val=>val.level===levelList[l].level);

    	if(index !=-1){
    		levelList[l].lid = getLevels[index].child_afflite;
    		levelList[l].pid = getLevels[index].parent_afflite;
    	}

    }

    res.send({'status':200,'getLevels':getLevels})

});

router.get("/get-latest-count",async (req, res) => {
	var cond = {createdAt: { $gt: new Date(Date.now() - 86400000) }}
	const getcount = await db.Asynccount('users',cond);
  const myteam = await db.AsyncfindOne('referal',{'address':req.query.address},{'childs':1});
  
  const myteamcount = (myteam && myteam.childs && myteam.childs.length > 0)?myteam.childs.length:0;
  console.log('myteamcount',myteamcount)
	res.send({'status':200,'result':(getcount && getcount > 0)?getcount:0,'myteam':myteamcount})
});

router.get("/participants-earning",async (req, res) => {

  const myteam = await db.AsyncfindOne('referal',{'address':req.query.address},{'childs':1});
  console.log(myteam)
  if(myteam && myteam.childs && myteam.childs.length > 0){
  var query =  [
      {$match: { afflite_id:{$in: myteam.childs}}},
      {$limit:parseInt(myteam.childs.length)},
      {
        $project:{
          level_price:1,
          pool_price:1
        }
      },
      {
        $group: { 
         _id: null, 
        level_price: { 
            $sum: "$level_price" 
        },
        pool_price: { 
            $sum: "$pool_price" 
        }
        } 
      }
    ];

    const getData = await db.AsyncAggregation('transaction',query);

    var level_price = (getData[0] && getData[0].level_price)?getData[0].level_price:0;
    var pool_price = (getData[0] && getData[0].pool_price)?getData[0].pool_price:0;
    var totalEarning = parseFloat(level_price)+parseFloat(pool_price);
    res.send({status:200, total:totalEarning})
  }else{
    res.send({status:200, total:0})
  }

});

router.get("/earning-list",async (req, res) => {

  
  var cond = { to:{$eq: req.query.address}};
  var limit = 5;
  var skip =0;
  if(req.query.limit){
    limit = parseInt(req.query.limit);
  }
  if(req.query.skip){
    skip = parseInt(req.query.skip);
  }
  var query =  [
      {$match: cond},
      {$skip:skip},
      {$limit:limit},
      {
        $project:{
          from:1,
          to:1,
          level:1,
          createdAt:1,
          level_price:1,
          pool_price:1,
          transactionId:1
        }
      }
    ];
    const totalCount = await db.Asynccount('transaction',cond);
    const getData = await db.AsyncAggregation('transaction',query);
    var total = (totalCount && totalCount > 0)?totalCount:0
    res.send({status:200, result:getData,'total':total})
 
});


router.get("/upgrade-list",async (req, res) => {
  console.log('upgrade-list',req.query.address)
  var cond = { from:{$eq: req.query.address}};
  var limit = 5;
  var skip =0;
  if(req.query.limit){
    limit = parseInt(req.query.limit);
  }
  if(req.query.skip){
    skip = parseInt(req.query.skip);
  }
  var query =  [
      {$match: cond},
      {$limit:24}, 
      {
        $project:{
          from:1,
          to:1,
          level:1,
          createdAt:1,
          level_price:1,
          pool_price:1,
          transactionId:1
        }
      },
      {
        $group: { 
        _id: {
          level: '$level'
        },
        transactionId: { $addToSet: "$transactionId" },
        level_price: { $addToSet: "$level_price" },
        pool_price: { $addToSet: "$pool_price" },
        createdAt: { $addToSet: "$createdAt" },
        }},
        {
          $project:{
            _id:0,
            level:'$_id.level',
            level_price:'$level_price',
            pool_price:'$pool_price',
            transactionId: { $arrayElemAt: [ "$transactionId", 0 ] },
            createdAt:{ $arrayElemAt: [ "$createdAt", 0 ] },
          }
        },
        {$skip:skip},
        {$limit:limit}, 
      
    ];
    const totalCount = await db.Asynccount('transaction',cond);
    const getData = await db.AsyncAggregation('transaction',query);
    var total = (totalCount && totalCount > 0)?totalCount:0
    if(total > 0){
      total = total/2;
    }

    var upgradeList = [];
    for(var i=0;i<getData.length;i++){
      var lamt1=(getData[i] && getData[i].level_price && getData[i].level_price[0])?getData[i].level_price[0]:0;
      var lamt2=(getData[i] && getData[i].level_price[1])?getData[i].level_price[1]:0;
      var level_price = parseInt(lamt1)+parseInt(lamt2);

      var pamt1=(getData[i] && getData[i].pool_price && getData[i].pool_price[0])?getData[i].pool_price[0]:0;
      var pamt2=(getData[i] && getData[i].pool_price && getData[i].pool_price[1])?getData[i].pool_price[1]:0;
      var pool_price = parseInt(pamt1)+parseInt(pamt2);

      upgradeList.push({
        total:level_price+pool_price,
        level:getData[i].level,
        transactionId:getData[i].transactionId,
        createdAt:getData[i].createdAt,
      })
    }

    res.send({status:200, result:upgradeList,'total':total});


});


router.get("/team-list",async (req, res) => {

  
  var cond = { to:{$eq: req.query.address}};
  var limit = 5;
  var skip =0;
  if(req.query.limit){
    limit = parseInt(req.query.limit);
  }
  if(req.query.skip){
    skip = parseInt(req.query.skip);
  }
  var query =  [
      {$match: cond},
      {$skip:skip},
      {$limit:limit},
      {
        $project:{
          from:1,
          to:1,
          level:1,
          createdAt:1,
          level_price:1,
          pool_price:1,
          transactionId:1
        }
      }
    ];
    const totalCount = await db.Asynccount('transaction',cond);
    const getData = await db.AsyncAggregation('transaction',query);
    var total = (totalCount && totalCount > 0)?totalCount:0
    res.send({status:200, result:getData,'total':total})
 
});


module.exports = router;
