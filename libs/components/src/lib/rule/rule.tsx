import { useEffect } from 'react';
import styled from '@emotion/styled';
import { Select } from '../select/select';
import { Label } from '../label/label';
import { RootState, setPredicate, setOperator, setValue, checkValid } from '@query-builder/state';
import { useSelector, useDispatch } from 'react-redux';
import Value from './value';


/* eslint-disable-next-line */
export interface RuleProps {
  id: number
}

const Wrap = styled.div`
  display: flex;
`;

const Col = styled.div`
  padding: 0px .5rem;
  display: flex;
  width: 33.33%;
  max-width: 33.33%;
`;

export function Rule({id}: RuleProps) {
  const predicates = useSelector((state: RootState) => state.QueryBulder.predicates);
  const stringOps = useSelector((state: RootState) => state.QueryBulder.operators["string"]);
  const intOps = useSelector((state: RootState) => state.QueryBulder.operators["int"]);
  const currentRule = useSelector((state: RootState) => state.QueryBulder.rules[id]);
  const dispatch = useDispatch();

    useEffect(() => {
      const isValidCheck = Object.values(currentRule).includes(null);
      dispatch(checkValid(!isValidCheck));
    });

  return (
    <Wrap>
      <Col>
        <Select 
          options={Object.keys(predicates)} 
          selected={currentRule.predicate} 
          placeholder="Select Predicate"
          onSelect={(val) => dispatch(setPredicate({id: id, value: val}))}
          controlled
        />
      </Col>
      <Col>
        {currentRule.predicate && predicates[currentRule.predicate].type === "int" && <Label text="is" /> }
        {currentRule.predicate && <Select 
          options={Object.keys(predicates[currentRule.predicate].type === "string" ? stringOps : intOps )} 
          selected={currentRule.operator} 
          placeholder="Select Operator"
          onSelect={(val) => dispatch(setOperator({id: id, value: val }))}
          controlled
        />}
      </Col>
      <Col>
        { 
          currentRule.operator && currentRule.predicate && 
            <Value 
              type={predicates[currentRule.predicate].type} 
              operator={currentRule.operator} 
              onChange={(val) => dispatch(setValue({id: id, value: val }))}
              value={currentRule.value}
            />
        }
      </Col>
    </Wrap>
  );
}

export default Rule;
