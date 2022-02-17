import React from "react";
import {
    View,
    Text,
    Button,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTitleCell from "../components/CategoryGridTitleCell";


const CategoriesScreen = (props) => {
    const categoryCell = (data) => {
        return <CategoryGridTitleCell
            title={data.item.title}
            color={data.item.color}
            onSelect={
                () => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: data.item.id
                        }
                    })
                }
            }/>
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={categoryCell}
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

});

export default CategoriesScreen;
