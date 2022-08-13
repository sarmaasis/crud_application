import express, { Router } from "express"
import { addUser, getUser, getUserById ,editUser, deleteUser} from "../controller/user_controler.js";

const Route = express.Router()

Route.post('/api/addUser', addUser)
Route.get('/api/getUsers', getUser)
Route.get('/:id', getUserById)
Route.post('/:id',editUser)
Route.delete('/:id', deleteUser)

export default Route;