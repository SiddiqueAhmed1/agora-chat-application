import {
  LocalUser, // Plays the microphone audio track and the camera video track
  RemoteUser, // Plays the remote user audio and video tracks
  useIsConnected, // Returns whether the SDK is connected to Agora's server
  useJoin, // Automatically join and leave a channel on mount and unmount
  useLocalMicrophoneTrack, // Create a local microphone audio track
  useLocalCameraTrack, // Create a local camera video track
  usePublish, // Publish the local tracks
  useRemoteUsers, // Retrieve the list of remote users
} from "agora-rtc-react";
import { useState } from "react";

// ta join a channel
const [appId, setAppId] = useState("");
const [channel, setChannel] = useState("");
const [token, setToken] = useState("");
const [calling, setCalling] = useState(false);
const isConnected = useIsConnected();

//to join app
useJoin(
  { appid: appId, channel: channel, token: token ? token : null },
  calling
);

// for local  audio n video tracks
const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
const { localCameraTrack } = useLocalCameraTrack(cameraOn);

// publish the local audio n video in channel
const [micOn, setMic] = useState(true);
const [cameraOn, setCamera] = useState(true);

usePublish([localMicrophoneTrack, localCameraTrack]);

const remoteUsers = useRemoteUsers();

const Basics = () => {
  return (
    <>
      <LocalUser
        audioTrack={localMicrophoneTrack}
        cameraOn={cameraOn}
        micOn={micOn}
        videoTrack={localCameraTrack}
        style={{ width: "50%", height: 300 }}
      />
      {remoteUsers.map((user) => (
        <div key={user.uid}>
          <RemoteUser user={user} style={{ width: "50%", height: 300 }}>
            <samp>{user.uid}</samp>
          </RemoteUser>
        </div>
      ))}
    </>
  );
};

export default Basics;
