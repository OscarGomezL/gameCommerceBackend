const mongoose = require('mongoose');
const {MONGO_URI} = require('../config')
const {GameModel} = require('../models')
mongoose.connect(MONGO_URI)

const XboxGames = [
	{
		name: "Call of Duty Black Ops 2",
		listNum: 21,
		console: "Xbox360",
		description: "Pushing the boundaries of what fans have come to expect from the record-setting entertainment franchise, Call of Duty®: Black Ops II propels players into a near future, 21st Century Cold War, where technology and weapons have converged to create a new generation of warfare.",
		price: 20,
		quantity: 1,
		logo: "1.jpg",
	},
	{
		name: "Minecraft",
		listNum: 22,
		console: "Xbox360",
		description: "Minecraft is a video game in which players create and break apart various kinds of blocks in three-dimensional worlds. The game's two main modes are Survival and Creative. In Survival, players must find their own building supplies and food. ... In Creative, players are given supplies and do not have to eat to survive.",
		price: 20,
		quantity: 1,
		logo: "2.jpg",
	},
	{
		name: "Grand theft Auto IV",
		listNum: 23,
		console: "Xbox360",
		description: `In Grand Theft Auto IV you take on the role of Niko Bellic, an immigrant from Eastern Europe with an ominous past. Persuaded by his cousin's promises of a fresh start and a better life, Niko relocates to Liberty City, USA -- the worst place in America. After making the move to Liberty, however, Niko quickly realizes that his hopes of "living the American Dream" may never come to pass... and that things here may not be so different after all.`,
		price: 20,
		quantity: 1,
		logo: "3.jpg",
	},
	{
		name: "Grand Theft Auto V",
		listNum: 24,
		console: "Xbox360",
		description: "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
		price: 20,
		quantity: 1,
		logo: "4.jpg",
	},
	{
		name: "Guitar Hero 3",
		listNum: 25,
		console: "Xbox360",
		description: "Guitar Hero III: Legends of Rock is a music rhythm video game developed by Neversoft and published by Activision. ... Initially the game offers over 70 songs, most of which are master tracks. The PlayStation 3 and Xbox 360 versions feature the ability to download additional songs.",
		price: 20,
		quantity: 1,
		logo: "5.jpg",
	},
	{
		name: "Mortal Kombat 9",
		listNum: 26,
		console: "Xbox360",
		description: "Mortal Kombat is a fighting video game developed by NetherRealm Studios and published by Warner Bros. The game is the ninth main installment in the Mortal Kombat series and a soft reboot of the franchise.",
		price: 20,
		quantity: 1,
		logo: "6.jpg",
	},
	{
		name: "Far Cry 3",
		listNum: 27,
		console: "Xbox360",
		description: "Far Cry 3 is a first-person shooter set on the fictional Rook Islands, a tropical archipelago somewhere in the Pacific, controlled by pirates and mercenaries. Players portray Jason Brody and can approach missions and objectives in a variety of ways.",
		price: 20,
		quantity: 1,
		logo: "7.jpg",
	},
	{
		name: "Left 4 Dead 2",
		listNum: 28,
		console: "Xbox360",
		description: "Left 4 Dead 2 is a 2009 first-person shooter game developed and published by Valve. ... Set during the aftermath of an apocalyptic pandemic, the game focuses on four new Survivors, fighting against hordes of zombies known as the Infected, who develop severe psychosis and act extremely aggressive.",
		price: 20,
		quantity: 1,
		logo: "8.jpg",
	},
	{
		name: "Wipeout",
		listNum: 29,
		console: "Xbox360",
		description: "This is a game based on the TV game show Wipeout. Players create and compete in obstacle courses that include hazards such as swinging pads, punching gloves, and giant wrecking balls.",
		price: 20,
		quantity: 1,
		logo: "9.jpg",
	},
	{
		name: "Tomb Raider",
		listNum: 30,
		console: "Xbox360",
		description: "Tomb Raider is set on Yamatai, an island from which Lara, who is untested and not yet the battle-hardened explorer she is in other titles in the series, must save her friends and escape while being hunted down by a malevolent cult.",
		price: 20,
		quantity: 1,
		logo: "10.jpg",
	},
]
GameModel.create(XboxGames).then(()=>{
  console.log('Xbox Games Created Succesfully!')
  mongoose.disconnect();
}).catch(console.log)