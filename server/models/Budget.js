const { Schema, model } = require('mongoose');
const expensesSchema = require('./Expenses');
const incomeSchema = require('./Income');

const budgetSchema = new Schema(
    {
        total: {
            type: Number,
            required: true
        },
        expenses: [expensesSchema],
        income: [incomeSchema]
    }
);

const Budget = model('Budget', budgetSchema);

module.exports = Budget;