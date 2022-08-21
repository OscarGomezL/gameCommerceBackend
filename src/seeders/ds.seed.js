const mongoose = require('mongoose');
const {MONGO_URI} = require('../config')
const {GameModel} = require('../models')
mongoose.connect(MONGO_URI)

const DsGames = [
	{
		name: "Dragon Ball Z: Attack of Saiyans",
		listNum: 1,
		console: "Ds",
		description: "Dragon Ball Z: Attack of the Saiyans, is a video game based on the Dragon Ball franchise for the Nintendo DS.",
		genres: ["Action","Role-Playing", "Strategy"],
		price: 20,
		quantity: 1,
		logo: "ds1.jpg",
	},
	{
		name: "Dragon Ball Z: Supersonic Warriors 2",
		listNum: 2,
		console: "Ds",
		description: "Dragon Ball Z: Supersonic Warriors 2, is a 2D fighting game where the player chooses a team of three to fight against an enemy or another team. There are various modes to choose from which can help bring up the player's character roster and award dragon power when unlocked.",
		genres: ["Action", "Fighting"],
		price: 20,
		quantity: 1,
		logo: "ds2.jpg",
	},
	{
		name: "Kirby Super Star Ultra",
		listNum: 3,
		console: "Ds",
		description: "Kirby Super Star Ultra re-imagines one of the most beloved Kirby games of all time. Kirby Super Star Ultra features new graphics and fully rendered animated cut scenes. With so many adventures waiting to be unlocked, there will never be a dull moment as Kirby runs, floats, copies enemies and uses Helpers to fight King Dedede and Meta Knight.",
		genres: ["Action", "Platforms"],
		price: 20,
		quantity: 1,
		logo: "ds3.jpg",
	},
	{
		name: "Mario & Luigi Partners in Time",
		listNum: 4,
		console: "Ds",
		description: "The story of the game involves Mario and Luigi time-traveling between their present and past times and teaming up with their infant selves, Baby Mario and Baby Luigi, to stop the invasion in the past by the enemy alien species called the Shroobs.",
		genres: ["Strategy ", "Role-Playing"],
		price: 20,
		quantity: 1,
		logo: "ds4.jpg",
	},
	{
		name: "Mario Kart DS",
		listNum: 5,
		console: "Ds",
		description: "Mario Kart DS is a racing game in which the player races in a kart against other racers as one of twelve characters from the Mario series. ... Each course features item boxes that the player can drive through to receive a randomly selected item, which the player can use to gain an advantage over other racers.",
		genres: ["Racing"],
		price: 20,
		quantity: 1,
		logo: "ds5.jpg",
	},
	{
		name: "Pokemon Heart Gold Version",
		listNum: 6,
		console: "Ds",
		description: "Pokémon HeartGold and Pokémon SoulSilver are 2009 remakes of the 1999 Game Boy Color role-playing video games Pokémon Gold and Silver. The goal of the game is to become the best trainer in Johto and Kanto, which is done by raising Pokémon, completing a catalogue of Pokémon called a Pokédex, defeating the eight Gym Leaders in Johto for Gym Badges, challenging the best trainers in the region known as the Elite Four and the Champion, and then subsequently defeating the eight Gym Leaders in the Kanto region",
		genres: ["Adventure", "Role-Playing", "Strategy"],
		price: 20,
		quantity: 1,
		logo: "ds6.jpg",
	},
	{
		name: "Pokemon Black Version",
		listNum: 7,
		console: "Ds",
		description: "Pokémon Black Version[a] and Pokémon White Version[b] are 2010 role-playing video games developed by Game Freak, published by The Pokémon Company and Nintendo for the Nintendo DS. The player controls a Pokémon Trainer who begins the game with a single Pokémon[9] and is able to capture more using Poké Balls.[10] Like all other Trainers, the player can carry up to six Pokémon at one time. However, the game also includes a network of PCs to store hundreds of Pokémon.",
		genres: ["Adventure", "Role-Playing", "Strategy"],
		price: 20,
		quantity: 1,
		logo: "ds7.jpg",
	},
	{
		name: "Pokemon Platinum Version",
		listNum: 8,
		console: "Ds",
		description: "Pokémon Platinum is a role-playing video game with adventure elements. Its basic mechanics are the same as those found in Pokémon Diamond and Pearl. ... Players begin the game with one Pokémon and can capture more using Poké Balls. The player can also use his or her Pokémon to battle other Pokémon.",
		genres: ["Adventure", "Role-Playing", "Strategy"],
		price: 20,
		quantity: 1,
		logo: "ds8.jpg",
	},
	{
		name: "Super Mario 64",
		listNum: 9,
		console: "Ds",
		description: "Super Mario 64 is a 1996 platform game for the Nintendo 64, developed by Nintendo EAD and published by Nintendo. The first Super Mario game to feature 3D gameplay, it features freedom of movement within a large open world based on polygons, combined with traditional Mario gameplay, visual style, and characters.",
		genres: ["Platforms", "Adventure"],
		price: 20,
		quantity: 1,
		logo: "ds9.jpg",
	},
	{
		name: "Pokemon White Version 2",
		listNum: 10,
		console: "Ds",
		description: "In the Pokémon Black Version 2 and Pokémon White Version 2 games, players can explore new areas, discover Gyms with new leaders and see how everything has changed in the last two years. Pokemon Black Version 2 and Pokemon White Version 2 are two games to start your Pokemon adventure.",
		genres: ["Adventure", "Role-Playing", "Strategy"],
		price: 20,
		quantity: 1,
		logo: "ds10.jpg",
	}
]
GameModel.create(DsGames).then(()=>{
	console.log('DS Games Created Succesfully!')
	mongoose.disconnect();
  }).catch(console.log)