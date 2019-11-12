export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_REQUETS = 'FETCH_DATA_REQUETS';

export const fetchData = (data) => {
  return{
    type: FETCH_DATA,
    data
  };
};