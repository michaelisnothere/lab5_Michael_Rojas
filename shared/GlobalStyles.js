import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'drakgray',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 10,
  },

  totalCost: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default GlobalStyles;