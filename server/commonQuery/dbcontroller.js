const model = require("../model/model");


const AsyncInsert = async (collection,data) => {
	 var create = new model[collection](data);
	 var results = await create.save()
     return results;
}

function Insert(collection, data, callback){
	var create = new model[collection](data);
	create.save(function (err,response) {
		callback(err, response);
	});

}

const AsyncFind = async (collection,query,project,sort_skip_limit, callback) => {
	
	//sort_skip_limit  {sort:{created_date : -1},limit:2,skip:0}
	var results = await model[collection].find(query,project,sort_skip_limit);
	return results;
     
}

function Find(collection, query,project, sort_skip_limit, callback){

	//sort_skip_limit  {sort:{created_date : -1},limit:2,skip:0}
	model[collection].find(query,project,sort_skip_limit, function(err, response){

		callback(err, response);

	});

}

const AsyncAggregation = async (collection,query) => {
     const results = await model[collection].aggregate(query);
     return results;
}

function Aggregation(collection,query, callback){
	model[collection].aggregate(query,function(err, response){
		callback(err, response);
	});

}

const AsyncfindOne = async (collection,query,project) => {
     const results = await model[collection].findOne(query,project);
     return results;
}

function findOne(collection,query, project,callback){
	model[collection].findOne(query,project,function(err, response){
		callback(err, response);
	});

}

const AsyncfindByIdAndUpdate = async (collection,query,project) => {
     
}

function findByIdAndUpdate(collection,id, update, newdata,callback){
	
	model[collection].findByIdAndUpdate(id, update, newdata, function(err, response){
		callback(err, response);
	});

}

const AsyncfindOneAndUpdate = async (collection,condition,update,newdata,callback) => {
     const results = await model[collection].findOneAndUpdate(condition, { "$set": update}, newdata);
     return results;
}

function findOneAndUpdate(collection,condition, update, newdata,callback){
	
	model[collection].findOneAndUpdate(condition, { "$set": update}, newdata, function(err, response){
		callback(err, response);
	});

}

function update(collection,condition, update ,multi, callback){
	
	model[collection].update(condition, update, multi, function(err, response){
		callback(err, response);
	});

}

const AsyncdeleteOne = async (collection,query,project) => {
     const results = await model[collection].deleteOne(query);
     return results;
}

function deleteOne(collection,condition,callback){
	
	model[collection].deleteOne(condition, function(err, response){
		callback(err, response);
	});
}


const Asynccount = async (collection,query,project) => {
     const results = await model[collection].count(query);
     return results;
}

function count(collection,condition,callback){
	
	model[collection].count(condition, function(err, response){
		callback(err, response);
	});
}



 module.exports = 
 { 
	AsyncAggregation,
	Aggregation,
	AsyncfindOne,
	findOne,
	AsyncInsert,
	Insert,
	Find,
	findByIdAndUpdate,
	AsyncfindOneAndUpdate,
	update,
	findOneAndUpdate,
	AsyncdeleteOne,
	deleteOne,
	Asynccount,
	count,
	AsyncFind
 }