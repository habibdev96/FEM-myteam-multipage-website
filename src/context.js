import React, { useState, useContext } from 'react';
import {
  featuresData,
  testimonialsData,
  directorsData,
  clientsData,
  contactData,
} from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [features, setFeatures] = useState(featuresData);
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [directors, setDirectors] = useState(directorsData);
  const [clients, setClients] = useState(clientsData);
  const [contactInfo, setContactInfo] = useState(contactData);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <AppContext.Provider
      value={{
        scrollToTop,
        features,
        testimonials,
        directors,
        clients,
        contactInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
