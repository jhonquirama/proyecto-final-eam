
let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let UserSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true
    },
    fechanaci: {
        type: Date,
        require: true

    },
    direccion: {
        type: String,
        require: true

    }
},


    {
        versionKey: false
    });


module.exports = moongoose.model('User', UserSchema);