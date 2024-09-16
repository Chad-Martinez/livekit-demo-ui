import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { Track } from "livekit-client";
import { useEffect, useState } from "react";
import { generateToken } from "./services/tokenService";

const WS_URL = 'wss://somoslocos-c9nedqj6.livekit.cloud';

const MyVideoConference = () => {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false },
  );
  return (
    <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
}

function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const { data } = await generateToken('user-1');
        const { newToken } = data;
        
        if (newToken) setToken(newToken);
      } catch (error) {
        console.log('Error generating token: ', error);
      }
    })()
  },[])
  
  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={WS_URL}
      simulateParticipants={3}
      // Use the default LiveKit theme for nice styles.
      data-lk-theme="default"
      style={{ height: '100vh' }}
    >
      {/* Your custom component with basic video conferencing functionality. */}
      <MyVideoConference />
      {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
      <RoomAudioRenderer />
      {/* Controls for the user to start/stop audio, video, and screen
      share tracks and to leave the room. */}
      <ControlBar />
    </LiveKitRoom>
    
  )
}

export default App
