const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    cuisine: "Italian",
    time: 30,
    image:
      "https://media.istockphoto.com/id/177413384/photo/pasta-with-carbonara.jpg?s=1024x1024&w=is&k=20&c=5ZRLITJjvwm0aEV6ynpdnJrjDmlraH-PD9mleSts6sQ=",
    description:
      "Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
    ingredients: ["Spaghetti", "Eggs", "Parmesan", "Pancetta", "Black Pepper"],
    instructions:
      "Boil pasta. Fry pancetta. Mix eggs and cheese. Toss with hot pasta and pancetta.",
    nutrition: { calories: 520, protein: "20g", carbs: "60g" },
    video: "https://www.youtube.com/embed/3AAdKl1UYZs",
  },
  {
    id: 2,
    title: "Chicken Curry",
    cuisine: "Indian",
    time: 45,
    image:
      "https://images.pexels.com/photos/7353379/pexels-photo-7353379.jpeg",
    description: "Rich and spicy chicken curry with aromatic spices.",
    ingredients: ["Chicken", "Onion", "Tomato", "Ginger", "Garlic", "Spices"],
    instructions:
      "Sauté onions, add ginger-garlic and spices. Add chicken and tomatoes, simmer until cooked.",
    nutrition: { calories: 610, protein: "32g", carbs: "40g" },
    video: "https://www.youtube.com/embed/jwyge5daKUQ",
  },
  {
    id: 3,
    title: "Avocado Toast",
    cuisine: "American",
    time: 10,
    image:
      "https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg",
    description:
      "Toast bread. Mash avocado with lemon and salt. Spread and top with chili flakes.",
    ingredients: ["Bread", "Avocado", "Lemon", "Salt", "Chili Flakes"],
    instructions:
      "Toast bread. Mash avocado with lemon and salt. Spread and top with chili flakes.",
    nutrition: { calories: 250, protein: "6g", carbs: "28g" },
    video: "https://www.youtube.com/embed/Rh4EI4luKAQ?start=23",
  },
];

export default recipes;
