import React from 'react';
import Card from 'react-bootstrap/Card';
import './index.css';
import { useDispatch } from 'react-redux';
import { deleteAlbum } from './redux/albumsReducer';

const AlbumCard = ({ userId, id, title }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteAlbum(id));
    }

    return (
        <Card style={{ width: '18rem' }} className='card__container'>

            <Card.Body >
                <Card.Title className='card__title'>
                    ID: {id} <br />
                    User ID: {userId}
                </Card.Title>
                <Card.Text className='card__content'>
                    {title}
                </Card.Text>
            </Card.Body>
            <button onClick={handleDelete}>Delete</button>
        </Card>
    )
}

export default AlbumCard