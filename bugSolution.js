```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb://localhost:27017/"; // Ensure correct URI
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("mydatabase");
    const collection = db.collection("mycollection");

    // Correct update with a filter
    const filter = { _id: 1 }; // Replace with your actual filter
    const update = { $set: { field: "newValue" } };
    const result = await collection.updateOne(filter, update);
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

updateDocument();
```