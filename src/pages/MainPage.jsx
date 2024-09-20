import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const enterRoomHandler = () => navigate(`/rooms/${inputRef.current.value}`);

  return (
    <>
      <h1>LiveKit Demo</h1>
      <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <input ref={inputRef} type='text' />
        <button onClick={enterRoomHandler}>Enter Room</button>
      </div>
    </>
  );
};

export default MainPage;
