import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardState {
  summary: {
    userId: number;
    username: string;
    borrowedCount: number;
  }[];
  overdue: {
    recordId: number;
    userId: number;
    username: string;
    bookId: number;
    title: string;
    dueDate: string;
  }[];
  books: {
    id: number;
    title: string;
    author: string;
    isbn: string;
    totalCopies: number;
    availableCopies: number;
  }[];
}

const initialState: DashboardState = {
  summary: [],
  overdue: [],
  books: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSummary(state, action: PayloadAction<DashboardState['summary']>) {
      state.summary = action.payload;
    },
    setOverdue(state, action: PayloadAction<DashboardState['overdue']>) {
      state.overdue = action.payload;
    },
    setBooks(state, action: PayloadAction<DashboardState['books']>) {
      state.books = action.payload;
    },
  },
});

export const { setSummary, setOverdue, setBooks } = dashboardSlice.actions;
export default dashboardSlice.reducer;
