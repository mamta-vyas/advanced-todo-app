// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskSlice';
import weatherReducer from './reducers/weatherSlice';
import authReducer from './reducers/authSlice';

const persistedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
const persistedAuth = JSON.parse(localStorage.getItem('auth')) || { isAuthenticated: false };

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    weather: weatherReducer,
    auth: authReducer,
  },
  preloadedState: {
    tasks: { tasks: persistedTasks },
    auth: persistedAuth,
  },
});

store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState().tasks.tasks));
  localStorage.setItem('auth', JSON.stringify(store.getState().auth));
});

export default store;
