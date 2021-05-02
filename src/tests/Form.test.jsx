import * as React from 'react';
import { render } from '@testing-library/react';

import Form from '../Components/Form';

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
      ...ActualReactRedux,
      useSelector: jest.fn().mockImplementation(() => {
          return mockState;
      }),
      useDispatch: jest.fn().mockImplementation(),
  };
});

test("renders the form", () => {
  const { getByLabelText } = render(<Form />);
  const input = getByLabelText("Movie Title");
  expect(input).not.toBeNull();
  expect(input).toHaveValue("");
})
