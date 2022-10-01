import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const filterInitSlice = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitSlice,
  reducers: {
    setFilterValue(state, action) {
     return state = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilterValue } = filterSlice.actions;

















// export const getFilterValue = state => state.filter.value;
// const persistConfigFilter = {
//   key: 'filter',
//   storage,
// };

// export const persistedReducerFilter = persistReducer(
//   persistConfigFilter,
//   filterReducer
// );
