import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {connect} from "react-redux"
import { deleteMovie } from '../actions/movieActions';
import {toggleFavorites, addFavorite} from '../actions/favoritesActions'

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const {movies, deleteMovie, displayFavorites, addFavorite, favorites} = props;
    const movie = movies.find(movie=>movie.id===Number(id));

    const handleFavClick = () => {
        addFavorite(movie)
    }

    const handleDelClick = () => {
        deleteMovie(movie.id);
        push('/movies');
    }  

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {(displayFavorites && !favorites.includes(movie)) && <span className="m-2 btn btn-dark" onClick={handleFavClick}>Favorite</span>}
                            <span className="delete" onClick={handleDelClick}><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = state => {
    return ({
        movies: state.movieReducer.movies,
        displayFavorites: state.favoriteReducer.displayFavorites,
        favorites: [...state.favoriteReducer.favorites],
    })
}

export default connect(mapStateToProps, {addFavorite, deleteMovie})(Movie);