import express from "express";
import { ProductMongoManager } from "../../daos/mongoManagers/mongoManager.js";
//import {options} from "../../config/options.js";
//import { ProdFileManager } from "../../daos/Managers/productManagers.js";

//const prodService = new ProdFileManager(options.fileSystem.productsFileName);
const prodService = new ProductMongoManager();

const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const data = await prodService.getAll();
        res.status(200).json({
            users:data,
            status:"EXITOSO"
        });
    } catch (error) {
        res.status(400).json({
            message:error.message,
            status:"ERROR"
        })
    }
});

router.post("/",async(req,res)=>{
    const user = req.body;
    try {
        const data = await prodService.save(user);
        res.status(200).json({
            user:data,
            status:"EXITOSO"
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            status:"ERROR"
        })
    }
})

router.get("/:userId",async(req,res)=>{
    const {userId} = req.params;
    try {
        const data = await prodService.getById(userId);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:userId",async(req,res)=>{
    const {userId} = req.params;
    const user = req.body;
    try {
        const data = await prodService.updateById(user,userId);
        res.status(200).json({
            user:data,
            status:"EXITOSO"
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            status:"ERROR"
        })
    }
});

router.delete("/:userId",async(req,res)=>{
    const {userId} = req.params;
    try {
        const response = await prodService.deleteById(userId);
        res.status(200).json({
            message:response,
            status:"EXITOSO"
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            status:"ERROR"
        })
    }
});

router.delete("/",async(req,res)=>{
    try {
        const response = await prodService.deleteAll();
        res.status(200).json({
            message:response,
            status:"EXITOSO"
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            status:"ERROR"
        })
    }
});

export {router};