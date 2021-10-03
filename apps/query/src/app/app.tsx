import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@query-builder/data';
import { Container, Button, ClosableContainer, Rule } from '@query-builder/components';
import { BsSearch } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import {RootState, addRule, deleteRule, resetRules } from '@query-builder/state';


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
  const QR = useSelector((state: RootState) => state.QueryBulder.results);
  const ruleList = useSelector((state: RootState) => state.QueryBulder.rules);
  const ruleids = useSelector((state: RootState) => state.QueryBulder.rulesIds);
  const dispatch = useDispatch();

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
        <Button onClick={() => null} btnTheme="primary" icon={<BsSearch />}>Search</Button>
        <Button onClick={() => dispatch(resetRules())} btnTheme="secondary">Reset</Button>
      </ButtonBar>
      <Container bg="light" border="light" padding="3rem" justifyContent="center">
        <code>{QR ? QR : "no query generated"}</code>
      </Container>
    </Wrap>
  );
}

export default App;

