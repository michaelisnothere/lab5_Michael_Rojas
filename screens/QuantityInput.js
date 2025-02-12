import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import GlobalStyles from '../shared/GlobalStyles';
import React, { useState } from 'react';

const QuantityInput = ({ navigation }) => {
  const [quantity, setQuantity] = useState('');

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Quantity Input Screen</Text>
      <TextInput
        style={GlobalStyles.input}
        placeholder="Enter Quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
      />
      <TouchableOpacity
        style={GlobalStyles.button}
        onPress={() => {
          navigation.navigate('PriceCalculation', { quantity: quantity });
        }}>
        <Text style={GlobalStyles.buttonText}>Calculation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuantityInput;