import PeopleRepository from "../repositories/people.repository";

export default class PeopleService {

    async handlePostUser(firstName: string, lastName: string) {
        const peopleRepository = new PeopleRepository()
        const responseDB = await peopleRepository.create(firstName, lastName);
        return responseDB;
    }    

    async handleGetUser() {
        const peopleRepository = new PeopleRepository()
        const count = await peopleRepository.getRowsLength()
        const randomId = this.getRandomId(count)
        const responseDB = await peopleRepository.getPeopleById(randomId);
        return responseDB;
    }

    getRandomId(count: number) {
        return parseInt((Math.random() * count).toFixed(0))
    }

}
