import React from 'react';
const style = {
    minHeight: 400,
    paddingBottom:55
}

const Body = (props) => {
    console.log(props); 

    return  (
    <div style={style} adicionarProduto={props.adicionarProduto}>
        {props.children}
    </div>
)};

export default Body;



