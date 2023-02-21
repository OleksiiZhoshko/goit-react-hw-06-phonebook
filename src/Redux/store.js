import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlise";
import { contactsReducer } from "./contactSlise";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts']
}

const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})

const persistedReduser = persistReducer(persistConfig, rootReduser)

export const store = configureStore({
  reducer: persistedReduser,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);