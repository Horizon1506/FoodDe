export const categories = [
    {
        id:1,
        name:'pizza',
        image: require('../assets/images/icons8-pizza-96.png'),
    },
    {
        id:2,
        name:'burger',
        image: require('../assets/images/icons8-hamburger-96.png'),
    },
    {
        id:3,
        name:'drink',
        image: require('../assets/images/icons8-tropical-drink-96.png'),
    },
    {
        id:4,
        name:'spaghetti',
        image: require('../assets/images/icons8-spaghetti-96.png'),
    },
    {
        id:5,
        name:'cupcake',
        image: require('../assets/images/icons8-cupcake-emoji-96.png'),
    }

]

export const featured = [
  {
    id:1,
    title:'Hồ Chí Minh',
    description:'abcdhdh',
    restaurants:[
        {
            id: 1,
            name: "Papa Johns",
            image: require("../assets/images/pizza/papajohn/logo.png"),
            description: "Hot and spicy pizzas",
            lng: 106.629664,
            lat: 10.823099,
            address: "434 second street",
            stars: 4,
            reviews: "4.4k",
            category: "Fast Food",
            dishes: [
                {
                  id: 1,
                  name: "Pizza",
                  description: "Pizza rau củ sốt BBQ",
                  price: 10,
                  image: require('../assets/images/pizza/papajohn/pizzaraucusotbbq.jpg')
                },
                {
                  id: 2,
                  name: "Pizza",
                  description: "Pizza Pepperoni",
                  price: 10,
                  image: require('../assets/images/pizza/papajohn/pizzaxucxich.jpg')
                },
                {
                  id: 3,
                  name: "Pizza",
                  description: "Pizza gà tỏi cay",
                  price: 10,
                  image: require('../assets/images/pizza/papajohn/pizzagatoicay.jpg')
                },
            ],
        },
        {
            id: 2,
            name: "Dominos",
            image: require("../assets/images/pizza/domino/OIP.jpg"),
            description: "Hot and spicy pizzas",
            lng: 38.2145682,
            lat: -85.5324269,
            address: "434 second street",
            stars: 4,
            reviews: 4400,
            category: "Fast Food",
            dishes: [
                {
                  id: 1,
                  name: "pizza",
                  description: "Pizza hải sản sốt mayonnaise",
                  price: 10,
                  image: require('../assets/images/pizza/domino/pizzahaisan.png')
                },
                {
                  id: 2,
                  name: "pizza",
                  description: "Pizza bò tôm nướng kiểu Mỹ",
                  price: 10,
                  image: require('../assets/images/pizza/domino/pizzabotomUS.jpg')
                },
                {
                  id: 3,
                  name: "pizza",
                  description: "Pizza rau củ thập cẩm",
                  price: 10,
                  image: require('../assets/images/pizza/domino/pizzaraucu.jpg')
                }
            ]  
        },
        {
            id: 3,
            name: "Pizza Hut",
            image: require("../assets/images/pizza/pizzahut/logo.png"),
            description: "Hot and spicy pizzas",
            lng: 38.2145682,
            lat: -85.5324269,
            address: "434 second street",
            stars: 4,
            reviews: 4400,
            category: "Fast Food",
            dishes: [
                {
                  id: 1,
                  name: "pizza",
                  description: "Pizza Hải Sản Nhiệt Đới",
                  price: 10,
                  image: require('../assets/images/pizza/pizzahut/PizzaHaiSanNhietDoi.jpg')
                },
                {
                  id: 2,
                  name: "pizza",
                  description: "Pizza Hải Sản Xốt Tiêu Đẻn",
                  price: 10,
                  image: require('../assets/images/pizza/pizzahut/PizzaHaiSanXotTieuDen.jpg')
                },
                {
                  id: 3,
                  name: "pizza",
                  description: "Pizza Xúc Xích Nướng",
                  price: 10,
                  image: require('../assets/images/pizza/pizzahut/PizzaXucXichNuong.jpg')
                }
            ]  
        }
    ],    
  },
  // other featured objects
  {
    id:1,
    title:'Hà Nội',
    description:'abcdhdh',
    restaurants:[
        {
            id: 1,
            name: "Papa Johns",
            image: require("../assets/images/pizza.jpg"),
            description: "Hot and spicy pizzas",
            lng: 105.8342,
            lat: 21.0278,
            address: "434 second street",
            stars: 4,
            reviews: "4.4k",
            category: "Fast Food",
            dishes: [
                {
                  id: 1,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
                {
                  id: 2,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
                {
                  id: 3,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
            ],
        },
        {
            id: 2,
            name: "Dominos",
            image: require("../assets/images/pizza.jpg"),
            description: "Hot and spicy pizzas",
            lng: 38.2145682,
            lat: -85.5324269,
            address: "434 second street",
            stars: 4,
            reviews: 4400,
            category: "Fast Food",
            dishes: [
                {
                  id: 1,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
                {
                  id: 2,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
                {
                  id: 3,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                }
            ]  
        },
        {
            id: 3,
            name: "Pizza Hut",
            image: require("../assets/images/pizza.jpg"),
            description: "Hot and spicy pizzas",
            lng: 38.2145682,
            lat: -85.5324269,
            address: "434 second street",
            stars: 4,
            reviews: 4400,
            category: "Fast Food",
            dishes: [
                {
                  id: 1,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
                {
                  id: 2,
                  name: "burger",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
                {
                  id: 3,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                }
            ]  
        }
    ],    
  },
  //category 2
  {
    id:2,
    title:'Bình Dương',
    description:'abcdhdh',
    restaurants:[
        {
            id: 1,
            name: "Papa Johns",
            image: require("../assets/images/pizza.jpg"),
            description: "Hot and spicy pizzas",
            lng: 106.629664,
            lat: 10.823099,
            address: "434 second street",
            stars: 4,
            reviews: "4.4k",
            category: "Fast Food",
            dishes: [
                {
                  id: 1,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
                {
                  id: 2,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
                {
                  id: 3,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
            ],
        },
        {
            id: 2,
            name: "Dominos",
            image: require("../assets/images/pizza.jpg"),
            description: "Hot and spicy pizzas",
            lng: 38.2145682,
            lat: -85.5324269,
            address: "434 second street",
            stars: 4,
            reviews: 4400,
            category: "Fast Food",
            dishes: [
                {
                  id: 1,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
                {
                  id: 2,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
                {
                  id: 3,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                }
            ]  
        },
        {
            id: 3,
            name: "Pizza Hut",
            image: require("../assets/images/pizza.jpg"),
            description: "Hot and spicy pizzas",
            lng: 38.2145682,
            lat: -85.5324269,
            address: "434 second street",
            stars: 4,
            reviews: 4400,
            category: "Fast Food",
            dishes: [
                {
                  id: 1,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
                {
                  id: 2,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                },
                {
                  id: 3,
                  name: "pizza",
                  description: "cheesy garlic pizza",
                  price: 10,
                  image: require('../assets/images/pizzadish.jpeg')
                }
            ]  
        }
    ],    
  },
];