import { translateConsts } from "../../../Shared/keyConsts";
import { Field } from "../modals";

export const schema: Field[] = [
  { name: "name", label: translateConsts.Name, type: "text", autoComplete: "" },
  {
    name: "email",
    label: translateConsts.Email,
    type: "email",
    autoComplete: ""
  },
  {
    name: "phone",
    label: translateConsts.Phone_Number,
    type: "tel",
    autoComplete: ""
  },
  {
    name: "password",
    label: translateConsts.Password,
    type: "password",
    autoComplete: "new-password"
  },
  {
    name: "dob",
    label: translateConsts.dob,
    type: "date",
    autoComplete: ""
  }
];
