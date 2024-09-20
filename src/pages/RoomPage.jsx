import { PreJoin } from '@livekit/components-react';
import LiveKitConference from '../components/LiveKitConference';
import '@livekit/components-styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generateRoom } from '../services/roomService';

const RoomPage = () => {
  const [username, setUserName] = useState('');
  const handleSubmit = (values) => {
    setUserName(values.username);
  };

  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        await generateRoom(params.roomId);
      } catch (error) {
        console.error('Error generating room ', error);
      }
    })();
  }, [params.roomId]);

  return (
    <>
      {username ? (
        <LiveKitConference username={username} />
      ) : (
        <PreJoin data-lk-theme='default' onSubmit={handleSubmit} />
      )}
    </>
  );
};

export default RoomPage;
