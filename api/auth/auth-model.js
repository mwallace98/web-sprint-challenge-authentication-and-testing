
const db = require('../../data/dbConfig')

module.exports = {
    addUser,
    findBy
}

async function addUser(user){
    const [id] = await db('users').insert(user)
    const newUser =await db('users').where({id}).first()
    return newUser
}

async function findBy(username){
    const user = await db('users')
    .where({username})
    .first()
    
    return user
}