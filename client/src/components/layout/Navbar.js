import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <React.Fragment>
      <div className="flex-1 group">
        <Link to="/profiles" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
          <span className="block px-1 pt-1 pb-2">
              <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
              <span className="block text-xs pb-1">Developers</span>
          </span>
        </Link>
      </div>
      <div className="flex-1 group">
        <Link to="/posts" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
          <span className="block px-1 pt-1 pb-2">
              <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
              <span className="block text-xs pb-1">Posts</span>
          </span>            
        </Link>
      </div>
      <div className="flex-1 group">
        <Link to="/Dashboard" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
          <span className="block px-1 pt-1 pb-2">
              <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
              <span className="block text-xs pb-1">Dashboard</span>
          </span>            
        </Link>
      </div>
      <div className="flex-1 group">
        <a onClick={logout} href="/"  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
          <span className="block px-1 pt-1 pb-2">
              <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
              <span className="block text-xs pb-1">Logout</span>
          </span>            
        </a>
      </div>
    </React.Fragment>
  );

  const guestLinks = (
    <React.Fragment>
      <div className="flex-1 group">
        <Link to="/profiles" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
          <span className="block px-1 pt-1 pb-2">
              <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
              <span className="block text-xs pb-1">Developers</span>
          </span>            
        </Link>
      </div>
      <div className="flex-1 group">
        <Link to="/register" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
          <span className="block px-1 pt-1 pb-2">
              <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
              <span className="block text-xs pb-1">Register</span>
          </span>            
        </Link>
      </div>
      <div className="flex-1 group">
        <Link to="/login" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
          <span className="block px-1 pt-1 pb-2">
              <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
              <span className="block text-xs pb-1">Login</span>
          </span>            
        </Link>
      </div>
    </React.Fragment>
  );

  return (
    <div className="px-7 bg-white shadow-lg rounded-2xl">
      <div className="flex">
        <div className="flex-1 group">
          <Link to="/" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
            <span className="block px-1 pt-1 pb-2">
                <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">DevConnector</span>
            </span>            
          </Link>
        </div>
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
