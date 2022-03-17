import react from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureEntry}) => {
   return(<View style= {styles.container}>
       <TextInput
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureEntry}
        style={styles.input}
        on
       />
   </View>
   ); 
}

export default ResetInput;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '80%',
        height: 50,

        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input:{
        height: '100%',
    }
});