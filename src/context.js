import React, { useState, useContext } from 'react';
import { featuresData } from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [features, setFeatures] = useState(featuresData);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <AppContext.Provider value={{ scrollToTop, features }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
