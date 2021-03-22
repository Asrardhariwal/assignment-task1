import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import Navbar from './componnets/Navbar/Navbar';

export default function App() {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{margin: 35}}>
        <Text style={styles.header}>Title & Body through API call</Text>
      </View>
      <Navbar />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    borderWidth: 0.5,
    fontWeight: 'bold',
    fontSize: 25,
  },
});
