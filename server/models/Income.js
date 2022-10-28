const { Schema } = require('mongoose');

const incomeSchema = new Schema(
    {
        incomeAmount: {
            type: Number,
            required: false
        }
    }
);

module.exports = incomeSchema;