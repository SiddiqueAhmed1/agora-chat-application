import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

const Index = () => {
  return (
    <AgoraRTCProvider client={client}>
      <Basics />
    </AgoraRTCProvider>
  );
};

export default Index;
