import Joi from 'joi';

export const createTaskDto = Joi.object({
    title: Joi.string().required(),
});

export const updateTaskDto = Joi.object({
    status: Joi.boolean().required(),
});
