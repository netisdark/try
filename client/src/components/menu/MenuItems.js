const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", price: 250 },
      { name: "Americano", price: 270 },
      { name: "Cappuccino", price: 350 },
      { name: "Latte", price: 380 },
      { name: "Mocha", price: 400 },
      { name: "Macchiato", price: 300 },
      { name: "Flat White", price: 370 },
      { name: "Cortado", price: 320 },
      { name: "Cold Brew", price: 350 },
      { name: "Irish Coffee", price: 500 },
      { name: "Affogato", price: 450 },
      { name: "Ristretto", price: 280 },
      { name: "Vienna Coffee", price: 420 },
      { name: "Iced Latte", price: 380 },
      { name: "Decaf Coffee", price: 250 }
    ]
  },
  {
    category: "Tea",
    items: [
      { name: "Green Tea", price: 200 },
      { name: "Black Tea", price: 180 },
      { name: "Chai Latte", price: 300 },
      { name: "Earl Grey", price: 250 },
      { name: "Chamomile", price: 220 },
      { name: "Peppermint", price: 220 },
      { name: "Jasmine Tea", price: 250 },
      { name: "Oolong Tea", price: 270 },
      { name: "Matcha Latte", price: 400 },
      { name: "Lemon Tea", price: 230 },
      { name: "Hibiscus Tea", price: 250 },
      { name: "Rooibos Tea", price: 240 },
      { name: "White Tea", price: 280 },
      { name: "Turmeric Tea", price: 300 },
      { name: "Ginger Tea", price: 250 }
    ]
  },
  {
    category: "Cold Drinks",
    items: [
      { name: "Iced Lemon Tea", price: 250 },
      { name: "Iced Coffee", price: 300 },
      { name: "Lemonade", price: 280 },
      { name: "Iced Mocha", price: 400 },
      { name: "Fruit Punch", price: 350 },
      { name: "Iced Chai", price: 320 },
      { name: "Cold Brew", price: 350 },
      { name: "Sparkling Water", price: 150 },
      { name: "Arnold Palmer", price: 300 },
      { name: "Cucumber Cooler", price: 380 },
      { name: "Iced Matcha", price: 400 },
      { name: "Mint Lemonade", price: 300 },
      { name: "Peach Iced Tea", price: 350 },
      { name: "Cranberry Juice", price: 300 },
      { name: "Orange Fizz", price: 320 }
    ]
  },
  {
    category: "Pastries",
    items: [
      { name: "Chocolate Croissant", price: 300 },
      { name: "Blueberry Muffin", price: 280 },
      { name: "Almond Danish", price: 350 },
      { name: "Cinnamon Roll", price: 300 },
      { name: "Apple Turnover", price: 320 },
      { name: "Cheese Danish", price: 350 },
      { name: "Lemon Tart", price: 400 },
      { name: "Scone", price: 250 },
      { name: "Banana Bread", price: 300 },
      { name: "Pecan Pie Slice", price: 450 },
      { name: "Pumpkin Muffin", price: 300 },
      { name: "Raspberry Danish", price: 350 },
      { name: "Chocolate Chip Cookie", price: 150 },
      { name: "Macarons", price: 400 },
      { name: "Baklava", price: 380 }
    ]
  },
  {
    category: "Sandwiches",
    items: [
      { name: "Turkey Sandwich", price: 550 },
      { name: "Ham & Cheese", price: 500 },
      { name: "Veggie Sandwich", price: 450 },
      { name: "Club Sandwich", price: 600 },
      { name: "BLT", price: 550 },
      { name: "Grilled Cheese", price: 400 },
      { name: "Chicken Salad Sandwich", price: 580 },
      { name: "Roast Beef Sandwich", price: 600 },
      { name: "Tuna Melt", price: 550 },
      { name: "Egg Salad Sandwich", price: 450 },
      { name: "Caprese Sandwich", price: 550 },
      { name: "Pulled Pork Sandwich", price: 650 },
      { name: "Meatball Sub", price: 600 },
      { name: "Veggie Wrap", price: 500 },
      { name: "Chicken Pesto Sandwich", price: 620 }
    ]
  },
  {
    category: "Salads",
    items: [
      { name: "Caesar Salad", price: 600 },
      { name: "Greek Salad", price: 650 },
      { name: "Garden Salad", price: 500 },
      { name: "Cobb Salad", price: 700 },
      { name: "Kale Salad", price: 650 },
      { name: "Quinoa Salad", price: 680 },
      { name: "Pasta Salad", price: 550 },
      { name: "Chicken Salad", price: 700 },
      { name: "Tuna Salad", price: 680 },
      { name: "Fruit Salad", price: 500 },
      { name: "Spinach Salad", price: 600 },
      { name: "Beet Salad", price: 620 },
      { name: "Caprese Salad", price: 650 },
      { name: "Avocado Salad", price: 680 },
      { name: "Shrimp Salad", price: 750 }
    ]
  },
  {
    category: "Breakfast",
    items: [
      { name: "Pancakes", price: 400 },
      { name: "Omelette", price: 350 },
      { name: "French Toast", price: 420 },
      { name: "Breakfast Burrito", price: 450 },
      { name: "Bagel with Cream Cheese", price: 300 },
      { name: "Avocado Toast", price: 500 },
      { name: "Granola Bowl", price: 350 },
      { name: "Eggs Benedict", price: 550 },
      { name: "Smoothie Bowl", price: 400 },
      { name: "Breakfast Sandwich", price: 450 },
      { name: "Waffles", price: 400 },
      { name: "Fruit Platter", price: 350 },
      { name: "Scrambled Eggs", price: 300 },
      { name: "Breakfast Sausage", price: 400 },
      { name: "Hash Browns", price: 250 }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Cake", price: 450 },
      { name: "Cheesecake", price: 500 },
      { name: "Apple Pie", price: 400 },
      { name: "Brownies", price: 350 },
      { name: "Tiramisu", price: 550 },
      { name: "Ice Cream Sundae", price: 400 },
      { name: "Lemon Meringue Pie", price: 450 },
      { name: "Panna Cotta", price: 500 },
      { name: "Creme Brulee", price: 550 },
      { name: "Fruit Tart", price: 400 },
      { name: "Cupcakes", price: 300 },
      { name: "Macarons", price: 400 },
      { name: "Carrot Cake", price: 450 },
      { name: "Banoffee Pie", price: 500 },
      { name: "Churros", price: 350 }
    ]
  },
  {
    category: "Smoothies",
    items: [
      { name: "Mango Smoothie", price: 400 },
      { name: "Strawberry Smoothie", price: 400 },
      { name: "Banana Smoothie", price: 350 },
      { name: "Green Smoothie", price: 380 },
      { name: "Berry Blast", price: 420 },
      { name: "Pineapple Smoothie", price: 400 },
      { name: "Peach Smoothie", price: 400 },
      { name: "Avocado Smoothie", price: 450 },
      { name: "Chocolate Smoothie", price: 420 },
      { name: "Protein Smoothie", price: 480 },
      { name: "Detox Smoothie", price: 400 },
      { name: "Tropical Smoothie", price: 430 },
      { name: "Coconut Smoothie", price: 400 },
      { name: "Orange Smoothie", price: 380 },
      { name: "Mixed Berry Smoothie", price: 420 }
    ]
  },
  {
    category: "Specials",
    items: [
      { name: "Chef's Special Omelette", price: 750 },
      { name: "Truffle Mac & Cheese", price: 800 },
      { name: "Lobster Roll", price: 1200 },
      { name: "Beef Wellington", price: 1500 },
      { name: "Gourmet Burger", price: 700 },
      { name: "Seafood Paella", price: 1300 },
      { name: "Duck Confit", price: 1400 },
      { name: "Filet Mignon", price: 1600 },
      { name: "Vegetarian Platter", price: 600 },
      { name: "BBQ Ribs", price: 900 },
      { name: "Stuffed Chicken Breast", price: 850 },
      { name: "Prawn Curry", price: 950 },
      { name: "Quinoa & Veggie Bowl", price: 650 },
      { name: "Sushi Platter", price: 1200 },
      { name: "Mushroom Risotto", price: 700 }
    ]
  }
];

export default menuItems;