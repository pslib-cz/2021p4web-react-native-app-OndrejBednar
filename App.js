import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from "./component/HomeScreen";
import { GameScreen } from "./component/Game";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar
    backgroundColor = "#b3e6ff"  
      hidden={true}
    />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen name="Game" options={{ headerShown: false }} component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
