const username = '-'
const password = '-'
const dbname = '-'

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${username}:${password}@cluster0.tkc08hi.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    const records = client.db(dbname).collection('records');
    // Send a ping to confirm a successful connection
    // await records.insertOne({first: 'John', last: 'Doe', age: 33});
    // const people = await records.find({last: 'Doe'}).toArray();
    // const result = await records.updateOne({ first: 'Jane' }, { $set: { age: 44 } })
    await records.deleteOne({first: 'John'})
    console.log('result');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

