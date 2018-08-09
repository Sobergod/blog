const NodeRSA = require('node-rsa')
const fs = require('fs')
const PUBLICKEY = 'pubKey.pem'
const PRIVATEKEY = 'pravKey.pem'
// 生成Rsa并写入到文件中
let createRsa = async (ctx, next) => {
    // 实例化生成512位秘钥
    let key = new NodeRSA({ b: 512 });
    // 公钥
    let pubKey = key.exportKey('pkcs8-public');
    // 私钥
    let pravKey = key.exportKey('pkcs8-private');
    fs.writeFile(PUBLICKEY, pubKey, function (err) {
        if (err) console.log(err);
        else console.log('写文件操作成功');
    });
    fs.writeFile(PRIVATEKEY, pravKey, function (err) {
        if (err) console.log(err);
        else console.log('写文件操作成功');
    });
    ctx.body = {
        pubKey: pubKey
    }
    await next();
}
// 从文件中读出公钥或者私钥
let getKey = function (file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    })
}
// 发送公钥
let sendPubKey = async (ctx, next) => {
    let pubKey = await getKey(PUBLICKEY);
    ctx.body = {
        pubKey: pubKey
    }
}
// 解密
let decrypted = async (message) => {
    let pravKey = await getKey(PRIVATEKEY);
    let mDecrypt = new NodeRSA(pravKey);
    let a = mDecrypt.decrypt(message, 'utf8');
    return a;
}
module.exports = {
    createRsa,
    sendPubKey,
    decrypted
}