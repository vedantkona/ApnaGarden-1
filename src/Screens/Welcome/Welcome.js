import { View, render,Button, StyleSheet, Text,Alert, TextInput  } from 'react-native'
import React from 'react'

const Separator = () => (
    <View style={styles.separator} />
);

export default function Welcome() {
    const [number, onChangeNumber] = React.useState(null);
  return (
    <View>
    <View>
        <Text style={styles.title}>Let's Personalize Your Experience</Text>
    </View>

    <View>
        <Text style={styles.content}> What can we call you? Could be your name, a nickname or something funny . </Text>
    </View>

    <View>
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Name"
            keyboardType="alphabetic"
            underlineColorAndroid="transparent"
        />
        <Separator />
        <Button
            title="Continue"
            color="#000"
            onPress={() => Alert.alert('Vishwas')}
        />
    </View>
</View>
  );
}

const styles = StyleSheet.create({
    title: {

        fontFamily: "Noe Display",
        fontSize: 32,
        lineHeight: 41,
        fontWeight: "bold"
    },
    content: {
        fontFamily: "Noe Display",

        fontSize: 18,
        marginBottom: 15,
        lineHeight: 26,
    },
    input: {
        borderTopColor: "#000000",
    },
    separator: {
        marginVertical: 2,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

}
);