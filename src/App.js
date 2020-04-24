import React, {useEffect} from 'react';
import './App.css'
import {connect} from 'react-redux';
import {setAccounts} from './actions/index'
import {FirstPage} from "./components/FirstPage";
import {SecondPage} from "./components/SecondPage";
import data from './data'
const  App =(props) =>{
    useEffect(() => {
        props.setAccounts(data.accounts)
    }, []);
  return (

    <div className="App">
        {
            (props.pageToggle)?<SecondPage/>:<FirstPage/>
        }
    </div>
  );
};

const mapStateToProps = state => ({
    pageToggle: state.pageToggle
});


const mapDispatchToProps = dispatch => ({
    setAccounts: (data) => dispatch(setAccounts(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)