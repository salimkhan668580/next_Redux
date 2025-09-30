// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/couter/counterSlice';
import todoReducer from './features/todos/todoSlice';

const rootReducer = {
    counter: counterReducer,
    todos: todoReducer
}

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];