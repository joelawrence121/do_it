import React from 'react';
import './Board.css';
import ImageUploader from 'react-images-upload';

interface MenuProps {
    onUpload: (files: File[], pictures: string[]) => void
}

function Menu(props: MenuProps) {
    return (
        <ImageUploader className={"image-uploader"}
            withIcon={true}
            buttonText='Upload images'
            onChange={props.onUpload}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        />
    );
}

export default Menu;
