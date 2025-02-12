import { Text, View, TouchableOpacity } from 'react-native';
import GlobalStyles from '../shared/GlobalStyles';

const PriceCalculation = ({ route, navigation }) => {
  const { quantity } = route.params;
  const cost = 5;

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Price Calculation</Text>
      <Text style={GlobalStyles.subtitle}>Quantity: {quantity}</Text>
      <Text style={GlobalStyles.subtitle}>Cost: {cost}</Text>
      <TouchableOpacity
        style={GlobalStyles.button}
        onPress={() => {
          navigation.navigate('FinalBill', { quantity: quantity });
        }}>
        <Text style={GlobalStyles.buttonText}>Calculate Final Cost</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PriceCalculation;