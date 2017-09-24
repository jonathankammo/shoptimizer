import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
/* eslint-disable react/prefer-stateless-function, class-methods-use-this */
export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.titleText}>
          {'\n'}raceShopper
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    // fontFamily: 'Serif',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
