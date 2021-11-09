import { Doctor } from "./doctor";

export interface Visit {
    date: Date,
    reason: string,
    medicationProvided: string,
    doctor: Doctor
}