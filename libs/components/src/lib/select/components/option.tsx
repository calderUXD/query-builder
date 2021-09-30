import styled from '@emotion/styled';

type SelectOptionProps = {
    onClick: (e: never) => void
}
  
const SelectOption = styled.div<SelectOptionProps>`
    padding: .5rem .75rem;
    cursor: pointer;
    &:hover {
        font-weight:bold;
    }
`;

export default SelectOption;
