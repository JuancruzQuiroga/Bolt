const usersCtrl = {};
const usuario = require('../models/user');

const Usuario = require('../models/user')

usersCtrl.getUsers = (req, res) => res.json({message:'manolito'})
usersCtrl.createUsers = (req, res) => res.json({message:'usuario creado'});
usersCtrl.getUser = (req, res) => res.json({message:'manolo'})
usersCtrl.updateUser = (req, res) => res.json({message: ['Usuario actualizado']})
usersCtrl.deleteUser = (req, res) => res.json({message: ['Usuario borrado']})

module.exports = usersCtrl;