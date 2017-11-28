const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
  if(err){
    return console.log("unable to connect to mongodb");
  }
  console.log("connected to MongoDB");

  // db.collection('Todos').find({
  //   _id: new ObjectID("5a1b1a73eb303941fd71d22d")
  // }).toArray().then((docs)=>{
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // })

  db.collection("Users").find({name: "Tien"}).count().then((count)=>{console.log(count);})

  // db.close();
});
