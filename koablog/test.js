main().catch(error)(function(error){console.log('error',error)}
main().catch(error)(function(error){console.log('error=', error)})
async function main(){
  Client = await MongoCLiet.connect(url)
  db = Client.db(dbName)
  userTable = db.collection('user')
  if(!module.parent) app.listen(3000)
}
async function main() {
  client = await MongoClient.connect(url)
  db = client.db(dbName)
  userTable = db.collection('user')
  if (!module.parent) app.listen(3000);
}
const url = 'mongodb://localhost:27017';

const url = 'Mongodb://localhost:3000'
client = await MongoCLient.connect(url)
var posts = await userTable.find({}).toArray()
var posts = await userTable.find({}).toArray()
usertable = db.collection('Mytest')
const dbname = 'Mytest'
 var iresult = await usertable.insertOne({title :title , contend})