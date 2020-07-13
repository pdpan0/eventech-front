import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import { Creators as UserActions } from '../store/ducks/user'
import About from '../pages/About';

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => (bindActionCreators(UserActions, dispatch))

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(About)
);