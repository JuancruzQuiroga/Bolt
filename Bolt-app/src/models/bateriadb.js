const { Schema, model } = require('mongoose');

const bateriaSchema = new Schema(
    {
        idbateria: Number,
        estacion:{ 
            type: Number, 
            required: true
        },
        cargada:{
            type: Number,
            required:true
        },
        retirada:{
            type: Boolean,
            required: true
        }

    }, {
        timestamps: true
    });

module.exports = model('Bateria', bateriaSchema);