const ItemModel = require('./ItemModel')

module.exports.getItem = async (req,res) => {
    const myItem = await ItemModel.find()
    res.send(myItem)
}

module.exports.saveItems = async (req,res) => {
    const { title } = req.body;
    ItemModel.create({ title })
    .then((data) => {console.log("Item added")
    res.send(data)
    })
}

module.exports.deleteItem = async (req,res) => {
    const {_id} = req.body;
    ItemModel.findByIdAndDelete(_id)
    .then(() => res.send("Item deleted"))
}

module.exports.editItem = async(req, res) => {
    const {_id, title} = req.body;
    ItemModel.findByIdAndUpdate(_id, {title})
    .then(() => res.send("Item edited"))
}
