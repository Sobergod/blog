/**
 * 服务器配置文件
 */
const production = {
    SERVER_PORT: 3000,
    MONGO: {
        host: 'mongodb://127.0.0.1/blog',
    },

}
const development = {
    SERVER_PORT: 3000,
    MONGO: {
        host: 'mongodb://127.0.0.1/blog',
    },

}
const TOKEN = {
    pas: 'chenjingheng'
}
const env = development
module.exports = {
    env,
    TOKEN
}