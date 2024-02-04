const db = require('../../data/dbConfig')

module.exports = {
    addUser
}

async function addUser(user){
    await db('users').insert(user)
}