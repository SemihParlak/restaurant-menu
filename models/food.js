class Food {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    ingredients,
    images,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.complexity = complexity;
    this.affordability = affordability;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}

export default Food;
