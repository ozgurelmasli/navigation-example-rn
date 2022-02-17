import React from "react";
import {View, Text, StyleSheet, TouchableOpacity , ImageBackground } from "react-native";

const MealItemCell = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelect}>
                <View>
                    <View style={{...styles.mealRow , ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.data.imageUrL}} style={ styles.bgImage }>
                            <Text style={styles.title} numberOfLines={1}> {props.data.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow , ...styles.mealDetail}}>
                        <Text>{props.data.duration}m</Text>
                        <Text>{props.data.complexity.toUpperCase()}</Text>
                        <Text>{props.data.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    mealItem: {
        height:200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius:10,
        overflow:'hidden'
    },
    mealRow: {
        flexDirection:'row'
    },
    mealHeader: {
        height:'85%'
    },
    mealDetail:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        height:'15%'
    },
    bgImage: {
        height:'100%',
        width:'100%',
        justifyContent:'flex-end'
    },
    title: {
        fontFamily: 'Avenir-Black',
        fontSize:22,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
        textAlign:'center'
    }
})

export default MealItemCell;