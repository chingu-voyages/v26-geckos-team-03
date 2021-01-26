const cardsReducer = (cards =[], action) => {
  switch(action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...cards, action.payload];
    default:
      return cards;
  }
};

export default cardsReducer;