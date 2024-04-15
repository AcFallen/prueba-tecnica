import Joi from 'joi';

export const createTaskDto = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required()
});

export const updateTaskDto = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    status: Joi.string().valid('PENDING', 'COMPLETED').optional()
});
