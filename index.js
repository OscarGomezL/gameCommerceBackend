const container = require('./src/startup/container')
const Server = container.resolve("app")
const {MONGO_URI} = container.resolve("config")
const mongoose = require('mongoose')

mongoose
.connect(MONGO_URI)
.then(()=>Server.start())
.catch(console.log)