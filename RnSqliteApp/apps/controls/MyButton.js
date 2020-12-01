/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.onButtonClick}>
            <Text children={props.title} style={styles.title} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#1877f2',
        padding: 15,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 5,
    },
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default MyButton;
