import React from 'react';
import { addPhoto } from "./../actions.js";
import injectSheet from 'react-jss';
import { connect } from "react-redux";
import styles from '../style/HomeStyle.js';
import logo from './../image/logo.svg';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: ''
        };
    }

    handleUploadImage = (e) => {
        e.preventDefault();
        const data = new FormData();
        if (this.uploadInput.files.length > 0) {
            const name = this.uploadInput.files[0].name.split('.', 1);

            data.append('file', this.uploadInput.files[0]);
            data.append('filename', `${name}${this.uploadInput.files[0].lastModified}`);
            this.state.error = '';
            
            fetch('http://woodstock.manomano.com:8000/upload', {
                method: 'POST',
                body: data,
            }).then((response) => {
                if (response.status === 200) {
                    this.state.thanks = 'Tu viens d\'uploader ton image ;) Bonne chance !';
                    window.location.replace("/VoteManager");
                }
                response.json().then((body) => {
                    this.setState({ imageURL: `https://powerful-tundra-37364.herokuapp.com/mano-photos/${body.file}` });
                });
            });
        } else {
            this.state.error = 'Il faut choisir une image ;P ';
            this.forceUpdate();
        }
    };

    render() {
        return (
            <div>
                <div className={this.props.classes.home__logo}>
                    <img className={this.props.classes.home__logoImage} src={logo} alt="logo soirée"/>
                </div>
                <div>
                    <div className={this.props.classes.home__linkWrapper}>
                        <form onSubmit={this.handleUploadImage} className={this.props.classes.home__link}>
                            <div>
                                {this.state.thanks && (<p className={this.props.classes.voteText}>{this.state.thanks}</p>)}
                                {this.state.error && (<p className={this.props.classes.voteText}>{this.state.error}</p>)}
                                <label htmlFor="file">Choisir une image</label>
                                <input className={this.props.classes.home_input} ref={(ref) => { this.uploadInput = ref; }} id="file" type="file" />
                            </div>
                            <div><button>Upload</button></div>
                        </form>
                    </div>
                    <div className={this.props.classes.home__linkWrapper}>
                        <Link className={this.props.classes.home__link} to={{pathname: '/VoteManager'}}>Vote</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        imageURL: state.imageURL
    };
};

const mapDispatchToProps = {
    addPhoto
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Home));
