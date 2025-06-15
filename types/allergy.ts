export interface AllergyInterface {
    id: string;
    patientID: string;
    name: string;
    reaction: string;
    severity: string;
    recordedAt: string;
    updatedAt?: string;
}
