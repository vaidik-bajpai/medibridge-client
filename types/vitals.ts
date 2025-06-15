export interface VitalInterface {
    id?: string;
    patientID?: string;
    height_cm?: number;
    weight_kg?: number;
    bmi?: number;
    temperature_c?: number;
    pulse?: number;
    respiratory_rate?: number;
    blood_pressure_systolic?: number;
    blood_pressure_diastolic?: number;
    oxygen_saturation?: number;
    createdAt?: string;
    updatedAt?: string;
}
