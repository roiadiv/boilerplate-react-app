import validator from 'validator';//make us to ansure the email adress
import React from 'react';//using jsx
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter,{history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {login,logout} from './actions/auth';
import 'normalize.css/normalize.css';//reset all the css of any kind of browser
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';



const store = configureStore();

const jsx = (
    <div>
        <Provider store = {store}>
            <AppRouter />
        </Provider>
    </div>
)

let hasRendered= false;
const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRendered = true;   
    }
}

ReactDOM.render(<LoadingPage />,document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        renderApp();
        if(history.location.pathname == '/'){
            history.push('/dashboard');
        }
    }else{
        store.dispatch(logout());
        renderApp();
        history.push("/"); 
    }
});