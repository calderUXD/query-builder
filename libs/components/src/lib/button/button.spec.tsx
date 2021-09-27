import { render } from '@testing-library/react';

import Button from './button';

describe('Primary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button btnTheme="primary" onClick={() => null}>Button</Button>);
    expect(baseElement).toBeTruthy();
  });
});
