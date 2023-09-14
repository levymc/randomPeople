/* eslint-disable @typescript-eslint/no-throw-literal */
import { PrismaClient } from '@prisma/client';
import AppError from '../errors/AppError';

export default class PeopleRepository {
    private readonly prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(firstName: string, lastName: string) {
        try {
            const response = await this.prisma.people.create({
                data: {
                    firstName,
                    lastName,
                },
            });
            return response
        } catch (error: any) {
            throw new AppError(error, 'Error creating user', 500);
        }
    }

    async getPeopleById(id: number){
        try {
            const user = await this.prisma.people.findUnique({
                where: {
                    id
                }
            })
            return user;
        } catch (error) {
            throw new AppError(error, 'Error retrieving user', 500);
        }
    }

    async getRowsLength(){
        try {
            const rowsLength = await this.prisma.people.count()
            return rowsLength;
        } catch (error) {
            throw new AppError(error, 'Error retrieving user', 500);
        }
    }
}
