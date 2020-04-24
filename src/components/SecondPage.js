import React from 'react';
import {connect} from 'react-redux';
import {addAccount, changePageToggle, setPreviousBtn, writingAccountTitle} from '../actions/index'

class SecondPage extends React.Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress = (e) => {
        if (this.start.parentNode.id === 'second-page__input') {
            if (e.keyCode === 40) {
                // down arrow
                this.start.blur();
                let sibling = document.getElementById(this.props.previousBtn);
                this.changeFocus(sibling);
            }
        } else if (this.start.parentNode.id === 'second-page__btn-group') {
            if (e.keyCode === 39) {
                // right arrow
                let sibling = this.start.nextElementSibling;
                this.changeFocus(sibling);
            } else if (e.keyCode === 37) {
                // left arrow
                let sibling = this.start.previousElementSibling;
                this.changeFocus(sibling);
            } else if (e.keyCode === 38) {
                // up arrow
                let previous = this.start.id;
                let sibling = document.getElementById('second-page__input-input');
                this.changeFocus(sibling);
                this.props.setPreviousBtn(previous)
            } else if (e.keyCode === 13) {
                // enter arrow
                if (this.start.id === 'second-page__btn-add') {
                    let newAccount = {
                        title: this.props.accountTitle,
                        img: "avatar.png"
                    };
                    this.props.addAccount(newAccount)
                }
                this.props.changePageToggle(false);
                this.props.writingAccountTitle('')
            }
        }
    };
    changeFocus = (sibling) => {
        if (sibling != null) {
            this.start.style.backgroundColor = '';
            this.start.style.color = '';
            this.start = sibling;
            sibling.focus();
            sibling.style.backgroundColor = 'cadetblue';
            sibling.style.color = 'white';
        }

    };
    WritingAccountTitle = (e) => {
        this.props.writingAccountTitle(e.target.value)
    };
    focusInput = () => {
        if (this.start) {
            this.start.focus();
            this.start.style.backgroundColor = 'cadetblue';
            this.start.style.color = 'white';
        }
    };


    render() {
        return (
            <div id='second-page' className="second-page">
                <div className="container">
                    <div className="second-page__row">
                        <div className="second-page__input" id='second-page__input'>
                            <input
                                ref={(input) => {
                                    this.start = input;
                                    this.focusInput();
                                }}
                                autoComplete="off"
                                type="text"
                                value={this.props.accountTitle}
                                onChange={(e) => this.WritingAccountTitle(e)}
                                placeholder="enter account name"
                                id='second-page__input-input'/>
                        </div>
                        <div className='second-page__btn-group' id='second-page__btn-group'>
                            <div className="second-page__btn-add btn" id='second-page__btn-add'>Add</div>
                            <div className="second-page__btn-cancel btn" id='second-page__btn-cancel'>Cancel</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    pageToggle: state.pageToggle,
    accountTitle: state.accountTitle,
    previousBtn: state.previousBtn,
});


const mapDispatchToProps = dispatch => ({
    changePageToggle: (status) => dispatch(changePageToggle(status)),
    writingAccountTitle: (status) => dispatch(writingAccountTitle(status)),
    addAccount: (account) => dispatch(addAccount(account)),
    setPreviousBtn: (btn) => dispatch(setPreviousBtn(btn)),
});

const SecondPageWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(SecondPage);

export {SecondPageWithRedux as SecondPage}