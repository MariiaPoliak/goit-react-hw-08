import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../contacts/slice";
import authReducer from "../auth/authSlice";
import filtersReducer from "../filters/slice"; // Import filtersReducer
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persistence configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["token", "filters"], // Persist filters if needed
};

// Create persisted reducer for auth
const persistedReducer = persistReducer(persistConfig, authReducer);

// Configure the store
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistedReducer,
    filters: filtersReducer, // Add filtersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persist store for Redux state
export const persistor = persistStore(store);
