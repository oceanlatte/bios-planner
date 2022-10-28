const { Schema, model } = require('mongoose');

const todosSchema = new Schema(
    {
        todoName: {
            type: String,
            required: [true, "Please provide a name for the task."],
            minLength: 1,
            maxLength: 20
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        },
        recurrence: {
            type: String,
            required: true
        },
        dailyReset: {
            type: Boolean,
            default: true
        }
    }
)

const Todos = model('Todos', todosSchema);

module.exports = Todos;