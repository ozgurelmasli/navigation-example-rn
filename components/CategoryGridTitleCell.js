import React from "react";
import {TouchableOpacity, View, Text, StyleSheet} from "react-native";


const categoryGridTitleCell = props => {
    return (
        <TouchableOpacity onPress={
            () => {
                props.onSelect()
            }
        } style={styles.categoryCellContainer}>
            <View style={{...styles.container,...{backgroundColor: props.color}}}>
                <Text style={ styles.title } numberOfLines={ 2 }>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryCellContainer: {
        flex: 1,
        margin: 15,
        height: 150,
        shadowColor:'black',
        shadowOpacity:0.3,
        shadowOffset: { width: 0 , height: 2},
        shadowRadius:10,
        elevation:3,
    },
    container: {
        flex:1,
        borderRadius: 10,
        borderColor:'black',
        borderWidth:3,

        padding:10,
        justifyContent:'flex-end',
        alignItems:'flex-end',

    },
    title: {
        fontFamily: 'Avenir-Black',
        fontSize: 22,
        textAlign:'center'
    }

})


export default categoryGridTitleCell;