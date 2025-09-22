import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 0, text: 'Learn Algorithm', completed: true },
      { id: 1, text: 'Solve programming problems for a week', completed: false },
      { id: 2, text: 'Learn HTML and CSS', completed: false },
      { id: 3, text: 'Learn C#', completed: false },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      for (const task of state.items) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = slice.actions;

export default slice.reducer;
