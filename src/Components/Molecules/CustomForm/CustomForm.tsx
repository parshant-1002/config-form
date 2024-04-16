// libs
import * as localeData from "date-fns/locale";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

// styles
import "react-datepicker/dist/react-datepicker.css";
import "./CustomForm.scss";

// consts
import { translateConsts } from "../../../Shared/keyConsts";
import { FORM_STEPS, INPUT_TYPES, REGEX } from "../../../Shared/Constants";

// components
import LocaleSwitcher from "../LocalSwitcher";
import { RenderField } from "./RenderField";

// tsmodals
import { LocaleObject, Schema } from "./modals";

const locale: LocaleObject = localeData;

const CustomForm: React.FC<{ schema: Schema; translate: any }> = ({
  schema,
  translate
}) => {
  // hooks
  const {
    i18n: { language: selectedLanguage }
  } = useTranslation();

  // states
  const [showPassword, setShowPassword] = useState(false);
  const [formStep, setFormStep] = useState(FORM_STEPS.STEP_1);
  // formsetup
  const getValidationSchema = (field: any) => {
    switch (field.type) {
      case INPUT_TYPES.EMAIL:
        return Yup.string()
          .email(
            `${translate(translateConsts.Invalid)} ${translate(field.label)}`
          )
          .required(
            `${translate(field.label)} ${translate(translateConsts.isRequired)}`
          );
      case INPUT_TYPES.PASSWORD:
        return Yup.string()
          .matches(
            REGEX.PASSWORD,
            translate(translateConsts.password_validation_msg)
          )
          .required(
            `${translate(field.label)} ${translate(translateConsts.isRequired)}`
          );
      case INPUT_TYPES.MOBILE:
        return Yup.string()
          .matches(
            REGEX.MOBILE,
            `${translate(translateConsts.Invalid)} ${translate(field.label)}`
          )
          .required(
            `${translate(field.label)} ${translate(translateConsts.isRequired)}`
          );
      default:
        return Yup.string().required(
          `${translate(field.label)} ${translate(translateConsts.isRequired)}`
        );
    }
  };

  const initialValues: { [key: string]: string } = {};
  const schemaForBothSteps = Object.values(schema).flat();
  schemaForBothSteps.forEach((field) => {
    initialValues[field.name] = "";
  });

  const validationSchema = Yup.object().shape(
    schemaForBothSteps.reduce((acc: any, field) => {
      acc[field.name] = getValidationSchema(field);
      return acc;
    }, {})
  );

  const handleNextStep = () => {
    // console.log('values: ', values);
    const stepCount = Object.keys(schema)?.length;
    const currentStep = parseInt(String(formStep)); // Ensure step is an integer

    if (currentStep < stepCount) {
      const nextStep = currentStep + 1;
      setFormStep(String(nextStep));
      // console.log("values: ", values);
    }
  };

  const handleClickPrev = () => {
    const currentStep = +formStep;
    const prevStep = currentStep - 1;
    if (Object.values(FORM_STEPS).includes(String(prevStep))) {
      setFormStep(String(prevStep));
    }
  }
  const handleSubmit = () => {

  }

  function isIntermediateStep() {
    const totalSteps = String(Object.keys(schema)?.length);
    return totalSteps > FORM_STEPS.STEP_1 && formStep < totalSteps;
  }

  function handleButtonClick() {
    if (isIntermediateStep()) {
      handleNextStep();
    }
  }
  return (
    <>
      <LocaleSwitcher />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
        key={selectedLanguage}
      >
        <Form
          className="custom-form"
          autoComplete="off"
        >
          {schema[Number(formStep)].map((field: any) => (
            <div
              key={field.name}
              className="form-field d-flex flex-column"
            >
              <label
                htmlFor={field.name}
                className="form-label"
              >
                {translate(field.label)}
              </label>
              <RenderField
                field={field}
                locale={locale}
                selectedLanguage={selectedLanguage}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                translate={translate}
              />
              <ErrorMessage
                name={field.name}
                component="span"
                className="error-message"
              />
            </div>
          ))}
          <div className="form-btns">
            {formStep > FORM_STEPS.STEP_1 && (
              <button
                type="button"
                className="secondary-button"
                onClick={handleClickPrev}
              >
                {translate(translateConsts.Back)}
              </button>
            )}
            <button
              className="submit-button"
              type={isIntermediateStep() ? "button" : "submit"}
              onClick={handleButtonClick}
            >
              {isIntermediateStep() ? translate(translateConsts.Next) : translate(translateConsts.Submit)}
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default CustomForm;
