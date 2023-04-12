import React from "react";
import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const { roomID } = useParams();

    const myMeeting = async (element) => {
        const appID = 1138307923;
        const serverSecret = '94b6dff6b009c7f14bd1fb2299b3baa4';
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "Test User");
        
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
            sharedLinks: [
            {
                name: 'Copy link',
                url:
                window.location.protocol + '//' + 
                window.location.host + window.location.pathname +
                '?roomID=' +
                roomID,
            }],
            showScreenSharingButton: true,
        });
    }

    return (
        <div>
            <div ref={myMeeting}/>
        </div>
    )
}

export default RoomPage;