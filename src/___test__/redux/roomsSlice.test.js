import roomsReducer, { getRooms } from '../../redux/rooms/roomsSlice';

describe('ROOMS SLICE TESTS', () => {
  it('should set loading true while action is pending', () => {
    const action = { type: getRooms.pending };
    const state = roomsReducer(
      {
        status: 'loading',
      },
      action,
    );
    expect(state).toEqual({ status: 'Loading' });
  });

  it('should send the payload when action is fulfilled', () => {
    const action = {
      type: getRooms.fulfilled,
      payload: [1, 2, 3],
    };
    const state = roomsReducer(
      {
        status: 'succeeded',
      },
      action,
    );
    expect(state).toEqual({
      status: 'succeeded',
      rooms: [1, 2, 3],
    });
  });
});
