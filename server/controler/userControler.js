// const fs = require('fs').promises;
// const { register } = require('module');
// const path = require('path');

// const userFilePath = path.join(__dirname,'../../src/componentes/usuariosReistrados.json')

// const controller ={
//     register: async function(req, res){
//         console.log(req);
//         try{

//             const userData = await fs.readFile(userFilePath, "utf-8");
//             const users = JSON.parse(userData);
            
//             const ultimo = users.length;
//             const usuarioNuevo = {
//                 id: ultimo + 1,
//                 nombres: req.body.nombres,
//                 apellidos: req.body.apellidos,
//                 email: req.body.email,
//                 direccion: req.body.direccion,
//                 telefono: req.body.telefono,
//                 fechaNacimiento: req.body.fechaNacimiento,
//                 password: req.body.password,
//                 estado: "Activo",
//                 rol: "Usuario",
//                 fechaCreacion: new Date()
//             };

//             for(x of users){
//             if(x.email ===req.body.email){
//                 res.status(400).send("El email ya existe");
//                 return
//             }
//         }
//         users.push(usuarioNuevo);
        
//         await fs.writeFile(userFilePath, JSON.stringify(users,null, 4));
        
//         res.status(200).send("Exito");
//         } catch (error){
//             console.error("Error al procesar el registro:", error);
//             res.status(500).send("Error interno del servidor");
//         }
//     },


//     login: async function (req, res){
//         try{
//             const usersData = await fs.readFile(userFilePath, "utf-8");
//             const users = JSON.parse(usersData);

//             for(x of users){
//                 if(
//                     x.email === req.body.email &&
//                     x.password === req.body.password &&
//                     x.rol === req.body.rol 
//                 ){
//                    return res.json({
//                     nombres: x.nombres,
//                     apellidos: x.apellidos,
//                     email: x.email,
//                    });
//                 }
//             }
//             res.json({title:"error"});
//         } catch (Error){
//             console.Error("Error al procesar el registro:", Error);
//             res.status(500).send("Error interno del servidor");
//         }
//     },

// };

const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const connection = require('../configDB/configDB');
app.use(cors());

const controller = {
    register: function (req, res) {
      let config = {
        method: "GET",
        maxBodyLength: Infinity,
        url: 'https://api.jsonbin.io/v3/b/6654d62facd3cb34a84e8a70',
        headers: {
          'Content-Type': 'application/json',
          "X-Master-Key": "$2a$10$rhax496YXf/0IQXYzz4CTujv/vVetDrw4pJbOrwjq4/aTUhDePQSe"
        }
      };
      axios(config)
        .then(result => {
          let id = result.data.record.length + 1
          const usuarioNuevo = {
                id: id,
                identificacion: req.body.identificacion,
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                fechaNacimiento: req.body.fechaNacimiento,
                password: req.body.password,
                estado: "Activo",
                rol: "Usuario",
                fechaCreacion: new Date()
            };
            if (result.data.record.length === 0) {
              result.data.record.push(usuarioNuevo)
            }
            else {
              for (x of result.data.record) {
                if (x.email === req.body.email) {
                  res.status(400).send("Usuario ya existe en la Base de Datos")
                  return
                }
              }
              result.data.record.push(usuarioNuevo)
            }
    
            fetch("https://api.jsonbin.io/v3/b/6654d62facd3cb34a84e8a70", {
              method: "PUT",
              headers: {
                "Content-Type": "Application/json",
                "X-Master-Key": "$2a$10$rhax496YXf/0IQXYzz4CTujv/vVetDrw4pJbOrwjq4/aTUhDePQSe"
              },
              body: JSON.stringify(result.data.record),
            })
              .then(response => {
                if (response.status === 200) {
                  res.status(200).send('ok')
                  return
                }
                else {
                  res.status(400).send("No Ok")
                  return
                }
            })
        })
    },

    registerDB: function(req, res){
      console.log(req.body)
      const {identificacion, nombres, apellidos, email, direccion, telefono, fechaNacimiento, password} = JSON.parse(JSON.stringify(req.body))
      try{
        const sql = "INSERT INTO ecommerce.usuarios (idUsuario, nombre, apellido, email, direccion, telefono, fechaNacimiento, password, fechaCreacion) value (?,?,?,?,?,?,?,?,?)"
        let respuesta = connection.execute(sql, [identificacion, nombres, apellidos, email, direccion, telefono, fechaNacimiento, password, new Date()])
        console.log(respuesta);
        res.status(200).send("Usuario registrado correctamente")
      }
      catch(error){
        console.error("Error al registrar el usuario:", error)
        res.status(500).send("Error interno del servidor")
      }
    }
}

module.exports = controller;