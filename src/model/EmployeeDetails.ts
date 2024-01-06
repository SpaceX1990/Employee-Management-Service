import {SkillSet} from "./SkillSet";

export interface EmployeeDetails {
  id: number;
  lastName: string;
  firstName: string;
  street: string;
  postcode: string;
  city: string;
  phone: string;
  skillset: SkillSet[];
}
