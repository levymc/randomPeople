import { Request, Response, NextFunction } from 'express';
import PeopleService from '../services/people.service';
import AppError from '../errors/AppError';

export default class PeopleController {
    async handlePost(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        const service = new PeopleService()
        console.info('PeopleController.handlePost START');
        try {
            const userInfo = await service.handlePostUser(req.body.firstName, req.body.lastName);
            console.info('PeopleController.handlePost END');
            res.status(201).json({succes: true, msg: `O usuário ${userInfo.firstName} ${userInfo.lastName}, de id ${userInfo.id} foi criado`});
        } catch (err) {
            next(err);
        }
    }

    async handleGet(
        req: Request,
        res: Response,
        next: NextFunction,
    ){
        const service = new PeopleService()
        console.info('PeopleController.handleGet START');
        try {
            const usersList = await service.handleGetUser();
            console.info('PeopleController.handleGet END');
            res.status(201).json(usersList);
        } catch (err) {
            next(err);
        }
    }
}
