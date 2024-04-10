// libs
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "formik";

// consts
import { INPUT_TYPES } from "../../../Shared/Constants";
import { RenderDatePicker } from "./RenderDatePicker";

// tsmodals
import { RenderFieldProps } from "./modals";

export const RenderField: React.FC<RenderFieldProps> = ({
  field,
  showPassword,
  setShowPassword,
  translate,
  locale,
  selectedLanguage
}) => {
  switch (field.type) {
    case INPUT_TYPES.PASSWORD:
      return (
        <div className="password-field">
          <div className="password-input-container">
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            />
            <Field
              type={showPassword ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD}
              id={field.name}
              name={field.name}
              placeholder={translate(field.label)}
              autoComplete={field.autoComplete}
              className="form-input"
            />
          </div>
        </div>
      );
    case INPUT_TYPES.DATE:
      return (
        <RenderDatePicker
          field={field}
          translate={translate}
          locale={locale}
          selectedLanguage={selectedLanguage}
        />
      );
    default:
      return (
        <Field
          type={field.type}
          id={field.name}
          name={field.name}
          placeholder={translate(field.label)}
          autoComplete={field.autoComplete}
          className="form-input"
        />
      );
  }
};
