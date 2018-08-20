const config = require('../../config/config.js')
const mongoose = require('mongoose')
mongoose.connect(config.env.MONGO.host)
/**
 * 连接成功
 */
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connection open to ${config.env.MONGO.host}`)
})

/**
 * 连接出错
 */
mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error: ${err}`)
})

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected')
})
