import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Router from 'next/router';
import Dropdown from '../../dropdown/components/Dropdown';
// Using public asset path for logo (placed in public/icons)
import {EVENT_GENRE} from '../../../_data';

class Header extends React.Component {
  state = {
    isLoggedIn: false
  }

  render () {
    const { movieData } = this.props;

    return (
      <nav className="page-header navbar">
        <div className="page-header__logo-container col d-flex align-items-center">
          <Link href="/home" className="page-header__logo">
            <img src="/icons/logo.png" alt="Logo" />
          </Link>
          <Link href="#" className="btn page-header__cta primary">
            COMMING SOON
          </Link>
          <Link href="#" className="btn btn-dark page-header__cta">
            NOW SHOWING
          </Link>
        </div>
        <div className="page-header__links col d-flex justify-content-end">
          <Dropdown title="All Languages" data={movieData.languages} type="EventLanguage" />
          <Dropdown title="All Genres" data={EVENT_GENRE} type="EventGenre" />
        </div>
        {/*<NotificationContainer message={notification.message} type={notification.type}/>*/}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  movieData: state.movieData
});

export default connect(mapStateToProps, null)(Header);