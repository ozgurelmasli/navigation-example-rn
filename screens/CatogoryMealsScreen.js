import React from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
CategoryMealsScreen.navigationOptions = (data) => {
  console.log(data);
};

export default CategoryMealsScreen;
