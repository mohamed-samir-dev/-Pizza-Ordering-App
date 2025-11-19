'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface FlashContextType {
  isFlashing: boolean;
  triggerFlash: () => void;
}

const FlashContext = createContext<FlashContextType | undefined>(undefined);

export function FlashProvider({ children }: { children: ReactNode }) {
  const [isFlashing, setIsFlashing] = useState(false);

  const triggerFlash = () => {
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 2000);
  };

  return (
    <FlashContext.Provider value={{ isFlashing, triggerFlash }}>
      {children}
    </FlashContext.Provider>
  );
}

export function useFlash() {
  const context = useContext(FlashContext);
  if (!context) {
    throw new Error('useFlash must be used within FlashProvider');
  }
  return context;
}