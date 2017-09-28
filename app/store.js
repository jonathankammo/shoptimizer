import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
/* eslint-disable react/prefer-stateless-function, class-methods-use-this */
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.titleText}>
          raceShopper
        </Text> */}
        <Image source={require('./assets/grocery-store-layout.png')} />
        <Text style={{ position: 'absolute', alignSelf: 'flex-start' }}>
          {'                         '}o
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleText: {
    // fontFamily: 'Serif',
    fontSize: 35,
    fontWeight: 'bold',
  },
});