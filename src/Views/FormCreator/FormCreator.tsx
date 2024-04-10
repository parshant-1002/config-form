import { useTranslation } from "react-i18next";
import CustomForm from "../../Components/Molecules/CustomForm";
import { schema } from "./helpers/constants";



export default function FormCreator() {
  const { t } = useTranslation();
  return (
    <div>
      <CustomForm
        schema={schema}
        translate={t}
      />
    </div>
  );
}
