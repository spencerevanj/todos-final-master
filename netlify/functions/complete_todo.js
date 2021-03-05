// API url to this lambda funtion: /.netlify/functions/complete_todo
let firebase = require('./firebase')

exports.handler = async function(event) {
  let db = firebase.firestore()

  let body = JSON.parse(event.body)
  let todoId = body.todoId

  await db.collection('todos').doc(todoId).delete()
  console.log(`deleted todo with ID ${todoId}`)

  return {
    statusCode: 200,
    body: JSON.stringify({success: true})
  }

}