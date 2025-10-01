// store/store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/couter/counterSlice';
import todoReducer from './features/todos/todoSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer =combineReducers( {
    counter: counterReducer,
    todos: todoReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos',"counter"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
     middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};



export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];