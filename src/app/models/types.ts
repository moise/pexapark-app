export interface Farm {
    id: string;
    key: string;
    name: string;
}

export interface Reading {
    id: string;
    date: string
    factor: number
    readings: number
    totalEnergy: number
    lostReadings: number
}
