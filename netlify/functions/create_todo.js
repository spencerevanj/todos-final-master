// API url to this lambda funtion: /.netlify/functions/create_todo
let firebase = require('./firebase')

exports.handler = async function(event) {
  let db = firebase.firestore()

  let body = JSON.parse(event.body)
  let todoText = body.text
  let userId = body.userId

  let newTodo = {
    text: todoText,
    userId: userId
  }

  let docRef = await db.collection('todos').add(newTodo)
  console.log(`new todo with ID ${docRef.id} created`)

  newTodo.id = docRef.id

  return {
    statusCode: 200,
    body: JSON.stringify(newTodo)
  }

}