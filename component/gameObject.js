const icon = require("../assets/ReactIcon.png");
import { Animated, Image, Button } from 'react-native';
import { useRef, useEffect } from 'react';
import { View } from 'react-native-web';

export const ReactObject = ({ x, y }) => {
    const position = useRef(new Animated.ValueXY({ x: x, y: y })).current;

    const reactStyle = {
        height: `${20}px`,
        width: `${20}px`,
        position: "absolute",
    };

    useEffect(() => {
        Animated.timing(position, {
            toValue: { x: position.x, y: 500 },
            duration: 5000,
            useNativeDriver: false
        }).start();
        console.log(position.y);
    }, [])

    return (
        <Animated.Image source={icon} style={[reactStyle, position.getLayout()]} />
    )
}