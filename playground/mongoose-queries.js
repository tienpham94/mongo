const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')

var id = '5a1ea6700676f2734f001341'

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos", todos);
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo", todo);
// })

Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log("Id not found");
  }
  console.log("Todo by Id", todo);
}).catch((e) => console.log(e);)
