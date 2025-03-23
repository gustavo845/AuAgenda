const AnimalModel = require("../models/AnimalModel");
const Animal = require("../models/AnimalModel");

const  AnimalController = {
    
    create: async (req, res) => {
        try {
            
            const animal = {
                name: req.body.name,
                age:req.body.age,
                type:req.body.type,
                fur:req.body.fur,
                breed:req.body.breed
            };

            const response = await AnimalModel.create(animal);
            res.status(201).json({
                response,
                message: "Animal criado com sucesso"
            });

        } catch (error) {
            console.log(error)
        };

    },
    getall: async (req, res) => {

        try {
         
          const response = await AnimalModel.find();
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
                    message: "Animal nao encontrado"
                })
            }

            const response = await AnimalModel.findById(id);
            res.status(200).json({
                response,
                message:"Animal encontrado"
            });

        } catch (error) {
            Console.log(error)
        }

    },
    delete: async (req, res) => {
    
            try {

                const id = req.params.id
    
                if(!id){
                    res.status(404).json({
                        message:"Erro ao deletar: Animal nao encontrado"
                    })
                }
    
                
                const response = AnimalModel.findByIdAndDelete(id)
                res.status(204).json({
                    message: "Animal deletado com sucesso",
                })
            } catch (error) {
                console.log(error)
            }
    
        },
        update: async (req, res) => {
            try {
                
                const id = req.params.id;        
                
                const animal = {
                    name: req.body.name,
                    age:req.body.age,
                    type:req.body.type,
                    fur:req.body.fur,
                    breed:req.body.breed
                };
                
                const updatedAnimal = await AnimalModel.findByIdAndUpdate(id, animal);
    
                if(!updatedAnimal){
                    res.status(404).json({
                        message:"Animal nao encontrado"
                    });
                };
    
                res.status(200).json({
                    animal,
                    message: "Animal editado com sucesso!"
                });
    
            } catch (error) {
                console.log(error)
            }
        }
    

};

module.exports = AnimalController;
 