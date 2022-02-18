import { createStackNavigator } from "react-navigation-stack";
import defaultStackNavigationOptions  from './defaultStackNavigationOptions'
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CatogoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton  from "../components/HeaderButton";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: ({navigation}) => ({
          headerTitle: "Category Meals", headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                      navigation.toggleDrawer();
                  }}
              />
          </HeaderButtons>),
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
export default MealsNavigator;



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
