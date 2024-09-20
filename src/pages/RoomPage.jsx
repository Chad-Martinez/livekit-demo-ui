import { PreJoin } from '@livekit/components-react';
import LiveKitConference from '../components/LiveKitConference';
import '@livekit/components-styles';
import { useState } from 'react';

const RoomPage = () => {
  const [username, setUserName] = useState('');
  const handleSubmit = (values) => {
    setUserName(values.username);
  };

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
