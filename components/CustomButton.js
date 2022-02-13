import react from "react";
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text}) => {
   return(
    <View>
   <Pressable onPress={onPress} style={styles.container}>
       <Text style={styles.text}>{text}</Text>
   </Pressable>
   </View>
   ); 
}

export default CustomButton;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3b71f3',
        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },
    text:{
        fontWeight: "bold",
        color: 'white',
    }
});