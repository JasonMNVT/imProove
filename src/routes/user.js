const express = require('express');
const User = require('../models/user');
const router = express.Router();
const cors = require('cors');

router.use(cors());

router.post('/users', async (req, res, next) => {
    const user = new User(req.body);
    try {
        const saveUser = await user.save();
        res.status(201).send(saveUser);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/users/login', async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});
        if (!user) {
            res.json({success: false});
            return;
        }

        const isPasswordValid = await user.comparePassword(password);

        if (isPasswordValid) {
            res.json({success: true});
        } else {
            res.json({success: false});
        }
    } catch (e) {
        res.status(500).json({success: false, message:'An error occurred, Please try again.'});
    }
});

router.get('/users', async (req, res, next) => {
    try {
        const users = await User.find({});
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.get('/users/:id', async (req, res, next) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).send('User not found');
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.patch('/users/:id', async (req, res, next) => {
    const updatedInfo = Object.keys(req.body);
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);
        updatedInfo.forEach(update => user[update] = req.body[update]);
        await user.save();

        if (!user) return res.status(404).send('User not found');
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.delete('/users/:id', async (req, res, next) => {
    const userId = req.params.id;

    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) return res.status(404).send('User not found');
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
});

module.exports = router