import {
  AddBookTypes,
  LoginTypes,
  RegisterLibrarianTypes,
  RegisterTypes,
} from '@/types';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true, // Send coookies with requests
});

export const register = (data: RegisterTypes) =>
  api.post('/auth/register', data);
export const registerLibrarian = (data: RegisterLibrarianTypes) =>
  api.post('/auth/register-librarian', data);
export const login = (data: LoginTypes) => api.post('/auth/login', data);
export const addBook = (data: AddBookTypes) => api.post('/books', data);
export const getAllBooks = () => api.get('/books');
export const getBookById = (id: number) => api.get(`/books/${id}`);
export const borrowBook = (userId: number, bookId: number) =>
  api.post(`/borrow/borrow?userId=${userId}&bookId=${bookId}`);
export const returnBook = (recordId: number) =>
  api.post(`/borrow/return/${recordId}`);
export const getHistory = (userId: number, page: number, size: number) =>
  api.get(`/user/history?userId=${userId}&page=${page}&size=${size}`);
export const getBorrowSummary = () => api.get('/borrow/summary');
export const getOverdueBooks = () => api.get('/borrow/overdue');

export default api;
