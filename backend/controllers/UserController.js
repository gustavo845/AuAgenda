const UserModel = require("../models/UserModel");
const User = require("../models/UserModel");

const  UserController = {
    
    create: async (req, res) => {
        try {
            
            const user = {
                email: req.body.email,
                password:req.body.password,
                dogs:req.body.dogs
            };

            const response = await UserModel.create(user);
            res.status(201).json({
                response,
                message: "Usuario criado com sucesso"
            });

        } catch (error) {
            console.log(error);
        };

    },
    getall: async (req, res) => {

      try {
       
        const response = await UserModel.find();
        res.json(response);

      } catch (error) {
        
        console.log(error)

      }

    },
    get: async (req, res) => {

        try {
           
            const id = req.params.id

            if(!id){
                res.status(404).json({
                    message: "Usuario nao encontrado"
                })
            }

            const response = await UserModel.findById(id);
            res.status(200).json({
                response,
                message:"Usuario encontrado"
            });

        } catch (error) {
            Console.log(error)
        }

    },
    delete: async (req, res) => {

        try {
            
            const user = {
                email: req.body.email,
                password:req.body.password,
                dogs:req.body.dogs
            }
            const id = req.params.id

            if(!id){
                res.status(404).json({
                    message:"Erro ao deletar: Usuario nao encontrado"
                })
            }

            
            const response = await UserModel.findByIdAndDelete(id)
            res.status(204).json({
                message: "Usuario deletado com sucesso",
            })
        } catch (error) {
            console.log(error)
        }

    },
    update: async (req, res) => {
        try {
            
            const id = req.params.id;        
            
            const user = {
                email: req.body.email,
                password:req.body.password,
                dogs:req.body.dogs
            };
            
            const updateduser = await UserModel.findByIdAndUpdate(id, user);

            if(!updateduser){
                res.status(404).json({
                    message:"Usuario nao encontrado"
                })
            }

            res.status(200).json({
                user,
                message: "Usuario editado com sucesso!"
            })

        } catch (error) {
            console.log(error)
        }
    }

};

module.exports = UserController;
 