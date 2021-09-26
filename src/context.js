import React, { useState, useContext } from 'react';
import { featuresData, testimonialsData, directorsData } from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [features, setFeatures] = useState(featuresData);
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [directors, setDirectors] = useState(directorsData);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <AppContext.Provider
      value={{
        scrollToTop,
        features,
        testimonials,
        directors,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
