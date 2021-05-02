import React from 'react';
import { Bones } from "react-bones/lib";

const Loading = () => {
    return(
    <div style={{margin: "auto auto", marginTop:'20px',}}>
        <view>
            <Bones />
            <view style={{ padding: 10 }} />
            <Bones width={1050} height={30} />
            <view style={{ padding: 10 }} />
            <Bones width={1050} height={30} />
            <view style={{ padding: 10 }} />
            <Bones width={1050} height={30} />
            <view style={{ padding: 10 }} />
        </view>;
    </div>
    )
}


export default Loading;