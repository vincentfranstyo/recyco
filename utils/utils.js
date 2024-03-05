import { Dimensions } from 'react-native';

const getDimensions = () => {
    const { width, height } = Dimensions.get('window');
    return { width: width, height: height };
}

export default getDimensions;

