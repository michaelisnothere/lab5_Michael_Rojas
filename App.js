import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import QuantityInput from './screens/QuantityInput';
import PriceCalculation from './screens/PriceCalculation';
import FinalBill from './screens/FinalBill';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="QuantityInput">
            <Stack.Screen component={QuantityInput} name="QuantityInput"/>
            <Stack.Screen component={PriceCalculation} name="PriceCalculation"/>
            <Stack.Screen component={FinalBill} name="FinalBill"/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}