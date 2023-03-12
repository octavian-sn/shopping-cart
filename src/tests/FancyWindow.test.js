import React from 'react';
import { render } from '@testing-library/react';
import FancyWindow from '../components/FancyWindow';

describe('FancyWindow component', () => {
  it('renders a continue button', () => {
    const { container } = render(<FancyWindow />);
    expect(container).toMatchSnapshot();
  });
});
