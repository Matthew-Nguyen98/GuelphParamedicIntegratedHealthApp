import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {

  return (
    <SafeAreaView>
      <Text style={ styles.title}>HomeScreen</Text>
      <TextInput
        style={styles.input}
        placeholder="Search for an article"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 30,
        paddingVertical: 8,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },

});
