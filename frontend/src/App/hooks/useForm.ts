import { useState, useCallback } from "react";

interface FormData {
  [key: string]: string;
}

function useForm<T extends FormData>(data: T) {
  const [formValues, setFormValues] = useState<T>(data);

  const handleSetFormValue = useCallback((name: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  return { formValues, handleSetFormValue };
}

export default useForm;
