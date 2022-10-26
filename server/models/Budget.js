const { Schema, model } = require('mongoose');

const budgetSchema = new Schema(
    {
        expenseName: String,
        required: true,
        unique: true
    },
    {
        expenseAmount: Number,
        required: true
    },
    {
        income: Number,
        required: false
    },
    {
        total: Number,
        required: true
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

const Budget = model('Budget', budgetSchema);

module.exports = Budget;