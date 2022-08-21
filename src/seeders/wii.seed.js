const mongoose = require('mongoose');
const {MONGO_URI} = require('../config')
const {GameModel} = require('../models')
mongoose.connect(MONGO_URI)

const WiiGames = [
	{
		name: "Dragon Ball Z Budokai Tenkaichi 3",
		listNum: 11,
		console: "Wii",
		description: "Dragon Ball Z: Budokai Tenkaichi 3, is the third installment of the Budokai Tenkaichi series. Like its predecessor, despite being released under the Dragon Ball Z label, Budokai Tenkaichi 3 essentially touches upon all series installments of the Dragon Ball franchise, featuring numerous characters and stages set in Dragon Ball, Dragon Ball Z, Dragon Ball GT and numerous film adaptations of Z.",
		genres: ["Action", "Fighting"],
		price: 20,
		quantity: 1,
		logo: "wii11.jpg",
	},
	{
		name: "Wii Sports Resort",
		listNum: 12,
		console: "Wii",
		description: "Wii Sports Resort is a new collection of fun sports games that anyone can pick up and play. This sequel to the popular Wii Sports makes use of the Wii MotionPlus accessory, which gives players the most responsive and realistic experience possible",
		genres: ["Simulation", "Sports"],
		price: 20,
		quantity: 1,
		logo: "wii12.jpg",
	},
	{
		name: "Super Mario Galaxy",
		listNum: 13,
		console: "Wii",
		description: "Super Mario Galaxy is set in outer space, where Mario travels through different galaxies to collect Power Stars, earned by completing missions, defeating a boss, or reaching a particular area. Each galaxy contains planetoids and orbiting structures for the player to explore.",
		genres: ["Action", "Platforms"],
		price: 20,
		quantity: 1,
		logo: "wii13.jpg",
	},
	{
		name: "Mario Sports Mix",
		listNum: 14,
		console: "Wii",
		description: "Mario Sports Mix is a Wii video game by Nintendo released in 2010 in Japan. Mario Sports Mix features four playable sports, all unique from each other. Players can play either alone with CPU allies, cooperatively with others up to three players, or against one another.",
		genres: ["Sports", "Simulation"],
		price: 20,
		quantity: 1,
		logo: "wii14.jpg",
	},
	{
		name: "Mario Kart Wii",
		listNum: 15,
		console: "Wii",
		description: "Mario Kart Wii is a 2008 kart racing video game developed and published by Nintendo for the Wii. It is the sixth installment in the Mario Kart series. Like its previous installments, Mario Kart Wii incorporates playable characters from the Mario series, who participate in races on over 30 different race tracks",
		genres: ["Racing"],
		price: 20,
		quantity: 1,
		logo: "wii15.jpg",
	},
	{
		name: "Donkey Kong Country Returns",
		listNum: 16,
		console: "Wii",
		description: "Donkey Kong Country Returns is a side-scrolling platform game developed by Retro Studios and published by Nintendo for the Wii console. The game's story focuses on an evil group of Tiki-like creatures known as the Tiki Tak Tribe that are unleashed on Donkey Kong Island and hypnotize the island's animals to stealing Donkey Kong and Diddy Kong's banana hoard, prompting the two to traverse the island to reclaim it.",
		genres: ["Platforms"],
		price: 20,
		quantity: 1,
		logo: "wii16.jpg",
	},
	{
		name: "Ben 10 Protector Of Earth",
		listNum: 17,
		console: "Wii",
		description: "Ben 10 Protector of Earth' is a game where the player controls Ben and helps him to travel into 5 regions from the United States in order to recover all the Omnitrix's DNA samples stolen by Vilgax, which want use it to destroy the world.",
		genres: ["Brawler", "Action"],
		price: 20,
		quantity: 1,
		logo: "wii17.jpg",
	},
	{
		name: "The Legend Of Zelda Twilight Princess",
		listNum: 18,
		console: "Wii",
		description: "The Legend of Zelda: Twilight Princess[a] is a 2006 action-adventure game developed and published by Nintendo for the GameCube and Wii home video game consoles. The story focuses on series protagonist Link, who tries to prevent Hyrule from being engulfed by a corrupted parallel dimension known as the Twilight Realm. To do so, he takes the form of both a Hylian and a wolf, and he is assisted by a mysterious creature named Midna.",
		genres: ["Adventure", "Action"],
		price: 20,
		quantity: 1,
		logo: "wii18.jpg",
	},
	{
		name: "New Super Mario Bros Wii",
		listNum: 19,
		console: "Wii",
		description: "New Super Mario Bros. Wii is a 2D side-scrolling platform video game developed by Nintendo for the Wii. New Super Mario Bros. Wii is the first Super Mario game to feature simultaneous cooperative multiplayer gameplay. Up to four players, as either Mario, his brother Luigi, or one of two different colored Toads, can play through levels together.",
		genres: ["Platforms"],
		price: 20,
		quantity: 1,
		logo: "wii19.jpg",
	},
	{
		name: "Lego Batman",
		listNum: 20,
		console: "Wii",
		description: "The core gameplay of Lego Batman is similar to that of previous Lego video games, such as Lego Indiana Jones: The Original Adventures and the Lego Star Wars series. ... The game is set in Gotham City, with mainly realistic environments; only interactive objects are made of Lego bricks.",
		genres: ["Action", "Adventure"],
		price: 20,
		quantity: 1,
		logo: "wii20.jpg",
	}
]
GameModel.create(WiiGames).then(()=>{
	console.log('Wii Games Created Succesfully!')
	mongoose.disconnect();
  }).catch(console.log)