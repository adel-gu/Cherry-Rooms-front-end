import resReducer, {
  fetchReservations,
} from
  '../../redux/reservations/reservationSlice';

  describe('RESERVATION SLICE TESTS', () => {

    it('should set loading true while action is pending', () => {
        const action = {type: fetchReservations.pending};
        const state= resReducer(
        { 
          loading: 'Loading Api'
        }, action);
        expect(state).toEqual({loading: 'Loading Api'})
     })

    it('should set user when action is fulfilled', () => {
        const action = {
            type: fetchReservations.fulfilled, 
            payload:[1, 2, 3]
        };
        const state= resReducer(
        { 
          loading: 'api loaded'
        }, action);
        expect(state).toEqual({
          loading: 'api loaded',
          reservations: [1, 2, 3]
        })
    })

    it('should set error true when action is rejected', () => {
        const action = {type: fetchReservations.rejected};
        const state= resReducer(
        { 
          loading: 'Failed to load Api.'
        }, action);
        expect(state).toEqual({loading: 'Failed to load Api.'})
     })

})
