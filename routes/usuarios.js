const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuairosPatch } = require('../controllers/usuarios');

const router = Router();

router.get( '/', usuariosGet );

router.put( '/:id', usuariosPut );

router.post( '/', usuariosPost );

router.delete( '/', usuariosDelete );

router.patch( '/', usuairosPatch );

module.exports = router;