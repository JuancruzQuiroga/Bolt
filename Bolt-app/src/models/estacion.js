const { Schema, model } = require('mongoose');

const estacionSchema = new Schema(
    {
        i: Number,
        estacion:{ 
            type: Number, 
            required: true
        },
        cuantas:{
            type: Number,
            required:true
        },
        location:{
            type: {type: String, default: 'Point'},
            coordinates: {type: [Number], default: [0, 0]}
        }

    }, {
        timestamps: true
    });

module.exports = model('Estacion', estacionSchema);