import styled from '@emotion/styled';
import { theme } from "@query-builder/data";

type DropDownProps = {
    visible: boolean
}
  
const DropDown = styled.div<DropDownProps>`
    display: ${({ visible }) => (visible ? "flex" : "none")};
    width: 100%;
    flex-direction: column;
    background: ${theme.bg.light };
    border: 1px solid ${theme.border.light };
    border-radius: ${theme.radius};
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.14);
    padding: .5rem;
`;

export default DropDown;
