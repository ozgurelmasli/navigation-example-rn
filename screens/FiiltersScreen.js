import React from "react";
import {View , Text , StyleSheet } from 'react-native';


const FiiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The categoris screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default FiiltersScreen;