import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    main: {
      textAlign: "center",
      padding: 10,
    },
    gameArea: {
      height: windowHeight - 50,
      borderColor: "black",
      borderWidth: 1,
      position: "relative",
      overflow: "hidden"
    },
    ReactObject: {
      position: "absolute",
    },
  })