// libs
import { useFormikContext } from "formik";
import ReactDatePicker from "react-datepicker";

// tsmodals
import { FieldProps, FormValues } from "./modals";

// consts
import { DATE_FORMATS } from "../../../Shared/Constants";

export const RenderDatePicker: React.FC<FieldProps> = ({
  field,
  translate,
  locale,
  selectedLanguage
}) => {
  const { setFieldValue, values, setFieldTouched } =
    useFormikContext<FormValues>();

  return (
    <ReactDatePicker
      onBlur={() => {
        setFieldTouched(field.name, true);
      }}
      selected={values.dob}
      onChange={(date) => setFieldValue(field.name, date)}
      locale={locale?.[selectedLanguage]}
      dateFormat={DATE_FORMATS.DD_MM_YYY}
      placeholderText={translate(field.label)}
      autoComplete={field.autoComplete}
      showYearDropdown
      showMonthDropdown
      className="form-input"
    />
  );
};
