import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  title: String,
  description: String,
  category: String,
  icon: String,
  createdAt: {
    type:Date,
    default: new Date()
  }
});


const cardModel = mongoose.model('cardModel', cardSchema);

export default cardModel;