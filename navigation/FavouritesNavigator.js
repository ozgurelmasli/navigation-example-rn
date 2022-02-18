import defaultStackNavigationOptions from "./defaultStackNavigationOptions";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import {
    createStackNavigator
} from "react-navigation-stack";

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

export default FavoritesNavigator;
