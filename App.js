import { Provider } from 'react-redux'; 
import { StyleSheet, Text, View } from 'react-native';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import EatScreen from './screens/EatScreen';


export default function App() {
  const Stack= createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
              name="HomeScreen"
              component={HomeScreen}
              
            />
            <Stack.Screen 
              name="MapScreen"
              component={MapScreen}
              
            />
          </Stack.Navigator>
            <HomeScreen />
        </SafeAreaProvider>
      </NavigationContainer> 
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
