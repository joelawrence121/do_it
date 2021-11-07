import './Board.css';
import ImageUploader from 'react-images-upload';

interface MenuProps {
    onUpload: (files: File[], pictures: string[]) => void
}

function Menu(props: MenuProps) {
    return (
        <ImageUploader
            fileContainerStyle={{
                background: 'none',
                boxShadow: 'none',
            }}
            withIcon={true}
            buttonText='Upload images'
            onChange={props.onUpload}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={52428800}
        />
    );
}

export default Menu;
