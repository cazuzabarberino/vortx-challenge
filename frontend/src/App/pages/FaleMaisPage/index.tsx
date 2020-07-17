import React, { useCallback, useState } from "react";

import { Container, FormResultWrapper, SubTitle, Title } from "./styles";
import ResultPanel from "./ResultPanel";
import FormPanel from "./FormPanel";

function FaleMaisPage() {
  const [showResult, setShowResult] = useState(true);

  const backToForm = useCallback(() => setShowResult(false), []);
  const showResultPanel = useCallback(() => setShowResult(true), []);

  return (
    <Container>
      <div>
        <Title>VxTel</Title>
        <SubTitle>Fale Mais</SubTitle>
      </div>
      <div>
        <FormResultWrapper showResult={showResult}>
          <div>
            <FormPanel showResultPanel={showResultPanel} />
            <ResultPanel backToForm={backToForm} />
          </div>
        </FormResultWrapper>
      </div>
    </Container>
  );
}
export default FaleMaisPage;
