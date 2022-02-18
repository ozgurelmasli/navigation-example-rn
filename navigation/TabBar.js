import {Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import React from "react";
import FavoritesNavigator from "./FavouritesNavigator";
import MealsNavigator from "./MealsNavigator";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";

const TabBarScreensConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
                );
            },
            tabBarColor: Colors.primaryColor,
            // tabBarLabel: <Text style={{ fontSize: 20}}>Meals</Text>
        },
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.accentColor,
            tabBarBadge: "Yeni",
        },
    },
};

const TabBar = createMaterialBottomTabNavigator(TabBarScreensConfig, {
    activeColor: "white",
    shifting: true,
});

export default TabBar;