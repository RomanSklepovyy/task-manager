const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id);

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {

    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName);

    db.collection('users').findOne({name: 'Roman'}, (error, user) => {
        if (error) return console.log('Unable to fetch!');

        console.log(user);
    });

    db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
        if (error) return console.log('Unable to fetch!');

        console.log(tasks);
    });

    db.collection('tasks').find({completed: true}).count((error, count) => {
        if (error) return console.log('Unable to fetch!');

        console.log(count);
    });
    /*
    db.collection('users').insertOne({
        name: 'Roman',
        age: 19
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user!');
        }

        console.log(result.ops);
    });

    db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 28
        },
        {
            name: 'David',
            age: 27
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert user!');
        }

        console.log(result.ops);
    })


    db.collection('tasks').insertMany([
        {
            description: 'shopping',
            completed: true
        },
        {
            description: 'home job',
            completed: false
        },
        {
            description: 'task-man commit',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!');
        }

        console.log(result.ops);
    })
     */
});