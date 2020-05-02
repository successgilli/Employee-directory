import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ReDirector = ({ loginState: { isLoggedIn }, history }) => {
  useEffect(() => {
    if (isLoggedIn) history.push('/dashboard');
  }, [isLoggedIn]);

  return null;
};

const mapStateToProps = (state) => ({ loginState: state.login });

export default withRouter(connect(mapStateToProps)(ReDirector));
