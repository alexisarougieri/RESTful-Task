const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index: function (req, res) {
        Task.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    create: function (req, res) {
        Task.create(req.body) // needs to take in req.body for create
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    findById: function (req, res) {
        Task.findById({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    update: function (req, res) {
        Task.findOneAndUpdate({ _id: req.params.id }, req.body) // needs req.body to update body
            .then(data => res.json(data))
            .catch(err => res.json(err));

    },
    delete: function (req, res) {
        Task.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
}