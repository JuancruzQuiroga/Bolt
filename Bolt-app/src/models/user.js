const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true

        },
        nombre:{
            type:String,
        },
        apellido:{
            type:String,
        },
        age:{
            type: Number, 
            min: 14, 
            max: 80
        },
        code:{
            type: Number
        },
        historialpedidos:[Number],
        
        horaretiro:{
            type:Date
        },
        horadevolucion:{
            type:Date
        },
        alquilando:{
            type: Boolean,
            required: true
        }

    }, {
        timestamps: true
    
})

module.exports = model('User', userSchema);