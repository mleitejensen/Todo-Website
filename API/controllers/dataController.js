const Data = require("../models/dataModel")
const User = require("../models/userModel")

const getList = async (req, res) => {
    const user = req.user
    try{
        const findUser = await User.findOne({_id: user._id})
        const find = await Data.find({username: findUser.username})
        res.status(200).json(find)
    }catch(error){
        res.status(400).json({ error: error.message })
    }
}

const createPost = async (req, res) => {
    const {body} = req.body
    const user = req.user
    try{
        const findUser = await User.findOne({_id: user._id})
        const addPost = await Data.create({username: findUser.username, body})
        res.status(200).json(addPost)
    }catch(error){
        res.status(400).json({ error: error.message })
    }
}

const deletePost = async (req, res) => {
    const {_id} = req.body
    try{
        const removePost = await Data.deleteOne({_id})
        res.status(200).json(removePost)
    }catch(error){
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getList,
    createPost,
    deletePost
}