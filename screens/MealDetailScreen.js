import React from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";

const ListCellItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const meal = props.navigation.getParam("meal");
  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrL }} style={styles.image} />
      <View style={styles.details}>
        <Text>{meal.duration}m</Text>
        <Text>{meal.complexity.toUpperCase()}</Text>
        <Text>{meal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((ingredient) => (
        <ListCellItem key={ingredient}>{ingredient} </ListCellItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((step) => (
        <ListCellItem key={step}>{step} </ListCellItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "Avenir",
    fontSize: 24,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 2,
    padding: 10,
  },
});

export default MealDetailScreen;
