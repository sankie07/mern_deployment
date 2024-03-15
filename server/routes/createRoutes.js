const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const url = 'mongodb+srv://man:man@cluster0.naw5mar.mongodb.net/';

const router= express.Router();

const crud = require('../models/credSchema');

const {format}=require('date-fns')
const currentdate = new Date()
const today = format(currentdate,"yyyy-MM-dd")

    router.post('/addcrud',async(req,res)=>{
        try {
            const newcrud= new crud({
                crud_name:req.body.crud_name,
                crud_autor:req.body.crud_autor,
                crud_budget:req.body.crud_budget,
                crud_date:today,
            })
            const savecrud= await newcrud.save()
            res.json(savecrud)
        } catch (error) {
            console.error(error);
        }
    }) 
    router.get('/viewcrud',async(req,res)=>{
        try {
            const cruds = await  crud.find();
            res.status(200).json(cruds);
        } catch (error) {
            res.status(500).json({'error':error});
        }
    })
    router.get('/viewcrud/:id',async(req,res)=>{
        try {
            const cruds = await  crud.findById(req.params.id);
            res.status(200).json(cruds);
        } catch (error) {
            res.status(500).json({'error':error});
        }
    })
    router.put('/updatecrud/:id', async(req,res)=>{
        try {
            const cruds = await crud.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.status(200).json(cruds);
        } catch (error) {
            res.status(500).json({'error':error});
        }
    })
    router.delete('/deletecrud/:id', async(req,res)=>{
        try {
            const cruds = await crud.findByIdAndDelete(req.params.id)
            res.status(200).json(cruds);
        } catch (error) {
            res.status(500).json({'error':error});
        }
    })

module.exports=router 