import React from "react";
export default function Wrapper({children}){
    const style={
        border:'1px solid black',
        color:'blue',
        fontSize:'40px'
    }

    return(
        <div style={style}>{children}</div>
    );
}