import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import modeReducer from '../features/mode/modeSlice';
import tourReducer from '../features/tours/tourSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    mode: modeReducer,
    tours: tourReducer,
  },
})