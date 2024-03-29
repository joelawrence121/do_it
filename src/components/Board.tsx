import React, {useState} from 'react';
import './Board.css';
import Menu from "./Menu";
import Images from "./Images";
import Result from "./Result";

const Board: React.FC = () => {

    const [images, setImages] = useState<string[]>([])

    function onUpload(files: File[], pictures: string[]) {
        setImages(pictures)
    }

    return (
        <section className="grid-layout">
            <div className="section menu">
                <Menu onUpload={onUpload}/>
            </div>
            <div className="section images">
                <Images imageList={images}/>
            </div>
            <div className="section result">
                <Result imageList={images}/>
            </div>
        </section>
    );
}

export default Board;
