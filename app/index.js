require('react-devtools-core').connectToDevTools('localhost', 8081);
// require('react-devtools-core/standalone')
//   .setContentDOMNode(document.getElementById('container'))
//   .startServer(8081);

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Store from './store';
// import TextInput from './text';

class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Find a store' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome to raceShopper!',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ alignSelf: 'center' }}>Hello, UserName! Where are you shopping today?</Text>
        <ScrollView>
          <Button
            style={{ marginBottom: 10, fontSize: 18, height: 44, }}
            onPress={() => navigate('ShopScreen', { market: 'Devin\'s Darn Good Groceries' })}
            title="Shop at Devin's Darn Good Groceries"
          />
          <Button
            onPress={() => navigate('ShopScreen', { market: 'Jack\'s Mart' })}
            title="Shop at Jack's Mart"
          />
          <Button
            onPress={() => navigate('ShopScreen', { market: 'Jon\'s Market' })}
            title="Shop at Jon's Market"
          />
          <UselessTextInput />
        </ScrollView>
      </View>
    );
  }
}

class ShopScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Shop with ${navigation.state.params.market}`,
    }
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Image source={require('./assets/grocery-store-layout.png')} />
        {/* <Text style={{ position: 'absolute', alignSelf: 'flex-start' }}>
          {'                         '}o
        </Text> */}
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

export default SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  ShopScreen: { screen: ShopScreen },
});

// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('SimpleApp', () => SimpleApp);


// import React, { Component } from 'react';
// import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
// /* eslint-disable react/prefer-stateless-function, class-methods-use-this */

// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>
//           Welcome to raceShopper
//         </Text>
//         <FlatList
//           data={[
//             {key: 'Devin\'s Darn Good Groceries'},
//             {key: 'Jack\'s Mart'},
//             {key: 'Jon\'s Market'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
