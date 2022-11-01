const form = require('../api/form')

module.exports = app => {
    app.route('/')
        .post(form.saveFormValues)

    app.route('/:id')
        .put(form.updateFormValues)
        .delete(form.deleteUserForm)
        
    app.route('/users')
        .get(form.getUsers)
}