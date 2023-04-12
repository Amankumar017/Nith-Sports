const  MongoClient  = require('mongodb').MongoClient;
require('dotenv').config();
uri='mongodb+srv://amankumar16102:1234@cluster0.hjjzntl.mongodb.net/NithSports?retryWrites=true&w=majority'
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (err) {
    console.error(err);
  }
}

connect();

function Cricketdata(){
    var collection = client.db('NithSports').collection('Cricket');
    async function  fun() {  
      var data = await collection.find().toArray();
      console.log(data);
      return data;
    }
}

exports.module = {Cricketdata};


