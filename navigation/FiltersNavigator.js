import {createStackNavigator} from "react-navigation-stack";
import {HeaderButtons , Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import defaultStackNavigationOptions from "./defaultStackNavigationOptions";
import FilterScreen from "../screens/FilterScreen";
import React from "react";

const FilterNavigator = createStackNavigator({
    Filters: {
        screen: FilterScreen
        , navigationOptions: ({navigation}) => ({
            headerTitle: "Filters", headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    iconName="ios-menu"
                    onPress={() => {
                        navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>),
        }),
    },
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
});

export default FilterNavigator;