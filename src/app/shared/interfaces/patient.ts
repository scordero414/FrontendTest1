export interface Patient {
    id: number,
    name: string, 
    age:number,
    // race: string, // It's for humans.
    breed: string, 
    picture: string,
    contactPhone: string, 
    contactPerson: string,
    createdAt: Date
}