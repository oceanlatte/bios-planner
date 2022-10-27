const { Schema } = require('mongoose');

const incomeSchema = new Schema(
    {
        incomeAmount: {
            type: Number,
            required: false
        }
    },
    {
        toJson: {
            getters: true
        }
    }
);

module.exports = incomeSchema;