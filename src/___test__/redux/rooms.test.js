import roomReducer, { createRoom } from '../../redux/rooms/roomsSlice';

const roomPayload = {
  status: { success: true, message: 'Room created successfully' },
};

const CreatRoomActionCreatore = {
  type: createRoom.fulfilled,
  payload: roomPayload,
};

describe('Create a Room', () => {
  test('Dispatch createRoom thunk successfully will return status success true', () => {
    const newRoom = roomReducer({}, CreatRoomActionCreatore);
    expect(newRoom.isRoomCreated).toBe(true);
  });
});
