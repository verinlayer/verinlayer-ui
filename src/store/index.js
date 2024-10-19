import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // Lưu trữ trong localStorage
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store);
