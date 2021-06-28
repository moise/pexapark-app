import {Farm} from "../models/types";
import * as faker from 'faker';

const min = 5;
const max = 15;

const farms: Farm[] = [];

Array.from(Array(min ? Math.floor(Math.random() * (max - min) + min) : max), (x, i) => i).map((value) => {
    const name = faker.company.companyName();
    farms.push({
        name,
        id: faker.datatype.uuid(),
        key: faker.helpers.slugify(name)
    })
})

export default farms;