import React from "react";
import {
  Container,
  CloseButton,
  PlanPriceWrapper,
  FaleMaisPlan,
} from "./styles";
import formatValue from "../../../../utils/formatValue";
import { FiArrowLeftCircle } from "react-icons/fi";

interface ResultPanelProps {
  backToForm(): void;
}

function ResultPanel({ backToForm }: ResultPanelProps) {
  return (
    <Container>
      <CloseButton onClick={backToForm}>
        <FiArrowLeftCircle size={32} />
      </CloseButton>
      <PlanPriceWrapper>
        <p>Tarifa Normal</p>
        <p>{formatValue(100)}</p>
      </PlanPriceWrapper>
      <FaleMaisPlan>
        <p>
          Tarifa com <span>FaleMais</span>
        </p>
        <p>{formatValue(30)}</p>
      </FaleMaisPlan>
    </Container>
  );
}

export default ResultPanel;
