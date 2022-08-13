import { request, response } from "express";
import User from "../models/user_schema.js";


export const addUser = async (req,res) => {
    const user = req.body;

    const newUser = new User(user);
    try{
        await newUser.save();
        res.status(201).json(newUser)
    }catch(err){
        res.status(409).json({message: error.message})
    }
}

export const getUser = async(req,res) => {
    try{
        const users = await User.find({})
        res.status(200).json(users)
    }catch (err){
        console.log(err)
    }
}

export const getUserById = async(req, res) => {
    try{
        const user = await User.find({_id: req.params.id})
        res.status(200).json(user)
    }catch(err){
        console.log(err)
    }
}

export const editUser = async(req, res) => {
    let user = req.body
    const editUser = new User(user)
    try{
        await User.updateOne({_id: req.params.id},editUser)
        res.status(200).json(editUser)
    }catch(err){
        console.log(err)
    }
}

export const deleteUser = async(req,res) => {
    try{
        await User.deleteOne({_id: req.params.id})
        res.status(200).json({message:'User Deleted Successfully'})
    }catch(err){
        console.log(err)
    }
}