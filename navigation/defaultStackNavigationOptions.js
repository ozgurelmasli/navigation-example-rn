import { Platform } from "react-native";
import Colors from "../constants/Colors";

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

export default defaultStackNavigationOptions