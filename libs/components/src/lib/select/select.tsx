/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useMemo } from 'react';
import { usePopper } from 'react-popper';
import { ModifierPhases } from '@popperjs/core'
import styled from '@emotion/styled';
import DropDown from './components/dropdown';
import Input from './components/input';
import SelectOption from './components/option';
import OutsideClickHandler from "react-outside-click-handler";

/* eslint-disable-next-line */
export interface SelectProps {
  options: string[],
  onSelect: (e:string) => void,
  placeholder: string
}

export function Select({options, onSelect, placeholder}: SelectProps) {
  const [visible, setVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState<null | string>(null);

  const referenceRef = useRef(null);
  const popperRef = useRef(null);

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
    console.log("selected", option);
    setSelectedOption(option);
    toggleDropdown();
    onSelect(option);
  }

  return (
    <OutsideClickHandler onOutsideClick={hide}>
      <SelectWrap>
        <div ref={referenceRef}><Input onClick={toggleDropdown} value={selectedOption} placeholder={placeholder} /></div>
        <div ref={popperRef} style={styles.popper} {...attributes.popper}>
          <DropDown style={styles.offset} visible={visible}>
            {options.map((option, i) => 
              <SelectOption onClick={(e) => optionSelected(option)} key={i}>{option}</SelectOption>
            )}
          </DropDown>
        </div>
      </SelectWrap>
    </OutsideClickHandler>
  );
}

const SelectWrap = styled.div`
  display: block;
`;

const Option = styled.div`
  
`;

Select.defaultProps = {
  options: ["one", "two", "three"],
  placeholder: "Select Something...",
  onSelect: () => null
}



export default Select;
