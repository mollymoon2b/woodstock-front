import colors from './../config/colors';

const styles = {
    '@global': {
        body: {
            fontFamily: 'woodstock',
            margin: 0,
            padding: 0,
            backgroundColor: colors.dark
        }
    },
    logo : {

    },
    voteImg: {
        height: 'auto',
        width: '100%'
    },
    voteLink: {
    },
    voteText: {
        color: colors.white,
        display: 'block',
        textAlign: 'center',
        width: '100%'
    },
    voteTitle: {
        color: colors.white,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
};

export default styles;