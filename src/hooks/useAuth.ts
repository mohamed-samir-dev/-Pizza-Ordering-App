'use client'
import { useState, useEffect } from 'react';
import { User } from '../types';

export function useAuth() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setIsLoading(false);

    const handleStorageChange = () => {
      const user = localStorage.getItem('currentUser');
      setCurrentUser(user ? JSON.parse(user) : null);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const login = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: User) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      window.dispatchEvent(new Event('storage'));
      return true;
    }
    return false;
  };

  const signup = (name: string, email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find((u: User) => u.email === email)) {
      return false;
    }

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      password,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setCurrentUser(newUser);
    window.dispatchEvent(new Event('storage'));
    return true;
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    window.dispatchEvent(new Event('storage'));
  };

  return {
    currentUser,
    isLoading,
    isAuthenticated: !!currentUser,
    login,
    signup,
    logout
  };
}