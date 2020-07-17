import React, { useCallback } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import useForm from "../../hooks/useForm";
import { Container, FormWrapper, SubTitle, Title } from "./styles";

function FaleMaisPage() {
  const { formValues, handleSetFormValue } = useForm({
    origin: "",
    destiny: "",
    time: "",
    planType: "",
  });

  const handleOnSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(formValues);
    },
    [formValues]
  );

  return (
    <Container>
      <div>
        <Title>VxTel</Title>
        <SubTitle>Fale Mais</SubTitle>
      </div>
      <div>
        <FormWrapper>
          <form onSubmit={handleOnSubmit}>
            <Input
              value={formValues.origin}
              setValue={handleSetFormValue}
              name="origin"
              placeholder="DDD da região de origem"
              max={3}
            />
            <Input
              value={formValues.destiny}
              setValue={handleSetFormValue}
              name="destiny"
              placeholder="DDD da região de destino"
              max={3}
            />
            <Input
              value={formValues.time}
              setValue={handleSetFormValue}
              name="time"
              placeholder="Duração da chamada em minutos"
              max={4}
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
          </form>
        </FormWrapper>
      </div>
    </Container>
  );
}
export default FaleMaisPage;
