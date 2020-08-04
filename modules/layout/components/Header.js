import Link from 'next/link';
import { connect } from 'react-redux';
import '../styles/header.scss';
import Router from 'next/router';
import Dropdown from '../../dropdown/components/Dropdown';
import logo from '../../../assets/images/icons/logo.png'
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
          <Link href="/home">
            <a className="page-header__logo">
              <img src={logo}></img>
            </a>
          </Link>
          <Link href="#">
            <a href="" className="btn page-header__cta primary">COMMING SOON</a>
          </Link>
          <Link href="#">
            <a href="" className="btn btn-dark page-header__cta">NOW SHOWING</a>
          </Link>
        </div>
        <div className="page-header__links col d-flex justify-content-end">
          <Dropdown title="All Languages" data={movieData.languages} type="EventLanguage" />
          <Dropdown title="All Genres" data={EVENT_GENRE} type="EventGenre" />
        </div>
        {/*<NotificationContainer message={notification.message} type={notification.type}/>*/}
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  movieData: state.movieData
});

export default connect(mapStateToProps, null)(Header);