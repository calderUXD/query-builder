/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useMemo } from 'react';
import { usePopper } from 'react-popper';
import { ModifierPhases } from '@popperjs/core'
import styled from '@emotion/styled';
import DropDown from './components/dropdown';
import Input from './components/input';
import SelectOption from './components/option';
import { useOnClickOutside } from './clickOutside';
//import OutsideClickHandler from "react-outside-click-handler";

/* eslint-disable-next-line */
export interface SelectProps {
  options: string[],
  onSelect: (e:string) => void,
  placeholder: string,
  width: string,
  selected: null | string,
  controlled: boolean
}

export function Select({options, onSelect, placeholder, selected, controlled, ...props}: SelectProps) {
  const [visible, setVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState<null | string>(null);

  const referenceRef = useRef(null);
  const popperRef = useRef(null);
  const clickOutRef = useRef(null)

  useOnClickOutside(clickOutRef, () => setVisibility(false));

  const selectedValue = controlled ? selected : selectedOption;

  const modifiers = useMemo(
    () => [
      {
        name: "offset",
        enabled: true,
        options: {
          offset: [0, 5],
        },
      },
      {
        name: 'sameWidth',
        enabled: true,
        phase: 'beforeWrite' as ModifierPhases,
        requires: ['computeStyles'],
        fn({ state }:any) {
          state.styles.popper.minWidth = `${state.rects.reference.width}px`
        },
        effect({ state }:any) {
          state.elements.popper.style.minWidth = `${state.elements.reference.offsetWidth}px`
        }
      }
    ],
    []
  );

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: "bottom-start",
      modifiers,
    }
  );

  const toggleDropdown = () => setVisibility(!visible);
  const hide = () => setVisibility(false);

  const optionSelected = (option:string) => {
    !controlled ? setSelectedOption(option) : onSelect(option);;
    toggleDropdown();
  }

  return (
    <SelectWrap ref={clickOutRef}>
          <div style={{width: "100%"}} ref={referenceRef}>
            <Input onClick={toggleDropdown} value={selectedValue} placeholder={placeholder} />
          </div>
          <div ref={popperRef} style={styles.popper} {...attributes.popper}>
            <DropDown style={styles.offset} visible={visible}>
              {
                options.map((option, i) => <SelectOption onClick={() => optionSelected(option)} key={i}>{option}</SelectOption>
              )}
            </DropDown>
          </div>
    </SelectWrap>
  );
}

const SelectWrap = styled.div`
  display: block;
  width: 100%;
`;

Select.defaultProps = {
  options: ["one", "two", "three"],
  placeholder: "Select Something...",
  width: "auto",
  controlled: false,
  selected: null,
  onSelect: () => null
}

export default Select;
