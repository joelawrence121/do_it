import React from 'react';
import './Board.css';

interface ImagesProps {
    imageList: string[]
}

function Images(props: ImagesProps) {
    return (
        <ul>{props.imageList.map((image, index) => (
            <li>
                <div className={"uploaded-image-box"}>
                    <img className={"image uploaded"} src={image} alt="" width="100"/>
                </div>
            </li>))}
        </ul>
    );
}

export default Images;
