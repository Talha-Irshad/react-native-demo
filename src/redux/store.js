import { configureStore } from '@reduxjs/toolkit';
import {
  commonReducer,
  authReducer,
  memberReducer,
  transactionReducer,
} from './slices';


const store = configureStore({
  reducer: {
    common: commonReducer,
    auth: authReducer,
    member: memberReducer,
    transaction: transactionReducer,

  },
});


export default store 
