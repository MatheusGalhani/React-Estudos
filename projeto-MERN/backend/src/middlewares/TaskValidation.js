const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns')

const TaskValidation = async(req, res, next) => {
    const reqJson = req.body; 
    const { macadress, when } = req.body; 

    const requiredFields = {
        macadress(fieldValue) {
            if (!fieldValue) {
                return {error: 'Macadress é obrigatório'}
            }
        },
        type(fieldValue) {
            if (!fieldValue) {
                return {error: 'Tipo é obrigatório'}
            }
        },
        title(fieldValue) {
            if (!fieldValue) {
                return {error: 'Título é obrigatório'}
            }
        },
        description(fieldValue) {
            if (!fieldValue) {
                return {error: 'Descrição é obrigatório'}
            }
        },
        when(fieldValue) {
            if (!fieldValue) {
                return {error: 'Data e hora são obrigatórios'}
            } else if (isPast(new Date(fieldValue))) {
                return {error: 'Escolha uma data e hora futura'}
            } 
        }        
    }
    
    const errors = [];
    
    Object.entries(requiredFields).forEach(([key, methodValidate]) => {
        const result = methodValidate(reqJson[key]);
        if (result !== undefined) errors.push(result);
    });
    
    if(errors.length > 0){
        return res.status(400).json(errors[0])
    } else {
        let exists;
        if (req.params.id) {
            exists = await TaskModel.findOne({
                '_id': {'$ne': req.params.id},
                'when': {'$eq': new Date(when)},
                'macadress': {'$in': macadress},
            });
        } else {
            exists = await TaskModel.findOne({
                'when': {'$eq': new Date(when)},
                'macadress': {'$in': macadress},
                
            });
        }
        
        if(exists) {
            return res.status(400).json({error: 'Já existe uma atividade nesse mesmo dia e hora.'})
        } 
        next();
        
    }

}

module.exports = TaskValidation;