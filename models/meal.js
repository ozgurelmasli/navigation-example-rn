class Meal {
    constructor(id
                , categoryIds
                , title
                , affordability
                , complexity
                , imageUrL
                , duration
                , ingredients
                , steps
                , isGlutenFree
                , isVegan
                , isVegetarian
                , isLactoseFree) {
        this.id = id
        this.title = title
        this.categoryIds = categoryIds
        this.affordability = affordability
        this.complexity = complexity
        this.imageUrL = imageUrL
        this.duration = duration
        this.ingredients = ingredients
        this.steps = steps
        this.isGlutenFree = isGlutenFree
        this.isVegan = isVegan
        this.isVegetarian = isVegetarian
        this.isLactoseFree = isLactoseFree

    }
}

export default Meal;