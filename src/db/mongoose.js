const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lovercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!');
            }
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password can\'t contain "password"');
            }
        }
    },

    year: {
        type: Number,
        validate(value) {
            if (value < (new Date().getFullYear() - 100) && value > (new Date().getFullYear() - 18)) {
                throw new Error('Age must be between 18 and 100');
            }
        }
    }
});

const Task = mongoose.model('Task', {
   description: {
       type: String,
       required: true,
       trim: true
   },

   completed: {
       type: Boolean,
       default: false
   }
});

/*
const me = new User({
    name: 'Roman',
    year: 2000,
    email: 'example@mail.com',
    password: ' password '
});

me.save().then(() => {
    console.log(me);
}).catch((e) => {
    console.log('Error! ' + e);
});
*/
const homeWork = new Task({
    description: 'useful text'
});

homeWork.save().then(() => {
    console.log(homeWork);
}).catch((e) => {
    console.log('Error! ' + e);
});
