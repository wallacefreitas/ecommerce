import React from 'react';
const style = {
    minHeight: 400,
    paddingBottom:55
}

const Body = (props) => {


    return  (
    <div style={style} >
        {props.children}
    </div>
)};

export default Body;



