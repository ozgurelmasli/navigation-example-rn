import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
//import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CatogoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiiltersScreen from "../screens/FiiltersScreen";

import Colors from "../constants/Colors";
import React from "react";
import { Platform , Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "../components/HeaderButton";

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle:{
    fontFamily:'Avenir',
    fontSize:22
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "Unspecified Title",
  mode: "modal",
  // initialRouteName: 'MealDetail' // Initial Page
};
const FavoritesNavigator = createStackNavigator(
  {
    Favourites: {
      screen: FavoritesScreen,
      navigationOptions: {
        headerTitle: "Your Favourites",
      },
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Category Meals",
        headerLeft: (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            ></Item>
          </HeaderButtons>
        ),
      }),
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.getParam("categoryId"),
      }),
    },
    MealDetail: {
      screen: MealDetailScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.getParam("meal").title,
        /*
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Favorite"
                        iconName="ios-star"
                        onPress={() => {
                            console.log('Mark as favorite!');
                        }}
                    />
                </HeaderButtons>
            )
             */
      }),
    },
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const FilterNavigator = createStackNavigator({
  Filters: {
    screen: FiiltersScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Filters",
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          ></Item>
        </HeaderButtons>
      ),
    }),
  },
} , {
  defaultNavigationOptions: defaultStackNavigationOptions
});

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

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: TabBar,
    navigationOptions: {
      activeColor: Colors.primaryColor,
      drawerLabel: 'Meals',
    }
  },
  Filters: FilterNavigator,
}, {
  contentOptions: {
    activeColor: Colors.primaryColor,
  }
});
/*
const TabBar =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(TabBarScreensConfig, {
        activeColor: Colors.accentColor,
        shifting: true
    })
    : createBottomTabNavigator(TabBarScreensConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
          inactiveTintColor: Colors.primaryColor,
        },
      });

*/

export default createAppContainer(MainNavigator);
