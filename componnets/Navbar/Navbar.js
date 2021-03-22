import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';

export default function Navbar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const posts = data.map((v, i) => {
    return (
      <ScrollView key={i}>
        <SafeAreaView style={{marginVertical: 10, borderWidth: 0.1}}>
          <Text style={styles.titleStyle}>
            user title :- <Text> {v.title}</Text>
          </Text>

          <Text style={{color: 'green'}}>user body :- {v.body}</Text>
        </SafeAreaView>
      </ScrollView>
    );
  });

  return <View>{posts}</View>;
}
const styles = StyleSheet.create({
  titleStyle: {color: 'red', fontWeight: 'bold'},
});
