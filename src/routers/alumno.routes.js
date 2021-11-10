import { Router } from 'express'
const router = Router();
import * as AlumnoCtrl from '../controllers/alumno.controller'

    router.post('/create/', AlumnoCtrl.createAlumno); //// CREAR 

    router.get('/listar/', AlumnoCtrl.readAlumno); //// LISTAR 

    router.put('/update/:id', AlumnoCtrl.updateAlumno); //// MODIFICAR 
    
    router.delete('/delete/:id', AlumnoCtrl.deleteAlumno); //// ELIMINAR 

    router.get('/listarID/:id', AlumnoCtrl.readAlumnoID); //// LISTAR POR ID
    

export default router;