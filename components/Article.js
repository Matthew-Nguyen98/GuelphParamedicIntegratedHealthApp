import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput } from "react-native";

const Article = ({navigation}) =>{

    return (
        
        <SafeAreaView style={ styles.container}>
            <Text style={ styles.title}>Medical Directive</Text>
             <TextInput
            style={styles.input}
            placeholder="Search for an Article"
            />
            <Text style={{color: 'blue', fontSize: 20}}>Article 1</Text>
            <Text style={{color: 'blue', fontSize: 20}}>Article 2</Text>
            <Text style={{color: 'blue', fontSize: 20}}>Article 3</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 30,
        paddingVertical: 8,
    },
    input: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 6,
        
      },
      container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%',
      },
      button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
      } 
    
    });

export default Article;