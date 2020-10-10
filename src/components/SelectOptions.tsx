import React from "react";
import styled from "styled-components";

interface Props {
  id: string;
  desc: string;
  options: Array<string>;
}

const StyledDiv = styled.div({
  margin: "15px 0",
  fontSize: "20px",
});

const StyledSelect = styled.select({
  fontSize: "16px",
});

const StyledOption = styled.option({
  fontSize: "16px",
  margin: "5px 0",
  borderBottom: "1px solid #000",
});

export function SelectOptions({ id, desc, options }: Props) {
  return (
    <StyledDiv>
      <label htmlFor={`${id}-select`}>{desc}: </label>
      <StyledSelect name={id} id={`${id}-select`}>
        {options.map((o) => {
          return <StyledOption value={o}>{o}</StyledOption>;
        })}
      </StyledSelect>
    </StyledDiv>
  );
}
