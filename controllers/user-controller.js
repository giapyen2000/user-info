const userModel = require('../models/users');

/**
 * Function to create new user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createUser = async(req, res) => {
    try {
        const data = req.body;
        
        const item = await userModel.create(data);

        return res.status(200).json(item);

    } catch (error) {
        return res.status(500).json(error);
    }
}

/**
 * Get all users
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getUsers = async(req, res) => {
    try {
        const items = await userModel.find({
            active: true
        });

        return res.status(200).json(items);
    } catch (error) {
        return res.status(500).json(error);
    }
}

/**
 * Function to get one user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getOneUser = async(req, res) => {
    try {
        const id = req.params.id

        /* ex-1 */
        // const item = await userModel.findById(id);

        /* ex-2 */
        // const item = await userModel.findOne({
        //     _id: id,
        //     active: true,
        // });

        /* ex-3 item[0]*/
        // const item = await userModel.find({_id: id});

        /* ex-4*/
        // const userList = await userModel.find();
        // const item = userList.find((el) => el._id == id);

        /* ex-5 */
        // const userList = await userModel.find();
        // const item = userList.map((el) => {
        //     if(el._id == id) {
        //         return res.json(el);
        //     }
        // });

        /* ex-6 */
        const userList = await userModel.find();
        let item;
        Array.from(userList || []).forEach((el) => {
            if(el._id == id && el.active == true) {
                item = el;
            }
        })


        return res.json(item);
    } catch (error) {
        return res.status(500).json(error);
    }
}

/**
 * Function to update document user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const updateUser = async(req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const item = await userModel.findOne(
            { 
                _id: id,
                active: true 
            }
        )

        Object.assign(item, data);
        item.modifiedAt = new Date();

        await item.save();

        return res.status(200).json(item);
    } catch (error) {
        return res.status(500).json(error);
    }
}

/**
 * Function remove item
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const removeUser = async(req,res) => {
    try {
        const { id } = req.params;

        const item = await userModel.findOne({ 
            _id: id,
            active: true
        });

        if (!item) {
            return res.status(404).json('Not found Item');
        }

        item.active = false;
        item.modifiedAt = new Date();
        item.save();

        return res.status(204).json();
    } catch (error) {
        
    }
}
module.exports.createUser = createUser;
module.exports.getUsers = getUsers;
module.exports.getOneUser = getOneUser;
module.exports.updateUser = updateUser;
module.exports.removeUser = removeUser;