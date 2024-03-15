const mongoose = require ('mongoose')
const crudSchema = new mongoose.Schema({
    crud_name:{
        type:String,
        required:true,
    },
    crud_autor:{
        type:String,
        required:true,
    },
    crud_budget:{
        type:Number,
        required:true,
    },
    crud_date:{
        type:Date,
        required:true,
    },
    status:{
        type:String,
        enum:['enable','disable'],
        default:'enable',
    }
})

module.exports = mongoose.model('table_cred',crudSchema)