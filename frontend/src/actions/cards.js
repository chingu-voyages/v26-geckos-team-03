import * as api from '../api';

export const getCards = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCards();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}