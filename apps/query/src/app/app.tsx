import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@query-builder/data';
import { Container, Button, ClosableContainer, Rule } from '@query-builder/components';
import { BsSearch } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import {RootState, addRule, deleteRule, resetRules } from '@query-builder/state';
import { generateSQL } from '@query-builder/data';
import { useState } from 'react';


const Wrap = styled.div`
  margin: 2rem auto;
  max-width: 980px;
`;

const ButtonBar = styled.div`
  display: flex;
  padding: 1rem 0;
  margin: 2.5rem 0 1rem 0;
  border-top: 1px solid ${theme.border.light};
  & > div {
    margin-right: .5rem;
  }
`;

const SmBtn = css`
  padding: .2rem .75rem;
  margin-top: .5rem;
`;

const RulesList = styled.div`
  margin-top: .5rem;
  & > div {
    margin-bottom: .5rem;
  }
`;

export function App() {
  const ruleList = useSelector((state: RootState) => state.QueryBulder.rules);
  const ruleids = useSelector((state: RootState) => state.QueryBulder.rulesIds);
  const isValid = useSelector((state: RootState) => state.QueryBulder.valid);
  const [results, updateResults] = useState<null | string[]>(null);
  const dispatch = useDispatch();

  const setResults = () => {
    if(isValid){
      const formattedResults = generateSQL(ruleList, ruleids);
      formattedResults && updateResults(formattedResults);
    }
    
  }

  return (
    <Wrap>
      <h2>Search for Sessions</h2>
      <RulesList>
        {ruleids.map((id, index) => 
          <ClosableContainer key={index} onClear={() => dispatch(deleteRule(id))}>
            <Rule id={ruleList[id].id} />
          </ClosableContainer>
        )}
      </RulesList>
      <Button btnTheme="primary" onClick={() => dispatch(addRule())} css={SmBtn}>And</Button>
      <ButtonBar>
        <Button disabled={!isValid} onClick={() => setResults()} btnTheme="primary" icon={<BsSearch />}>Search</Button>
        <Button onClick={() => dispatch(resetRules())} btnTheme="secondary">Reset</Button>
      </ButtonBar>
      <Container bg="light" border="light" padding="3rem" justifyContent="center">
        <span>{results && <code><b>SELECT</b> * <b>FROM</b> session <b>WHERE</b> </code>}{results ? results.map((result, i) => i === 0 ? <code>{result}</code> : <code><b> AND </b>{result}</code>) : "no query generated"}</span>
      </Container>
    </Wrap>
  );
}

export default App;

