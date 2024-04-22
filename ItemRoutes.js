const { Router } = require("express");
const { getItem, saveItems, deleteItem, editItem } = require('./ItemController')


const router = Router()

router.get('/', getItem);
router.post('/saveItems', saveItems);
router.post('/deleteItem', deleteItem);
router.post('/editItem', editItem)

module.exports = router;