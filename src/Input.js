import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const Input = () => {
    const [value, setValue] = useState("");

    const pressHandler = () => {
        var a = value;
        var b = 0;

        if (value.trim()) {
            while (a > 0)
            {
                b = b + a % 10;
                a = Math.floor(a / 10);
            }
            Alert.alert("Ответ: " + b);
        }
    };

    return (
        <View style={styles.all}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Место для ввода числа" />

            <Button
                title="Продолжить"
                onPress={pressHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    all: {
        marginTop: "10%"
    },
    input: {
        width: '100%',
        textAlign: 'center'
    }
});