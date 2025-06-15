import { AllergyInterface } from "./allergy";
import { ConditionInterface } from "./conditions";
import { DiagnosesInterface } from "./diagnoses";
import { PatientInterface } from "./patient";
import { VitalInterface } from "./vitals";

export interface RecordInterface {
    patient: PatientInterface;
    allergies: AllergyInterface[];
    conditions: ConditionInterface[];
    diagnoses: DiagnosesInterface[];
    vitals: VitalInterface;
}
