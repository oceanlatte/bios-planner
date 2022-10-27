const { Schema, model } = require('mongoose');

const budgetSchema = new Schema(
    {
        expenseName: {
            type: String,
            required: true,
            unique: true
        },

        expenseAmount: {
            type: Number,
            required: true
        },

        income: {
            type: Number,
            required: false
        },

        total: {
            type: Number,
            required: true
        },
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Budget = model('Budget', budgetSchema);

module.exports = Budget;