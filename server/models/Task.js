const mongoose =  require('mongoose');

let taskSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "Your task will need a title!"],
        minlength: [2, "Your task will must be longer than 2 characters!"]
    },
    desc: {
        type: String,
        trim: true,
        defaults: "",
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {timestamps: true});

mongoose.model('Task', taskSchema);
