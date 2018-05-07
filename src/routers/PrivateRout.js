import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRout =({
    isAunthenticated,
    component:Component,
    ...rest
    })=>(
        <Route {...rest} component = {(props)=>(
            isAunthenticated? (
                <div>
                    <Header/>
                    <Component {...props} />
                </div>
            ):(
                <Redirect to="/"/>
            )
        )}/>
    
);

const mapStateToProps = (state)=>({
    isAunthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRout);