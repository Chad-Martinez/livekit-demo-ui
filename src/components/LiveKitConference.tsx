import React, { useEffect, useState } from 'react';
import {
  ControlBar,
  LiveKitRoom,
  RoomAudioRenderer,
} from '@livekit/components-react';
import '@livekit/components-styles';
import { useParams } from 'react-router-dom';
import MyVideoConference from '../components/MyVideoConference';
import { generateToken } from '../services/tokenService';
import { wsURL } from '../helpers/helpers';

const LiveKitConference = ({ username }) => {
  const [token, setToken] = useState('');
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await generateToken({
          roomName: params.roomId,
          username,
        });
        const { newToken } = data;
        if (newToken) setToken(newToken);
      } catch (error) {
        console.error('Error generating token: ', error);
      }
    })();
  }, []);

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={wsURL}
      data-lk-theme='default'
      style={{ height: '100vh', minWidth: '300px' }}
    >
      <MyVideoConference />
      <RoomAudioRenderer />
      <ControlBar />
    </LiveKitRoom>
  );
};

export default LiveKitConference;
