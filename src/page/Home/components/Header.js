import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {loadHeader} from '../../../services/loadData';

import logo from '../../../assets/home/logo.png';

class Header extends React.Component {
  state = {
    header: {
      welcome: '',
      subtitle: '',
    },
  };

  updateHeader() {
    const returned = loadHeader();
    this.setState({header: returned});
  }

  componentDidMount() {
    this.updateHeader();
  }

  render() {
    return (
      <View style={styles.header}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.welcome}>{this.state.header.welcome}</Text>
        <Text style={styles.subtitle}>{this.state.header.subtitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3',
  },
});

export default Header;
