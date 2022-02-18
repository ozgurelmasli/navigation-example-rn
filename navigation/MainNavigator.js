import {createDrawerNavigator} from "react-navigation-drawer";
import Colors from "../constants/Colors";
import TabBar from "./TabBar";
import {createAppContainer} from "react-navigation";
import FiltersNavigator from "./FiltersNavigator";

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: TabBar,
        navigationOptions:{
            activeColor: Colors.primaryColor,
            drawerLabel: 'Meals',
        }
    },
    Filters: FiltersNavigator,
}, {
    contentOptions: {
        activeColor: Colors.primaryColor,
    }
});

export default createAppContainer(MainNavigator);