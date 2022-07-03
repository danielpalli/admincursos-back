import Usuario from "../models/Usuario.js";

export const obtenerUsuarios = async (req, res) => {
    const usuarios = await Usuario.find({}, 'nombre apellido direccion telefono perfil email');
    res.json({
        ok: true,
        usuarios
    });
};
