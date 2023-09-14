import { Router } from 'express';
import PeopleController from '../controllers/people.controller.ts';
import { validateSchema } from '../middlewares/validateSchema.ts';
import peopleSchema from '../schemas/people.schema.ts';

const controller = new PeopleController()
const peopleRouter = Router()

peopleRouter.post('/people', validateSchema(peopleSchema), controller.handlePost)
peopleRouter.get('/people', controller.handleGet)

export default peopleRouter
