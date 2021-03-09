import { useState } from "react";

interface ValidationType {
  regex: RegExp;
  message: string;
}

interface Validation {
  email: ValidationType;
  password: ValidationType;
}

type ValidationTypes = keyof Validation;

const validation: Validation = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    // TO DO: See a better regex, this one seems not to work properly
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message: "Coloque 8 caracteres, contendo pelo menos 1 número, 1 letra",
  },
};

export function useForm(typeForValidation?: ValidationTypes | false) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>("");

  function validate(value: string) {
    if (typeForValidation === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    }
    if (
      typeForValidation !== undefined &&
      validation[typeForValidation] &&
      !validation.email.regex.test(value)
    ) {
      setError(validation[typeForValidation].message);
      return false;
    }
    setError(null);
    return true;
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) validate(value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}
