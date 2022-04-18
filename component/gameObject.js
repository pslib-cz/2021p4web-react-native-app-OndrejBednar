const icon = require("../assets/ReactIcon.png");
import { Animated, Image } from 'react-native';
import { useRef } from 'react';

export const ReactObject = (props) =>{
    const {x, y} = props;
    const position = useRef(new Animated.ValueXY()).current
    position.x = x;
    position.y = y;
    
    const reactStyle = {
        height: `${20}px`,
        width: `${20}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: "absolute",
    };


    const startFalling = () => {
        Animated.timing(position, {
            toValue: {x: x, y: 500}
        }).start();
    }

    return (
        <Animated.Image source={icon} style={reactStyle}/>
    )
}