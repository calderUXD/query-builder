import { render } from '@testing-library/react';

import ClosableContainer from './closable-container';

describe('ClosableContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClosableContainer onClear={() => console.log()}>close me</ClosableContainer>);
    expect(baseElement).toBeTruthy();
  });
});
