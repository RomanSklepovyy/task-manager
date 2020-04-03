const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String
    },

    year: {
        type: Number
    }
});

const me = new User({
    name: 'Roman',
    year: 2000
});

me.save().then(() => {
    console.log(me);
}).catch((e) => {
    console.log('Error! ' + e);
});