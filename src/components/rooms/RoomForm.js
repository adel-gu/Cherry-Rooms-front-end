import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createRoom } from '../../redux/rooms/roomsSlice';
import Sidebar from '../../pages/Sidebar';

const RoomForm = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const roomInfo = {
      room: {
        name: data.name,
        image: data.image,
        beds: data.beds,
        price: data.price,
        city: data.city,
        description: data.description,
      },
    };

    dispatch(createRoom(roomInfo));
    navigate('/rooms');
  };

  return (
    <>
      <Sidebar />
      <div className="main-container">
        <div className="pt-24">
          <div className="text-center">
            <h1 className="text-4xl font-medium text-lime-400">
              Create a Room
            </h1>
            <p className="pt-6">Add Room information...</p>
          </div>
          <form
            ref={formRef}
            onSubmit={(e) => handleSubmit(e)}
            className="md:w-1/2 px-10 md:px-0 mt-5 mx-auto"
          >
            <ul>
              <li>
                <input
                  type="text"
                  name="name"
                  placeholder="Room Title"
                  required
                  className="w-full my-3 focus:ring-lime-600 focus:outline-2 focus:border-transparent"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="image"
                  placeholder="Room Image"
                  required
                  className="w-full my-3 focus:ring-lime-600 focus:outline-2 focus:border-transparent"
                />
              </li>
              <li>
                <input
                  type="number"
                  name="beds"
                  placeholder="Number of beds"
                  required
                  className="w-full my-3 focus:ring-lime-600 focus:border-transparent"
                />
              </li>
              <li>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  min="0.00"
                  step="0.01"
                  required
                  className="w-full my-3 focus:ring-lime-600 focus:border-transparent"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  className="w-full my-3 focus:ring-lime-600 focus:border-transparent"
                />
              </li>
              <li>
                <textarea
                  name="description"
                  placeholder="Room description..."
                  required
                  className="w-full my-3 focus:ring-lime-600 focus:border-transparent"
                />
              </li>
              <button
                type="submit"
                className="w-full bg-lime-500 text-white w-1/2 py-3 mx-auto mt-2 block hover:bg-lime-600"
              >
                Submit
              </button>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default RoomForm;
