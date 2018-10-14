import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ArticleSchema = new Schema({
   title: {
       type: String,
       required: 'Enter a title'
   },
    notes: {
        type: String,
        required: 'Enter a note'
    },
    created_date: {
       type: Date,
        default: Date.now
    }
});
