function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function random (low, high) {
    return Math.random() * (high - low) + low;
}

var simulation = function() {
	var MongoClient = require('mongodb').MongoClient;
	
	MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {		//mongodb database address
		if(!err) {
		  db.collection('test', {}, function(err, collection) {		//collection name
  		  var cursor = collection.find();
  		  cursor.each(function(err, item) {
  		    if(item!==null) {
  		      switch(randomInt(1, 4)) {
  		        case 1:
  		          collection.update({name:item.name}, {$set:{stockPrice:Math.floor(random(0.8, 0.99)*item.stockPrice)}}, {w: 1}, function(err, numberUpdated) {
  		            if(!err)
  		              db.close();
  		            else
  		              return console.dir(err);
  		           });
  		          break;
  		         case 2:
  		           collection.update({name:item.name}, {$set:{stockPrice:Math.floor(random(1.01, 1.2)*item.stockPrice)}}, {w: 1}, function(err, numberUpdated) {
  		             if(!err)
  		               db.close();
  		             else
  		               return console.dir(err);
  		            });
  		           break;
  		         default:
  		      }
  		    }
  		   });
		  });
		} else
		  return console.dir(err);
	});
};

module.exports.simulation = simulation;