import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Article = (props) =>{

    return (
        <View>
            <Text>{props.Text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default Article;