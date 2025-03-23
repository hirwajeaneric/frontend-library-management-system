import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  email: z.string().email('Invalid email'),
  role: z.enum(['ADMIN', 'LIBRARIAN', 'USER'], { message: 'Invalid role' }),
});

export const registerLibrarianSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  email: z.string().email('Invalid email'),
});

export const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const bookSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  isbn: z.string().min(1, 'ISBN is required'),
  totalCopies: z.number().min(1, 'Total copies must be positive'),
});

export const borrowSchema = z.object({
  userId: z.number().min(1, 'User ID is required'),
  bookId: z.number().min(1, 'Book ID is required'),
});
