import { useEffect, useState } from 'react';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/rooms') // sau endpoint-ul tău backend
      .then(res => res.json())
      .then(data => {
        setRooms(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching rooms:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading rooms...</div>;

  return (
    <section className="rooms-section">
      <h2>Our Rooms</h2>
      <div className="rooms-list">
        {rooms.map(room => (
          <div key={room.id} className="room-card">
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <p>Price: ${room.price} per night</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;