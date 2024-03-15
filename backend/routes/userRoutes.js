import express, { Router } from "express";
import {getUser,getUserFriends,addRemoveFriends} from '../controllers/user.js'
import { verifyToken } from "../middlewares/verifyToken.js";
const router = express.Router()

//READ
router.get('/:id',verifyToken,getUser)
router.get('/:id/friends',verifyToken,getUserFriends)

//UPDATE
router.patch('/:id/:friendId',verifyToken,addRemoveFriends)

export default Router
