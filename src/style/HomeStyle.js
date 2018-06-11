import colors from './../config/colors';

const styles = {
    '@global': {
        body: {
            margin: 0,
            padding: 0,
            backgroundColor: colors.dark
        }
    },
    home__logo: {
        paddingTop: 25
    },
    home__logoImage: {
        width: '100%',
        height: '34vh',
        margin: '0 auto'
    },
    home__linkWrapper: {
        textAlign: 'center',
        border: 'solid 1px',
        borderRadius: 8,
        borderColor: colors.brownMid,
        width: '80%',
        backgroundColor: colors.brownLight,
        margin: '10px auto'
    },
    home__link: {
        color: colors.white,
        textDecoration: 'none',
        display: 'block',
        padding: 20
    },
    home_input: {
        display: 'none'
    }
};

export default styles;