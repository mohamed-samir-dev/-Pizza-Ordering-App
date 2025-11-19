'use client'
import { useState, useEffect } from 'react';
import { User } from '@/types';

export function useAuth() {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  });


  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const user = localStorage.getItem('currentUser');
        setCurrentUser(user ? JSON.parse(user) : null);
      } catch {
        setCurrentUser(null);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const login = (email: string, password: string): boolean => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      let foundUser: User | null = null;
      
      // Always iterate through all users to prevent timing attacks
      for (const user of users) {
        if (user.email === email && user.password === password) {
          foundUser = user;
        }
      }

      if (foundUser) {
        localStorage.setItem('currentUser', JSON.stringify(foundUser));
        setCurrentUser(foundUser);
        window.dispatchEvent(new Event('storage'));
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const signup = (name: string, email: string, password: string): boolean => {
    try {
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

      const serializedUser = JSON.stringify(newUser);
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      localStorage.setItem('currentUser', serializedUser);
      setCurrentUser(newUser);
      window.dispatchEvent(new Event('storage'));
      return true;
    } catch {
      return false;
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('currentUser');
      setCurrentUser(null);
      window.dispatchEvent(new Event('storage'));
    } catch {
      setCurrentUser(null);
    }
  };

  return {
    currentUser,
    isAuthenticated: !!currentUser,
    login,
    signup,
    logout
  };
}