import React, { useState } from "react";

export function State(props){
    const [like, SetLike] = useState(0);

    function clickLike(){
        SetLike(like+1);
    }

    const onDecrease = () =>{
        SetLike(like -1);
    }


    return (
        <> 
        <h1>{props.name} 홈페이지 </h1>
        <div style={{border:"solid 1px", width:"500px "}}>
            <h3>{props.hello}</h3>
            <button onClick={clickLike}>like UP </button>
            <span>{like}</span>
            <button onClick={onDecrease}> like DOWN </button>

        </div>
        </>

    );


}