import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAlbum } from './redux/albumsReducer';
import './index.css';

const AddAlbumForm = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');

    const handleAddAlbum = () => {
        const newAlbum = {
            id: id,
            userId: userId,
            title: title,
        };

        dispatch(addAlbum(newAlbum));
        alert('new album added!');

        // Reset the form inputs
        setId('');
        setUserId('');
        setTitle('');
    };

    return (
        <form className='form__container'>
            <div>
                {/* <label>ID</label> */}
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder='ID' />
            </div>
            <div>
                {/* <label>User ID</label> */}
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder='User ID' />
            </div>
            <div>
                {/* <label>Title</label> */}
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
            </div>
            <button type="button" onClick={handleAddAlbum}>
                Add Album
            </button>
        </form>
    );
};

export default AddAlbumForm;
