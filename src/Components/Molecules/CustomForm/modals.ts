export interface FieldModal {
  name: string;
  label: string;
  type: string;
  autoComplete: string;
}

export interface Schema extends Array<FieldModal> {}

export interface LocaleObject {
  [key: string]: any;
}

export interface FieldProps {
  field: FieldModal;
  translate: any;
  locale: LocaleObject;
  selectedLanguage: string;
}
export interface FormValues {
  dob: Date;
}

export interface RenderFieldProps {
  field: FieldModal;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  translate: (label: string) => string;
  locale: LocaleObject;
  selectedLanguage: string;
}
