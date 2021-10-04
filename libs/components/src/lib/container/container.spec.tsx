import { render } from '@testing-library/react';

import Container from './container';

describe('Container', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Container bg="light" border="dark" padding="1rem">Primary Container</Container>);
    expect(baseElement).toBeTruthy();
  });
});
