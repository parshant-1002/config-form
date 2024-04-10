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
import { INPUT_TYPES, REGEX } from "../../../Shared/Constants";

// components
import LocaleSwitcher from "../LocalSwitcher";
import { RenderField } from "./RenderField";

// tsmodals
import {
  LocaleObject,
  Schema
} from "./modals";

const locale: LocaleObject = localeData;

const CustomForm: React.FC<{ schema: Schema; translate: any }> = ({
  schema,
  translate
}) => {
  // hooks
  const { i18n: { language: selectedLanguage } } = useTranslation();

  // states
  const [showPassword, setShowPassword] = useState(false);

  // formsetup
  const getValidationSchema = (field: any) => {
    switch (field.type) {
      case INPUT_TYPES.EMAIL:
        return Yup.string()
          .email(
            `${translate(translateConsts.Invalid)} ${translate(
              field.label
            )}`
          )
          .required(
            `${translate(field.label)} ${translate(
              translateConsts.isRequired
            )}`
          );
      case INPUT_TYPES.PASSWORD:
        return Yup.string()
          .matches(
            REGEX.PASSWORD,
            translate(translateConsts.password_validation_msg)
          )
          .required(
            `${translate(field.label)} ${translate(
              translateConsts.isRequired
            )}`
          );
      case INPUT_TYPES.MOBILE:
        return Yup.string()
          .matches(
            REGEX.MOBILE,
            `${translate(translateConsts.Invalid)} ${translate(
              field.label
            )}`
          )
          .required(
            `${translate(field.label)} ${translate(
              translateConsts.isRequired
            )}`
          );
      default:
        return Yup.string().required(
          `${translate(field.label)} ${translate(
            translateConsts.isRequired
          )}`
        );
    }
  };

  const initialValues: { [key: string]: string } = {};
  schema.forEach((field) => {
    initialValues[field.name] = "";
  });

  const validationSchema = Yup.object().shape(
    schema.reduce((acc: any, field) => {
      acc[field.name] = getValidationSchema(field);
      return acc;
    }, {})
  );


  const handleSubmit = (values: any) => {
    console.log("values: ", values);
  };



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
          {schema.map((field) => (
            <div key={field.name} className="form-field d-flex flex-column" >
              <label htmlFor={field.name} className="form-label" >
                {translate(field.label)}
              </label>
              <RenderField field={field} locale={locale} selectedLanguage={selectedLanguage} showPassword={showPassword} setShowPassword={setShowPassword} translate={translate} />
              <ErrorMessage
                name={field.name}
                component="span"
                className="error-message"
              />
            </div>
          ))}
          <button type="submit" className="submit-button" >
            {translate(translateConsts.Submit)}
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default CustomForm;
