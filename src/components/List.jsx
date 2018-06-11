import React from 'react';
import styles from '../style/VoteStyle.js';
import injectSheet from 'react-jss';
import { connect } from "react-redux";
import { init } from './../actions';
import logo from './../image/logo.svg';
import { Link } from 'react-router-dom'

class List extends React.Component {

    componentDidMount() {
        this.props.init();
    }

    render() {
        return (
            <div>
                <div>
                    <Link className={this.props.classes.home__link} to={{pathname: '/'}}>
                        <img className={this.props.classes.logo} src={logo} alt="logo soirée"/>
                    </Link>
                    <h1 className={this.props.classes.voteTitle}>Les plus BEAUX !!!</h1>
                </div>
                <div>
                    {Object.keys(this.props.files.files).map((id) => {
                        return (
                            <div>
                                <a href="" key={id} className={this.props.classes.voteLink} onClick={(e) => this.props.handleVoteImage(id, e)}>
                                    {/*<img className={this.props.classes.voteImg} src={'https://powerful-tundra-37364.herokuapp.com/public/' + this.props.files.files[id].name} alt={this.props.files.files[id].name} />*/}
                                    <img className={this.props.classes.voteImg} src={'http://localhost:8000/public/' + this.props.files.files[id].name} alt={this.props.files.files[id].name} />
                                    <span className={this.props.classes.voteText}>{this.props.files.files[id].vote} Votes</span>
                                    {this.props.voteEnable && (<p className={this.props.classes.voteText}>Click pour voter</p>)}
                                    {!this.props.voteEnable && (<p className={this.props.classes.voteText}>Tu as deja vote</p>)}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

List.defaultProps = {
    files: {
        files: []
    }
};

const mapStateToProps = state => {
    return {
        files: state.files,
    };
};

const mapDispatchToProps = {
    init
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(List));