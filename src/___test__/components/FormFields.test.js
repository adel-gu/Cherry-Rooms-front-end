import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import NumberInput from '../../components/reservations/NumberInput';
import DateInput from '../../components/reservations/DateInput'
import SelectInput from '../../components/reservations/SelectInput'
import SubmitBtn from '../../components/reservations/SubmitBtn'

describe('Login', () => {
  test('should rendered correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NumberInput />
          <DateInput />
          <SelectInput/>
          <SubmitBtn/>
        </Provider>
      </BrowserRouter>,
    );
    expect(screen).toMatchSnapshot();
  });
});
