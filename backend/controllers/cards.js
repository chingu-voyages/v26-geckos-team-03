import cardModel from '../models/cardModel.js';

export const getCards = async (req, res) => {
  try {
    const cards = await cardModel.find();

    console.log(cards);

    res.status(200).json(cards);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createCard = async (req, res) => {
  const card = req.body;
    
  const newCard= new cardModel(card);
  try {
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}