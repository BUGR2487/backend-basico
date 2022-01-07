const { response, request } = require('express');

const usuariosGet = ( req = request, res = response ) => {

    //const query = req.query;
    const { q, nombre = 'no name', apikey, page, limit } = req.query;

    res.json( {

        msg: 'get API - controlador',
        q,
        nombre,
        apikey

    } );

}

const usuariosPut = ( req, res ) => {

    const id = req.params.id;
    //const { id } = req.params;

    res.json( {

        msg: 'put API - controlador',
        id

    } );

}

const usuariosPost = ( req, res = response ) => {

    const { nombre, edad } = req.body;

    res.json( {

        msg: 'post API - controlador',
        nombre,
        edad

    } );

}

const usuariosDelete = ( req, res ) => {

    res.json( {

        msg: 'delete API - controlador'

    } );

}
const usuairosPatch = ( req, res ) => {

    res.json( {

        msg: 'patch API - controlador'

    } );

}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuairosPatch
}