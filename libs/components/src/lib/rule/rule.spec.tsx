import { render } from '@testing-library/react';

import Rule from './rule';

describe('Rule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rule />);
    expect(baseElement).toBeTruthy();
  });
});
