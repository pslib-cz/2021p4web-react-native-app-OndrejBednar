import React, { useState, useEffect, useCallback, useRef } from "react";
import { Dimensions, Text, View, Button } from "react-native";
import { ReactObject } from "./gameObject";
import { Accelerometer } from 'expo-sensors';
import styles from "./styles";

const SPEED = 10
const SPAWN_INTERVAL = 1000;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const GameScreen = ({ navigation, route }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(SPEED);
  const [reacts, setReacts] = useState([<ReactObject x={0} y={0}/>]);
  const [score, setScore] = useState(0);
  const fieldRef = useRef(null);
  const [accelerometerData, setAccelerometerData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  console.log("height:" + windowHeight);
  console.log("width:" + windowWidth);
  const { x, y, z } = accelerometerData;


  const spawnReactObject = useCallback(() => {
    setReacts((oldReacts) => [...oldReacts, CreateReactObject()]);
  }, [setReacts]);

  const onReactCatch = (index) => {
    setScore(score++);
    setReacts(removeDot(reacts, index));
  };

  const CreateReactObject = () => {
    let x = Math.floor(Math.random() * windowWidth - 20) + 10; //10px margin
    return <ReactObject x={x} y="0" />
  }

  const RemoveReactObject = (reacts, index) => {
    const newReacts = [...reacts]
    newReacts.splice(index, 1);
    return newReacts
  }

  const startGame = () => {
    console.log(fieldRef.current.offsetHeight);
    setIsRunning(true);

    console.log(reacts[0]);
    Accelerometer.isAvailableAsync()
    .then(s => {
      Accelerometer.addListener(accelerometerData => {
        setAccelerometerData(accelerometerData);
      })
    })
    .catch(error => {
      console.log(error);
    })
  }


  if (!isRunning) {
    return (
      <View style={styles.main}>
        <Text>{score}</Text>
        <View style={styles.gameArea} ref={fieldRef}>
          <Button title="Start Game" onPress={startGame} />
        </View>
      </View>
    )
  }
  else {
    return (
      <View style={styles.main}>
        <Text>{score}</Text>
        <View style={styles.gameArea} ref={fieldRef}>
          {reacts.map((reactObject, index) => {
            return <ReactObject key={index} x={reactObject.props.x} y={reactObject.props.y} index={index}/>
          })}
        </View>
      </View>
    )
  }
};
