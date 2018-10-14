import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
   title: {
       type: string,
       required: 'Enter a title'
   },
    notes: {
        type: string,
        required: 'Enter a note'
    },
    created_date: {
       type: Date,
        default: Date.now
    }
});
