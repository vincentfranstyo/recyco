import React, { createContext, useContext } from 'react';
import useFonts from '../hooks/FontHooks';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
    const fontsLoaded = useFonts();

    return (
        <FontContext.Provider value={{ fontsLoaded }}>
            {children}
        </FontContext.Provider>
    );
};

export const useFont = () => useContext(FontContext);
