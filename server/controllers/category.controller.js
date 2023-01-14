const Password = require('../models/password.model');
const Note = require('../models/note.model');
const Address = require('../models/address.model');
const category = require('../constants/category');

const modelMap = {
    [category.PASSWORD]: Password,
    [category.NOTE]: Note,
    [category.ADDRESS]: Address,
};

async function saveCategory(req, res) {
    const { type, data } = req.body;
    const CategoryModel = modelMap[type];
    if (CategoryModel) {
        const categoryModel = new CategoryModel(data);
        try {
            await categoryModel.save();
            res.status(200).json(categoryModel);
        } catch (err) {
            res.status(500).send(err);
        }
    } else {
        res.status(500).json({ error: 'Invalid type' });
    }
};

async function editCategory(req, res) {

    const { type, data } = req.body;
    const { _id } = data;
    const CategoryModel = modelMap[type];
    if (CategoryModel) {
        try {
            const details = await CategoryModel.updateOne({ _id }, { ...data });

            if (details.ok) {
                res.status(200).json({ status: 'SUCCESS' });
            } else {
                res.status(500).send({ status: 'FAILED' });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    } else {
        res.status(500).json({ error: 'Invalid type' });
    }
};

async function deleteCategory(req, res) {
    const { type, userId, id } = req.params;
    const CategoryModel = modelMap[type];
    if (CategoryModel) {
        try {
            const data = await CategoryModel.deleteOne({ userId, _id: id });
            if (data.deletedCount) {
                res.status(200).json({ status: 'SUCCESS' });
            }
            else {
                res.status(401).send({ message: `${type} not found` });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    } else {
        res.status(500).json({ error: 'Invalid type' });
    }
};

async function listCategory(req, res) {
    const { type, userId } = req.body;
    const categoryModal = modelMap[type];
    if (categoryModal) {
        try {
            const items = await categoryModal.find({ userId });
            res.status(200).json(items);
        } catch (err) {
            res.status(500).send(err);
        }
    } else {
        res.status(500).json({ error: 'Invalid type' });
    }
};

module.exports = { saveCategory, editCategory, deleteCategory, listCategory };
