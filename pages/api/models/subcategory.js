let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const subCategorySchema = new Schema({
    categoryId: { type: String },
    subCategoryId: { type: String },
    titulo: { type: String },
    description: { type: String },
    idioma: { type: Date },
    codigoExterno: { type: String },
    posicion: { type: String },
    creationDate: { type: Date },
    showCategory: { type: Boolean},
});

module.exports = mongoose.model('subcategory', subCategorySchema);