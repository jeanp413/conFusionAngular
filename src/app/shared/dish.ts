import { Comment } from './comment';

export interface Dish {
    id: number;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;
    comments: Comment[];
}

export const DISHES: Dish[] = [
    {
        "id": 0,
        "name": "Uthappizza",
        "image": "images/uthappizza.png",
        "category": "mains",
        "label": "Hot",
        "price": "4.99",
        "featured": true,
        "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
        "comments": [
            {
                "rating": 5,
                "comment": "Imagine all the eatables, living in conFusion!",
                "author": "John Lemon",
                "date": "2012-10-16T17:57:28.556094Z"
            },
            {
                "rating": 4,
                "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                "author": "Paul McVites",
                "date": "2014-09-05T17:57:28.556094Z"
            },
            {
                "rating": 3,
                "comment": "Eat it, just eat it!",
                "author": "Michael Jaikishan",
                "date": "2015-02-13T17:57:28.556094Z"
            },
            {
                "rating": 4,
                "comment": "Ultimate, Reaching for the stars!",
                "author": "Ringo Starry",
                "date": "2013-12-02T17:57:28.556094Z"
            },
            {
                "rating": 2,
                "comment": "It's your birthday, we're gonna party!",
                "author": "25 Cent",
                "date": "2011-12-02T17:57:28.556094Z"
            },
            {
                "author": "juan",
                "comment": "ghj ghg hjg hhh hhh hhgjg",
                "rating": 4,
                "date": "2017-12-18T03:33:56.880Z"
            },
            {
                "author": "huyuyu",
                "comment": "ghgg hghhhghgh hghgjg",
                "rating": 3,
                "date": "2017-12-18T03:36:25.655Z"
            },
            {
                "author": "ssssssssss",
                "comment": "dfsdf sdf  sdfds fsd fsd fsd df sd ffff",
                "rating": 2,
                "date": "2017-12-18T03:38:48.914Z"
            },
            {
                "author": "jorge",
                "comment": "me parece mas o menos",
                "rating": 1,
                "date": "2017-12-18T03:41:49.173Z"
            }
        ]
    },
    {
        "id": 1,
        "name": "Zucchipakoda",
        "image": "images/zucchipakoda.png",
        "category": "appetizer",
        "label": "",
        "price": "1.99",
        "featured": false,
        "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
        "comments": [
            {
                "rating": 5,
                "comment": "Imagine all the eatables, living in conFusion!",
                "author": "John Lemon",
                "date": "2012-10-16T17:57:28.556094Z"
            },
            {
                "rating": 4,
                "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                "author": "Paul McVites",
                "date": "2014-09-05T17:57:28.556094Z"
            },
            {
                "rating": 3,
                "comment": "Eat it, just eat it!",
                "author": "Michael Jaikishan",
                "date": "2015-02-13T17:57:28.556094Z"
            },
            {
                "rating": 4,
                "comment": "Ultimate, Reaching for the stars!",
                "author": "Ringo Starry",
                "date": "2013-12-02T17:57:28.556094Z"
            },
            {
                "rating": 2,
                "comment": "It's your birthday, we're gonna party!",
                "author": "25 Cent",
                "date": "2011-12-02T17:57:28.556094Z"
            }
        ]
    },
    {
        "id": 2,
        "name": "Vadonut",
        "image": "images/vadonut.png",
        "category": "appetizer",
        "label": "New",
        "price": "1.99",
        "featured": false,
        "description": "A quintessential ConFusion experience, is it a vada or is it a donut?",
        "comments": [
            {
                "rating": 5,
                "comment": "Imagine all the eatables, living in conFusion!",
                "author": "John Lemon",
                "date": "2012-10-16T17:57:28.556094Z"
            },
            {
                "rating": 4,
                "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                "author": "Paul McVites",
                "date": "2014-09-05T17:57:28.556094Z"
            },
            {
                "rating": 3,
                "comment": "Eat it, just eat it!",
                "author": "Michael Jaikishan",
                "date": "2015-02-13T17:57:28.556094Z"
            },
            {
                "rating": 4,
                "comment": "Ultimate, Reaching for the stars!",
                "author": "Ringo Starry",
                "date": "2013-12-02T17:57:28.556094Z"
            },
            {
                "rating": 2,
                "comment": "It's your birthday, we're gonna party!",
                "author": "25 Cent",
                "date": "2011-12-02T17:57:28.556094Z"
            }
        ]
    },
    {
        "id": 3,
        "name": "ElaiCheese Cake",
        "image": "images/elaicheesecake.png",
        "category": "dessert",
        "label": "",
        "price": "2.99",
        "featured": false,
        "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
        "comments": [
            {
                "rating": 5,
                "comment": "Imagine all the eatables, living in conFusion!",
                "author": "John Lemon",
                "date": "2012-10-16T17:57:28.556094Z"
            },
            {
                "rating": 4,
                "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                "author": "Paul McVites",
                "date": "2014-09-05T17:57:28.556094Z"
            },
            {
                "rating": 3,
                "comment": "Eat it, just eat it!",
                "author": "Michael Jaikishan",
                "date": "2015-02-13T17:57:28.556094Z"
            },
            {
                "rating": 4,
                "comment": "Ultimate, Reaching for the stars!",
                "author": "Ringo Starry",
                "date": "2013-12-02T17:57:28.556094Z"
            },
            {
                "rating": 2,
                "comment": "It's your birthday, we're gonna party!",
                "author": "25 Cent",
                "date": "2011-12-02T17:57:28.556094Z"
            }
        ]
    }
];