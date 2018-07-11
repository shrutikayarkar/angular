var connect = require("../config/connect");

module.exports.findwhere = function (obj,cb) {
		connect.init(function(err,client){
		var db = client.db("angular");
		db.collection("admin").find(obj).toArray(cb);
	});
};