const { Schema } = require('mongoose');

const expensesSchema = new Schema(
    {
        expenseName: {
            type: String,
            required: true,
            maxlength: 20
        },
        expenseAmount: {
            type: Number,
            required: true,
        }
    },
    {
        toJson: {
            getters: true
        }
    }
);

module.exports = expensesSchema;
