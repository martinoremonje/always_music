import pool from './config/db.js';

async function agregarEstudiante(nombre, rut, curso, nivel) {
    const query = 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)';
    const values = [nombre, rut, curso, nivel];
    
    try {
        const res = await pool.query(query, values);
        console.log(`Estudiante: ${res.rowCount} agregado con exito`);
    } catch (err) {
        console.error('Error al agregar estudiante:', err);
    }
}

async function obtenerEstudiantePorRut(rut) {
    const query = 'SELECT * FROM estudiantes WHERE rut = $1';
    
    try {
        const res = await pool.query(query, [rut]);
        console.log('Estudiante encontrado:', res.rows);
    } catch (err) {
        console.error('Error al obtener estudiante:', err);
    }
}

async function obtenerEstudiantes() {
    const query = 'SELECT * FROM estudiantes';
    
    try {
        const res = await pool.query(query);
        console.log('Estudiantes registrados:', res.rows);
    } catch (err) {
        console.error('Error al obtener estudiantes:', err);
    }
}

async function editarEstudiante(nombre, rut, curso, nivel) {
    const query = 'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4';
    const values = [nombre, curso, nivel, rut];
    
    try {
        const res = await pool.query(query, values);
        console.log('Estudiante actualizado:', res.rowCount);
    } catch (err) {
        console.error('Error al actualizar estudiante:', err);
    }
}

async function eliminarEstudiante(rut) {
    const query = 'DELETE FROM estudiantes WHERE rut = $1';
    
    try {
        const res = await pool.query(query, [rut]);
        console.log('Estudiante eliminado:', res.rowCount);
    } catch (err) {
        console.error('Error al eliminar estudiante:', err);
    }
}

const [,, comando, ...args] = process.argv;

switch (comando) {
    case 'agregar':
        agregarEstudiante(args[0], args[1], args[2], args[3]);
        break;
    case 'consultar':
        obtenerEstudiantePorRut(args[0]);
        break;
    case 'consultar_todos':
        obtenerEstudiantes();
        break;
    case 'actualizar':
        editarEstudiante(args[0], args[1], args[2], args[3]);
        break;
    case 'eliminar':
        eliminarEstudiante(args[0]);
        break;
    default:
        console.log('Comando no reconocido');
}