import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';


const AssessmentScreen = () => {
  return (
    <View>
            <TextInput
        style={styles.input}
        placeholder="Search For A Form"
      />
    </View>
  );
};

export default AssessmentScreen;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
