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
        name:'fried chicken',
        image: require('../assets/images/icons8-fried-chicken.png'),
    },
    {
        id:5,
        name:'cupcake',
        image: require('../assets/images/icons8-cupcake-emoji-96.png'),
    }

]

export const featured = [

  //category pizza
  {
    id:1, //id của category
    title:'Hồ Chí Minh',
    description:'abcdhdh',
    restaurants:[
        {
            id: 1, // này là id của 3 nhà hàng
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
                  id: 1, // id 3 món ăn trong nhà hàng
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

  {
    id:1,
    title:'Hà Nội',
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
  //category buger
  {
    id:2,
    title:'Hồ Chí Minh',
    description:'abcdhdh',
    restaurants:[
        {
            id: 1,
            name: "Burger King",
            image: require("../assets/images/burger/BurgerKing/logo.png"),
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
                  name: "Burger",
                  description: "Burger cá",
                  price: 10,
                  image: require('../assets/images/burger/BurgerKing/burgerca.jpg')
                },
                {
                  id: 2,
                  name: "Burger",
                  description: "Burger Gà Nướng",
                  price: 10,
                  image: require('../assets/images/burger/BurgerKing/burgertender.jpg')
                },
                {
                  id: 3,
                  name: "Burger",
                  description: "Burger Whopper",
                  price: 10,
                  image: require('../assets/images/burger/BurgerKing/burgewhopper.jpg')
                },
            ],
        },
        {
            id: 2,
            name: "McDonalds",
            image: require("../assets/images/burger/McDonalds/logo.png"),
            description: "Burger",
            lng: 38.2145682,
            lat: -85.5324269,
            address: "434 second street",
            stars: 4,
            reviews: 4400,
            category: "Fast Food",
            dishes: [
                {
                  id: 1,
                  name: "Burger",
                  description: "Burger Double Cheese",
                  price: 10,
                  image: require('../assets/images/burger/McDonalds/burger2chesse.png')
                },
                {
                  id: 2,
                  name: "Burger",
                  description: "Burger Gà Cay",
                  price: 10,
                  image: require('../assets/images/burger/McDonalds/burgergacay.png')
                },
                {
                  id: 3,
                  name: "Burger",
                  description: "Burger Big Mac",
                  price: 10,
                  image: require('../assets/images/burger/McDonalds/burgerbigmac.png')
                }
            ]  
        },
        
    ],    
  },
  //category drink
  {
    id:3,
    title:'Hồ Chí Minh',
    description:'abcdhdh',
    restaurants:[
        
        {
            id: 1,
            name: "Gongcha",
            image: require("../assets/images/drink/Gongcha/logo.png"),
            description: "Hot and spicy pizzas",
            lng: 38.2145682,
            lat: -85.5324269,
            address: "434 second street",
            stars: 4,
            reviews: 4400,
            category: "Drink",
            dishes: [
                {
                  id: 1,
                  name: "Trà sữa",
                  description: "Trà sữa xoài",
                  price: 10,
                  image: require('../assets/images/drink/Gongcha/trasuaxoai.png')
                },
                {
                  id: 2,
                  name: "Trà xanh",
                  description: "Trà xanh đào",
                  price: 10,
                  image: require('../assets/images/drink/Gongcha/traxanhdao.png')
                },
                {
                  id: 3,
                  name: "Milo",
                  description: "Milo kem chanh",
                  price: 10,
                  image: require('../assets/images/drink/Gongcha/milokemchanh.png')
                }
            ]  
        },
        {
            id: 2,
            name: "Phúc Long",
            image: require("../assets/images/drink/PhucLong/logo.png"),
            description: "Drink and Tea",
            lng: 38.2145682,
            lat: -85.5324269,
            address: "434 second street",
            stars: 4,
            reviews: 4400,
            category: "Drink",
            dishes: [
                {
                  id: 1,
                  name: "Cà phê",
                  description: "Bạc xỉu",
                  price: 10,
                  image: require('../assets/images/drink/PhucLong/bacxiu.png')
                },
                {
                  id: 2,
                  name: "Trà ",
                  description: "Matcha Đá xay",
                  price: 10,
                  image: require('../assets/images/drink/PhucLong/matcha.png')
                },
                {
                  id: 3,
                  name: "Trà",
                  description: "Trà lài đác thơm",
                  price: 10,
                  image: require('../assets/images/drink/PhucLong/tralaidacthom.png')
                }
            ]  
        }
    ],    
  },

  //category fried chicken


  //category cupcake
  {
    id:5,
    title:'Hồ Chí Minh',
    description:'abcdhdh',
    restaurants:[
        {
            id: 1,
            name: "Zen Bakery",
            image: require("../assets/images/cupcake/Zen/logo.png"),
            description: "Hot and spicy pizzas",
            lng: 106.629664,
            lat: 10.823099,
            address: "434 second street",
            stars: 4,
            reviews: "4.4k",
            category: "Bakery",
            dishes: [
                {
                  id: 1,
                  name: "Bánh ngọt",
                  description: "Bông lan chà bông",
                  price: 10,
                  image: require('../assets/images/cupcake/Zen/bonglanchabong.png')
                },
                {
                  id: 2,
                  name: "Bánh ngọt",
                  description: "Crepe Phô mai",
                  price: 10,
                  image: require('../assets/images/cupcake/Zen/crepephomai.png')
                },
                {
                  id: 3,
                  name: "Bánh ngọt",
                  description: "Sandwich Trái cây Nhiệt Đới",
                  price: 10,
                  image: require('../assets/images/cupcake/Zen/sandwichtraicay.png')
                },
            ],
        },
    ]
  }
];