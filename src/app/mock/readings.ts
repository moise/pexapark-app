import {format} from 'date-fns';
import * as faker from 'faker';
import {Reading} from "../models/types";


const getDates = function (startDate: Date, endDate: number | Date) {
	let dates = [],
			currentDate = startDate,
			addDays = (currentDate: any, days: number) => {
				const date = new Date(currentDate);
				date.setDate(date.getDate() + days);

				return date;
			};
	while (currentDate <= endDate) {
		dates.push(currentDate);
		currentDate = addDays(currentDate, 1);
	}
	return dates;
};

const endDate = new Date();
const startDate = new Date(Date.now() - 20 * 24 * 60 * 60 * 1000);
const startDateOneWeek = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);

const selectedForLost = (count: number ) => Math.floor(Math.random() * count) + 1;

const farmReadings: (hasRange?: boolean) => Reading[] =	(hasRange = false) => (
		getDates(!hasRange ? startDateOneWeek : startDate, endDate).reduce((items: Reading[], date, index) => {
			const producedEnergy = faker.datatype.number({min: 50, max: 240});
			const factor = (Number((producedEnergy / 240).toFixed(2))) * 100;
			const readings = index + 1 === selectedForLost(hasRange ? 14 : 7) ? (24 - (Math.floor(Math.random() * 7) + 1)) : 24;

			items.push({
				factor,
				count: readings,
				id: faker.datatype.uuid(),
				lostReadings: 24 - readings,
				totalEnergy: producedEnergy,
				date: format(date, 'dd/MM')
			})

			return items;
		}, [])
);



export default farmReadings;