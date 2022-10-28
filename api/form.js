const FormSchema = require('../models/form')

const saveFormValues = async (req, res) => {
    try {
        const userForm = await FormSchema.Form.create(req.body)

        return res.status(200).send({userForm})
    } catch (err) {
        return console.log(err)
    }
}

const updateFormValues = async (req, res) => {

    const currentIdUser = { _id: req.params.id }
    const userForm = { ...req.body }

    try {
        const userUpdate = await FormSchema.Form.findOneAndUpdate(currentIdUser, userForm)

        res.status(200).send('Usuário alterado!')
    } catch (err) {
        res.status(400).send(err)
    }
}

const deleteUserForm = async (req, res) => {
    const currentIdUser = { _id: req.params.id }

    try {
        const deleteUser = await FormSchema.Form.findOneAndDelete(currentIdUser)

        res.status(200).send('Usuário deletado!')
    } catch (err) {
        res.status(400).send(err)
    }
}

const getUsers = async (req, res) => {
    
}

module.exports = { saveFormValues, updateFormValues, deleteUserForm }