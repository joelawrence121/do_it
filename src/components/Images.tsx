import React from 'react';
import './Board.css';

interface ImagesProps {
    imageList: string[]
}

function Images(props: ImagesProps) {
    return (
        <ul>{props.imageList.map((image, index) => (
            <li>
                <img src={image} alt="" width="100"/>
            </li>))}
        </ul>
    );
}

export default Images;
