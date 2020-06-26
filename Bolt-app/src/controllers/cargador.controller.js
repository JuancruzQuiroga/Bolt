const cargadoresCtrl = {};

cargadoresCtrl.getCargador = (req, res) => res.json({message:'tremendo cargador hermano'})
cargadoresCtrl.createCargador = (req, res) => res.json({message:'Cargador creado'});

module.exports = cargadoresCtrl;