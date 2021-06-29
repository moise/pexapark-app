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

const selectedForLost = Math.floor(Math.random() * 14) + 1;

const farmReadings: (hasRange?: boolean) => Reading[] =	(hasRange = false) => (
		getDates(!hasRange ? startDateOneWeek : startDate, endDate).reduce((items: Reading[], date, index) => {
			const producedEnergy = faker.datatype.number({min: 50, max: 240});
			const factor = Number((producedEnergy / 240).toFixed(5));
			const readings = index + 1 === selectedForLost ? (24 - (Math.floor(Math.random() * 5) + 1)) : 24;

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



/*getDates(startDate, endDate).map((date, index) => {
	const producedEnergy = faker.datatype.number({min: 50, max: 240});
	const factor = Number((producedEnergy / 240).toFixed(5));
	const readings = index + 1 === selectedForLost ? (24 - (Math.floor(Math.random() * 5) + 1)) : 24;

	farmReadings.push({
		factor,
		count: readings,
		id: faker.datatype.uuid(),
		lostReadings: 24 - readings,
		totalEnergy: producedEnergy,
		date: format(date, 'dd/MM')
	})
});*/


export default farmReadings;