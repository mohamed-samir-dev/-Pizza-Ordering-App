export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthState {
  currentUser: User | null;
  isAuthenticated: boolean;
}