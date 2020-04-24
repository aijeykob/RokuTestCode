import React from 'react';
import {connect} from 'react-redux';
import {changePageToggle, deleteAccount} from '../actions/index'

let previousAccount;

class FirstPage extends React.Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);

    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress = (e) => {
        if (this.start.parentNode.id === 'first-page__accounts') {
            if (e.keyCode === 38) {
                // up arrow
                let sibling = this.start.previousElementSibling;
                this.changeFocus(sibling);
            } else if (e.keyCode === 40) {
                // down arrow
                let sibling = this.start.nextElementSibling;
                this.changeFocus(sibling);

            } else if (e.keyCode === 37) {
                // left arrow
                this.props.deleteAccount(this.start.getAttribute('name'))
            } else if (e.keyCode === 39) {
                // right arrow
                previousAccount = this.start;
                let sibling = document.getElementById('first-page_btn-btn');
                this.changeFocus(sibling);
            }
        } else if (this.start.parentNode.id === 'first-page__btn') {
            if (e.keyCode === 37) {
                // left arrow
                let sibling = previousAccount;
                this.changeFocus(sibling);
            } else if (e.keyCode === 13) {
                // enter arrow
                this.props.changePageToggle(true);
            }
        } else if (this.start.parentNode.id === 'second-page__input') {
            if (e.keyCode === 40) {
                // down arrow
                let sibling = document.getElementById('second-page__btn-add');
                this.changeFocus(sibling);
            }
        }
    };
    changeFocus = (sibling) => {
        if (sibling != null) {
            this.start.focus();
            this.start.style.backgroundColor = '';
            this.start.style.color = '';
            sibling.focus();
            sibling.style.backgroundColor = 'cadetblue';
            sibling.style.color = 'white';
            this.start = sibling;
        }
    };
    focusFirstAccount = () => {
        if (this.start) {
            this.start.focus();
            this.start.style.backgroundColor = 'cadetblue';
            this.start.style.color = 'white';
        }
    };

    render() {
        return (
            <div className="first-page" id='first-page'>
                <div className="container">
                    <div className="first-page__row">
                        <div id='first-page__accounts' className="first-page__accounts">
                            {
                                this.props.accounts.map((el, i) => {
                                    if (i === 0) {
                                        return (
                                            <div className='first-page__item'
                                                 name={el.title}
                                                 id='start'
                                                 key={el.title}
                                                 ref={(input) => {
                                                     this.start = input;
                                                     this.focusFirstAccount();
                                                 }}
                                            >
                                                <img src={`../${el.img}`} alt='' width='40px' height='40px'/>
                                                <p>{el.title}</p>

                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className='first-page__item' name={el.title} key={el.title}>
                                                <img src={`../${el.img}`} alt='' width='40px' height='40px'/>
                                                <p>{el.title}</p>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className="first-page__btn" id='first-page__btn'>
                            <div className='first-page_btn-btn btn' id='first-page_btn-btn'>Add</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    pageToggle: state.pageToggle,
    accounts: state.accounts
});


const mapDispatchToProps = dispatch => ({
    changePageToggle: (status) => dispatch(changePageToggle(status)),
    deleteAccount: (name) => dispatch(deleteAccount(name)),
});

const FirstPageWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstPage);

export {FirstPageWithRedux as FirstPage}