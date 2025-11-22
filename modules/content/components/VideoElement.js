import { connect } from 'react-redux';
import MovieTag from './MovieTag'
import React from 'react';
// Icons now referenced from /public/icons
import {MONTH_NAMES} from "../../../constants";
// Calendar icon served from public/icons

class VideoElement extends React.Component {

  getMovieDetails = (movieId) => {
    const { movieData } = this.props;
    return movieData.movies[movieId]
  }

  render() {
    const { movieId } = this.props;
    const movieDetails = this.getMovieDetails(movieId);
    const key = movieDetails.TrailerURL.split("v=")[1].split('&')[0];
    const url = `https://www.youtube.com/embed/${key}`;
    const releaseDate = new Date(movieDetails.ShowDate);

    return (
      <div className="video-element row d-flex">
        <div className="col-sm-7 video-element__video">
          <iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen />
        </div>
        <div className="col video-element__movie-details">
          <h3>{movieDetails.EventName}</h3>
          <p>{movieDetails.EventLanguage}</p>
          {
            movieDetails.EventGenre.split('|').map(tag => (<MovieTag name={tag}/>))
          }
          <div className="video-element__likes-votes d-flex align-items-center">
            <div className="">
              <img className="video-element__like-img" src="/icons/thumb.svg" alt="Likes" />
            </div>
            <div className="content">
              <p className="video-element__likes">{`${movieDetails.wtsPerc}%`}</p>
              <p className="video-element__votes">
                {`${movieDetails.csCount} vote(s)`}
              </p>
            </div>
            <div className="video-element__calender-icon">
              <img className="video-element__like-img" src="/icons/calender.svg" alt="Release date" />
            </div>
            <div className="content">
              <p className="video-element__release-month">{MONTH_NAMES[releaseDate.getMonth()]}</p>
              <p className="video-element__release-year">
                {releaseDate.getFullYear()}
              </p>
            </div>
          </div>
          <div className="video-element__footer">

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movieData: state.movieData
});

export default connect(mapStateToProps, null)(VideoElement);
