import { FORM_STEPS } from "../../../Shared/Constants";
import { translateConsts } from "../../../Shared/keyConsts";
import { Field } from "../modals";

export const schema: Field = {
  [FORM_STEPS.STEP_1]: [
    {
      name: "name",
      label: translateConsts.Name,
      type: "text",
      autoComplete: ""
    },
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
  ],
  [FORM_STEPS.STEP_2]: [
    {
      name: "name2",
      label: translateConsts.Name,
      type: "text",
      autoComplete: ""
    },
    {
      name: "email2",
      label: translateConsts.Email,
      type: "email",
      autoComplete: ""
    }
  ],
  [FORM_STEPS.STEP_3]: [
    {
      name: "name3",
      label: translateConsts.Name,
      type: "text",
      autoComplete: ""
    },
    {
      name: "dob3",
      label: translateConsts.dob,
      type: "date",
      autoComplete: ""
    }
  ]
};
