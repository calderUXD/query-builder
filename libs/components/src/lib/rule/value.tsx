/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Input, Label } from '@query-builder/components';

/* eslint-disable-next-line */
export interface ValueProps {
  operator: string,
  type: string,
  value: any[] | any,
  onChange: (e:any) => void
};


const BeWrap = styled.span`
  display: flex;
  & > input {
    width: 32%
  } & > div {
    margin-left: 1rem;
  }
`;


export function Value({operator, type, onChange, value}: ValueProps) {
  const isArray = Array.isArray(value) ? value : []; 
  const singleValue = !Array.isArray(value) ? value : "";
  const [between, setBetween] = useState<any[]>(isArray);
  //const [singleVal, setSingle] = useState<string | number>(singleValue);
  

  useEffect(() => {
    const setTheVal = async () => {
      onChange(between);
    };
    setTheVal();
  },[between]);


  const setValue = (val:string) => {
    const value = type === "int" ? Number(val) : val;
    onChange(value);
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
    {operator === "Between" 
      ? <BeWrap>
          <Input type="number" value={isArray[0]} onChange={(e) => setBetween([Number(e.target.value), between[1]])} />
          <Label text="and" />
          <Input type="number" value={isArray[1]} onChange={(e) => setBetween([between[0], Number(e.target.value)])} />
        </BeWrap>
      : <Input 
          onChange={(e) => setValue(e.target.value)}
          type={type === "string" ? "text" : "number"}
          value={singleValue}
      />
    }
    </>
  );
}

Value.defaultProps = {
  operator: "Between",
  type: "int"
}

export default Value;
