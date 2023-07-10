import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import AlbumCard from './AlbumCard';
import AddAlbumForm from './AlbumAddForm';

//import fetch and async
import { fetchStart, getInitialStateAsync, albumSelector } from './redux/albumsReducer';


const AlbumList = () => {
    const dispatch = useDispatch();
    const { isLoading, error, albums } = useSelector(albumSelector);

    useEffect(() => {
        dispatch(fetchStart());
        dispatch(getInitialStateAsync());
    }, []);

    if (isLoading) {
        return <div className="message">Loading...</div>;
    }
    if (error) {
        return <div className="message">{error}</div>;
    }


    return (
        <div className='parent__container'>
            <h1>Albums List</h1>
            <div className='album__functionalities'>
                <div className="album__add">
                    <h3>Add an album!</h3>
                    <AddAlbumForm />
                </div>
            </div>
            <div className='album__list'>
                {
                    albums.map((item, index) => (
                        <div key={index} className='album'>

                            <AlbumCard id={item.id} userId={item.userId}
                                title={item.title} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AlbumList