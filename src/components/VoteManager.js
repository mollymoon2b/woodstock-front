import React from 'react';
import styles from '../style/VoteStyle.js';
import injectSheet from 'react-jss';
import { connect } from "react-redux";
import List from './List';
import { hasVotedAction } from './../actions';
import './../index.css';

class VoteManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voteEnable: true,
        };
        this.handleVoteImage = this.handleVoteImage.bind(this);
    }

    getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin === -1) {
            begin = dc.indexOf(prefix);
            if (begin !== 0) return null;
        }
        else
        {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end === -1) {
                end = dc.length;
            }
        }
        return decodeURI(dc.substring(begin + prefix.length, end));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.hasVoted !== this.props.hasVoted) {
            this.setState({voteEnable: false });
        }
    }

    handleVoteImage = (id, e) => {
        e.preventDefault();
        if (this.state.voteEnable) {
            document.cookie = "vote=true";
            this.props.hasVotedAction(id);
        }
    };

    componentDidMount() {
        const myCookie = this.getCookie("vote");
        if (myCookie) {
            this.setState({voteEnable: false });
        }
    }

    render() {
        return <List voteEnable={this.state.voteEnable} handleVoteImage={this.handleVoteImage} error={this.props.error}/>;
    }
}

const mapStateToProps = state => {
    return {
        hasVoted: state.hasVoted,
    };
};

const mapDispatchToProps = {
    hasVotedAction
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(VoteManager));