import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import RoomDetails from '../../components/reservations/RoomDetails';

describe('Login', () => {
  test('should rendered correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RoomDetails />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen).toMatchSnapshot();
  });
});
