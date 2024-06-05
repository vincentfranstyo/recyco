import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

const useFonts = async () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Poppins-Black': require('../assets/fonts/Poppins/Poppins-Black.ttf'),
                'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
                'Poppins': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
            });
            setFontsLoaded(true);
        };

        loadFonts();
    }, []);

    return fontsLoaded;
};

export default useFonts;
