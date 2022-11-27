import React, { useState } from 'react';
import './css/Comps.css';

const FuncComp = () => {
    const [text, setText] = useState("look at here");

    // onChange 함수로 바꿔 사용해보기
    return (
        <div>
            <h1>Write down anything !</h1>
            <input type="text" onChange={(e)=>{
                console.log(e.target.value);
                setText(e.target.value);
                }
            } />
            <h3>{text}</h3>
            <a href="https://youtu.be/023Psne_-_4">
                바닐라프로젝트 확인</a>
        </div>
    );
};

export default FuncComp;
