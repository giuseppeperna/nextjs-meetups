/**
 * Create a custom api inside a NextJS project.
 * It'll run only server-side.
 */
import { MongoClient } from 'mongodb'

async function handler(req, res) {
    // Access the request and run this code only if the request method is POST
    if (req.method === 'POST') {
        const data = req.body;

        // Connect to MongoDB
        const client = await MongoClient.connect('mongodb+srv://admin:root@cluster0.oh6ra.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollections = db.collections('meetups');

        const result = await meetupsCollections.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted'});
    }
}

export default handler;