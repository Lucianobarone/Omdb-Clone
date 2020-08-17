const express=require('express')
const router= express.Router()

const user=require('./user')
const fav=require('./favoritos')

router.use('/user',user)
router.use('/favoritos',fav)

module.exports= router