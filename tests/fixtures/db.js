const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../src/models/user');
const Task = require('../../src/models/task');

const userOneId = new mongoose.Types.ObjectId();

const userOne = {
    _id: userOneId,
    name: 'test_one',
    email: 'test_one@mail.com',
    password: 'test123@1',
    year: 2000,
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
    }]
};

const userTwoId = new mongoose.Types.ObjectId();

const userTwo = {
    _id: userTwoId,
    name: 'test_two',
    email: 'test_two@mail.com',
    password: 'test123@!',
    year: 2000,
    tokens: [{
        token: jwt.sign({_id: userTwoId}, process.env.JWT_SECRET)
    }]
};

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'first task',
    completed: false,
    owner: userOneId
};

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'second task',
    completed: true,
    owner: userOneId
};

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'third task',
    completed: true,
    owner: userTwoId
};


const setupDatabase = async () => {
    await User.deleteMany();
    await Task.deleteMany();
    await new User(userOne).save();
    await new User(userTwo).save();
    await new Task(taskOne).save();
    await new Task(taskTwo).save();
    await new Task(taskThree).save();
};

module.exports = {
    taskOne,
    taskTwo,
    taskThree,
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    setupDatabase
}