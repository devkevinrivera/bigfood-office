let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryId: { type: String },
    titulo: { type: String },
    description: { type: String },
    idioma: { type: Date },
    codigoExterno: { type: String },
    posicion: { type: String },
    creationDate: { type: Date },
    showCategory: { type: Boolean},
    sucursalId: { type: String}
});

module.exports = mongoose.model('category', categorySchema);