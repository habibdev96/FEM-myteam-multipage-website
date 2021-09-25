import React, { useState, useContext } from 'react';
import { featuresData, testimonialsData } from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [features, setFeatures] = useState(featuresData);
  const [testimonials, setTestimonials] = useState(testimonialsData);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <AppContext.Provider value={{ scrollToTop, features, testimonials }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
