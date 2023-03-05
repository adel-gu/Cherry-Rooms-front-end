const RoomForm = () => {
  return (
    <div className="main-container">
      <div className="text-center">
        <h1 className="text-4xl font-medium text-lime-400">Create a Room</h1>
        <p className="max-w-xs pt-6">
          Login and start your rooms reservations all over the world
        </p>
      </div>
      <form>
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
            ></textarea>
          </li>
          <button
            type="submit"
            className="w-full bg-lime-500 text-white w-1/2 py-3 mx-auto mt-2 block hover:bg-lime-600"
          >
            Create new room
          </button>
        </ul>
      </form>
    </div>
  );
};

export default RoomForm;
