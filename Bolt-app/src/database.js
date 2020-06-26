const mongoose = require('mongoose');

/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://boltapp:<bolteos>@bolt-cnaze.mongodb.net/<bolt>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/


mongoose.connect('mongodb://localhost/bolt-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify:false
})
 .then(db => console.log('Se conecto la db'))
 .catch(err => console.error(err));