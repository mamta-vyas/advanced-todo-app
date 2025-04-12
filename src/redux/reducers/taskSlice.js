import { createSlice } from '@reduxjs/toolkit';

// Initial state, loading tasks from localStorage if available
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);  // Add task to Redux state
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Save tasks to localStorage
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);  // Remove task from Redux state
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Update tasks in localStorage
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;  // Update task in Redux state
        localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Update tasks in localStorage
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
