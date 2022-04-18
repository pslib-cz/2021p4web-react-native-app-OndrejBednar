const icon = require("../assets/ReactIcon.png");
import { Animated, Dimensions } from 'react-native';
import { useRef, useEffect } from 'react';

const windowHeight = Dimensions.get('window').height;

export const ReactObject = ({ x, y }) => {
    const position = useRef(new Animated.ValueXY({ x: x, y: y })).current;
    const reactStyle = {
        height: `${20}px`,
        width: `${20}px`,
        position: "absolute",
    };
    useEffect(() => {
        Animated.timing(position, {
            toValue: { x: position.x, y: windowHeight - 60 },
            duration: 5000,
            useNativeDriver: false
        }).start();
        console.log(position.y);
    }, [])

    return (
        <Animated.Image source={icon} style={[reactStyle, position.getLayout()]} />
    )
}