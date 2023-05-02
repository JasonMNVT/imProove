const express = require('express');
const Activity = require('../models/activity');
const router = express.Router();

router.post('/activities', async (req, res, next) => {
    const activity = new Activity(req.body);
    try {
        const saveActivity = await activity.save();
        res.status(201).send(saveActivity);
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get('/activities', async (req, res, next) => {
    try {
        const activities = await Activity.find({});
        res.send(activities);
    } catch (e) {
        res.status(500).send(e)
    }
});

router.get('/activities/:id', async (req, res, next) => {
    const activityId = req.params.id;

    try {
        const activity = await Activity.findById(activityId);
        if (!activity) return res.status(404).send('Activity not found');
        res.send(activity)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.patch('/activities/:id', async (req, res, next) => {
    const updatedInfo = Object.keys(req.body);
    const activityId = req.params.id;

    try {
        const activity = await Activity.findById(activityId);
        updatedInfo.forEach(update => activity[update] = req.body[update]);
        await activity.save();

        if (!activity) return res.status(404).send("Activity not found");
        res.send(activity);
    } catch (e) {
        res.status(500).send(e)
    }
});

router.delete('/activities/:id', async (req, res, next) => {
    const activityId = req.params.id;

    try {
        const activity = await Activity.findByIdAndDelete(activityId);
        if (!activity) return res.status(404).send('Activity not found');
        res.send(activity)
    } catch (e) {
        res.status(500).send(e)
    }
});

module.exports = router