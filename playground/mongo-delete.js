const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log("Unable to connect to MongoDB");
  }
  console.log("Connected to MongoDB");

  //deleteMany
  db.collection("Todos").findOneAndUpdate({
    _id: new ObjectID("5a1daabf170e2f0bb85c107d")
  },{
    $inc:{
      "hours-left": 1
    }
  }, {
    returnOriginal: false
  }).then((result => {
    console.log(result);
  }));
  //deleteOne
  //findOneAndDelete

  // db.close()
})
