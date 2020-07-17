import React, { useCallback, useState } from "react";
import { FiClock, FiPhoneIncoming, FiPhoneOutgoing } from "react-icons/fi";
import * as yup from "yup";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import useForm from "../../../hooks/useForm";
import { Container } from "./styles";

interface Errors {
  [key: string]: string;
}

interface FormPanelProps {
  showResultPanel(): void;
}

function FormPanel({ showResultPanel }: FormPanelProps) {
  const { formValues, handleSetFormValue } = useForm({
    origin: "",
    destiny: "",
    time: "",
    planType: "",
  });

  const [errors, setErrors] = useState<Errors>({
    origin: "",
    destiny: "",
    time: "",
  });

  const getValidationErrors = useCallback(
    (err: yup.ValidationError): Errors => {
      const validationErrors: Errors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      return validationErrors;
    },
    []
  );

  const handleOnSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const schema = yup.object().shape({
        origin: yup.string().required("DDD de origem é obrigatório."),
        destiny: yup.string().required("DDD de destino é obrigatório."),
        time: yup.string().required("Tempo da chamada é obrigatório."),
      });

      try {
        await schema.validate(formValues, {
          abortEarly: false,
        });

        setErrors({
          origin: "",
          destiny: "",
          time: "",
        });

        showResultPanel();
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          setErrors(getValidationErrors(err));
          return;
        }
        console.log(err);
      }
    },
    [formValues, getValidationErrors, showResultPanel]
  );

  return (
    <Container onSubmit={handleOnSubmit}>
      <Input
        value={formValues.origin}
        setValue={handleSetFormValue}
        name="origin"
        placeholder="DDD da região de origem"
        error={errors.origin}
        max={3}
        icon={FiPhoneOutgoing}
      />
      <Input
        value={formValues.destiny}
        setValue={handleSetFormValue}
        error={errors.destiny}
        name="destiny"
        placeholder="DDD da região de destino"
        max={3}
        icon={FiPhoneIncoming}
      />
      <Input
        value={formValues.time}
        setValue={handleSetFormValue}
        error={errors.time}
        name="time"
        placeholder="Duração da chamada em minutos"
        max={4}
        icon={FiClock}
      />
      <Select
        value={formValues.planType}
        setValue={handleSetFormValue}
        name="planType"
      >
        <option value="30">FaleMais 30</option>
        <option value="60">FaleMais 60</option>
        <option value="120">FaleMais 120</option>
      </Select>
      <Button type="submit">Calcular</Button>
    </Container>
  );
}

export default FormPanel;
