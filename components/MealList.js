import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItemCell from "./MealItemCell";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItemCell
        data={itemData.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              meal: itemData.item,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        keyExtractor={(item, index) => item.id}
        style={{ width: "100%", padding: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
