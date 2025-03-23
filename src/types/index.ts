export type RegisterTypes = {
  username: string;
  password: string;
  email: string;
  role: string;
};

export type RegisterLibrarianTypes = {
  username: string;
  password: string;
  email: string;
};

export type LoginTypes = {
  username: string;
  password: string;
};

export type AddBookTypes = {
  title: string;
  author: string;
  isbn: string;
  totalCopies: number;
};
