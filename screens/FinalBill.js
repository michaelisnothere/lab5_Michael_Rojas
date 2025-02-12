import { Text, View, TouchableOpacity } from 'react-native';
import GlobalStyles from '../shared/GlobalStyles';

const FinalBill = ({ route, navigation }) => {
  const { quantity } = route.params;
  const cost = 5;
  const total = quantity * cost;
  const finalCost = total * 0.13 + total;

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Final Bill</Text>
      <Text style={GlobalStyles.subtitle}>Quantity: {quantity}</Text>
      <Text style={GlobalStyles.subtitle}>Cost: {cost}</Text>
      <Text style={GlobalStyles.totalCost}>Total Cost: {finalCost}</Text>
      <TouchableOpacity
        style={GlobalStyles.button}
        onPress={() => {
          navigation.navigate('QuantityInput');
        }}>
        <Text style={GlobalStyles.buttonText}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FinalBill;