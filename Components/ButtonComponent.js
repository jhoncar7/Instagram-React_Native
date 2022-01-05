import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ButtonComponents(props) {

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{props.buttonName}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button : {
        borderWidth: 1,
        borderColor: 'gray',
        height: 30,
        borderRadius: 5,
        marginHorizontal: 15,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    }
});