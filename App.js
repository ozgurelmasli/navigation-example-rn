import React  from "react";
import { Text, View } from "react-native";
import { enableScreens} from "react-native-screens";
import * as Font from "expo-font";
//import { AppLoading } from "app-loading";

import MealsNavigator from "./navigation/MealsNavigator";

enableScreens()
/*
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
*/

export default function App() {
  /*
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setDataLoaded(true);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }
  */
  return (
    <MealsNavigator>
      <Text>Open up App.js to start working on your app!</Text>
    </MealsNavigator>
  );
}
