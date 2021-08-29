const { Router } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/user')

// GETTING ALL
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        // 500 - Server Error Reponses
        res.status(500).json({ message: error.message })
    }
})



// GETTING ONE
router.get('/:id', getUser, (req, res) => {
    res.send(res.user)
})



// CREATING ONE
router.post('/', async (req, res) => {
    const userData = new User({
        name: req.body.name,
        dob: req.body.dob,
        address: req.body.address,
        description: req.body.description
    })

    try {
        //AWAIT - use to block further execution until the operation has complete.
        const newUser = await userData.save()
        // 201 - Successful Created
        res.status(201).json(newUser)
    } catch (error) {
        // 400 - Bad Request
        res.status(400).json({ message: error.message })
    }
})



// UPDATING ONE
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name
    }
    if (req.body.dob != null) {
        res.user.dob = req.body.dob
    }
    if (req.body.address != null) {
        res.user.address = req.body.address
    }
    if (req.body.description != null) {
        res.user.description = req.body.description
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error) {
        // 400 - Bad Request
        res.status(400).json({ message: error.message })
    }
})



// DELETE ONE
router.delete('/:id', getUser, async (req, res, next) => {
    try {
        await res.user.remove()
        res.json({ message: 'Delete User.' })
    } catch (error) {
        // 500 - Server Error Reponses
        res.status(500).json({ message: error.message })
    }
})



//GET FUNCTION CALL BACK
async function getUser(req, res, next) {
    let currentUser

    try {
        currentUser = await User.findById(req.params.id)
        // console.log("Verification Current User : " +currentUser); 

        if (currentUser == null) {
            // 404 Not Found 
            return res.status(404).json({ message: 'Cannot find the User.' })
        }

    } catch (error) {
        // 500 - Server Error Reponses
        console.log("500 ERROR")
        return res.status(500).json({ message: message.error });
    }

    res.user = currentUser
    next() // WILL PROCEED ON THE REST
}




module.exports = router