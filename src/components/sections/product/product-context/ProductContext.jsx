import { createContext, useContext } from 'react';

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  // 🔴 MOCK — replace later with real logic
  const canShowRecommendations = true;

  return (
    <ProductContext.Provider value={{ canShowRecommendations }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const ctx = useContext(ProductContext);
  if (!ctx) {
    throw new Error('useProduct must be used within ProductProvider');
  }
  return ctx;
};
