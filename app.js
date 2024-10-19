// const { MongoClient } = require('mongodb');

// // Replace the following with your connection string
// const uri = "mongodb+srv://ronisha:F7cTIflitUiqRPVB@cluster0.qed0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // async function run() {
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
//         console.log("Connected to MongoDB!");

//         // Specify the database and collection you want to use
//         const database = client.db("myWebsiteDB"); // Replace with your database name
//         const collection = database.collection("users"); // Replace with your collection name

//         // Example: Insert a document
//         const doc = { name: "John Doe", age: 30 };
//         const result = await collection.insertOne(doc);
//         console.log(`New document created with the following id: ${result.insertedId}`);

//         // Example: Find all documents
//         const allDocs = await collection.find({}).toArray();
//         console.log("All documents:", allDocs);
//     } catch (err) {
//         console.error(err);
//     } finally {
//         // Close the connection
//         await client.close();
//     }
// }

// run().catch(console.dir);
