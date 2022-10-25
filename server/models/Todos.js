const { Schema, model } = require('mongoose');

const todosSchema = new Schema(
    {
        todoName: String,
        required: "What is the name of the task to add?",
        minLength: 1,
        maxLength: 20
    },
    {
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        username: {
            type: String,
            required: true
        },
    },
    {
        recurrence: {
            type: String,
            required: true
        }
    },
    {
        dailyReset: {
            type: Boolean,
            default: true
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

const Todos = model('Todos', todosSchema);

module.exports = Todos;