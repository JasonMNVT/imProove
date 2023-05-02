const express = require('express');
const Category = require('../models/category');
const router = express.Router();

router.post('/category', async (req, res, next) => {
    const category = new Category(req.body);
    try {
        const saveCategory = await category.save();
        res.status(201).send(saveCategory)
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get('/category', async (req, res, next) => {
    try {
        const categories = await Category.find({});
        res.send(categories)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.get('/category/:id', async (req, res, next) => {
    const categoryId = req.params.id;

    try {
        const category = await Category.findById(categoryId);
        if (!category) return res.status(404).send('Category not found');
        res.send(category)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.patch('/category/:id', async (req, res, next) => {
    const updatedInfo = Object.keys(req.body);
    const categoryId = req.params.id;

    try {
        const category = await Category.findById(categoryId);
        updatedInfo.forEach(update => user[update] = req.body[update]);
        await category.save();

        if (!category) return res.status(404).send('Category not found');
        res.send(category)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.delete('/category/:id', async (req, res, next) => {
    const categoryId = req.params.id;

    try {
        const category = await Category.findByIdAndDelete(categoryId);
        if (!category) return res.status(404).send('Category not found');
        res.send(category)
    } catch (e) {
        res.status(500).send(e)
    }
});

module.exports = router