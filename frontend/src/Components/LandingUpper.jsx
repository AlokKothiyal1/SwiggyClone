import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        paddingRight: 0,
        paddingLeft: 0,
    },
    btn: {
        margin: theme.spacing(0),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    img1: {
        height: 550,
        width: 633,
    },
    logo: {
        height: 80,
        width: 200,
    },
    textMuted: {
        color: grey[600],
        fontSize: '20px',
        lineHeight: '0',
        fontWeight: 'bold',
    },
    textNormal: {
        color: grey[900],
        fontSize: '20px',
        lineHeight: '0',
        fontWeight: 'bold',
    },
    cityBtn: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        // marginRight: '10px',
    },
    midContainer: {
        backgroundColor: '#2b1e16',
    },
    card: {
        backgroundColor: '#2b1e16',
        maxWidth: 345,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'white',
    },
    cardInfo: {
        color: 'white',
        fontSize: '15px',
    },
    midImg: {
        width: '128px',
        height: '206px',
    },
}));

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        '&:hover': {
            backgroundColor: grey[900],
        },
    },
}))(Button);

const LandingUpper = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                {/* UPPER PART */}
                <Grid container spacing={0}>
                    <Grid item xs={7}>
                        {/* Swiggy LOGO */}
                        <Grid
                            container
                            spacing={0}
                            justify='center'
                            wrap='wrap'
                            style={{
                                marginTop: '30px',
                            }}
                        >
                            <Grid item xs={1}>
                                {/* <p>Free Space</p> */}
                            </Grid>

                            <Grid item xs={3}>
                                <img
                                    src='https://d2sj89osparb2a.cloudfront.net/images/media/swiggy-cashback-coupons.png'
                                    alt='logo'
                                    className={classes.logo}
                                />
                            </Grid>
                            <Grid item xs={5}>
                                {/* <p>Free Space</p> */}
                            </Grid>
                            <Grid
                                item
                                xs={1}
                                style={{
                                    margin: 'auto 0',
                                    // border: '1px solid red',
                                }}
                            >
                                <Button size='large' className={classes.btn}>
                                    <p
                                        style={{
                                            fontWeight: 'bold',
                                            lineHeight: '0px',
                                        }}
                                    >
                                        {' '}
                                        Login{' '}
                                    </p>
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xs={1}
                                style={{
                                    margin: 'auto 0',
                                    // border: '1px solid red',
                                }}
                            >
                                <ColorButton
                                    size='small'
                                    className={classes.btn}
                                    variant='contained'
                                >
                                    <p
                                        style={{
                                            fontWeight: 'bold',
                                            lineHeight: '0',
                                        }}
                                    >
                                        SignUp
                                    </p>
                                </ColorButton>
                            </Grid>
                            <Grid item xs={1}>
                                {/* <p>Free Space</p> */}
                            </Grid>
                        </Grid>{' '}
                        {/* SOME TEXT & TAG LINE */}
                        <Grid
                            container
                            spacing={0}
                            direction='column'
                            style={{
                                marginTop: '30px',
                            }}
                        >
                            <Grid container wrap='wrap'>
                                <Grid item xs={1}>
                                    {/* <p>Free Space</p> */}
                                </Grid>
                                <Grid
                                    item
                                    xs={10}
                                    style={{
                                        textAlign: ' left',
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: '32px',
                                            lineHeight: '0',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Late night at Office ?
                                    </p>
                                </Grid>
                            </Grid>
                            <Grid container wrap='nowrap'>
                                <Grid item xs={1}>
                                    {/* <p>Free Space</p> */}
                                </Grid>
                                <Grid
                                    item
                                    xs={10}
                                    // zeroMinWidth
                                    style={{
                                        textAlign: ' left',
                                    }}
                                >
                                    <p
                                        className={classes.textMuted}
                                        style={{
                                            marginTop: '0',
                                            marginBottom: '0',
                                            fontSize: '24px',
                                        }}
                                    >
                                        Order food from favourite restaurants
                                        near you.
                                    </p>
                                </Grid>
                            </Grid>
                        </Grid>{' '}
                        {/* SEARCH BAR */}
                        <Grid
                            container
                            spacing={0}
                            style={{
                                marginTop: '50px',
                            }}
                        >
                            <Grid item xs={1}>
                                {/* <p>Free Space</p> */}
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                style={{ border: ' 1px solid red' }}
                            >
                                <p>SEARCH BAR</p>
                            </Grid>
                        </Grid>{' '}
                        {/* CITYs */}
                        <Grid
                            container
                            spacing={0}
                            justify='center'
                            alignItems='center'
                            style={{
                                marginTop: '50px',
                            }}
                        >
                            <Grid container>
                                <Grid item xs={1}>
                                    {/* <p>Free Space</p> */}
                                </Grid>
                                <Grid
                                    item
                                    xs={10}
                                    style={{
                                        textAlign: ' left',
                                    }}
                                >
                                    <p
                                        className={classes.textMuted}
                                        style={{
                                            fontSize: '20px',
                                            lineHeight: '0',
                                        }}
                                    >
                                        POPULAR CITIES IN INDIA
                                    </p>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={1}>
                                    {/* <p>Free Space</p> */}
                                </Grid>
                                <Grid
                                    item
                                    xs={10}
                                    style={{
                                        textAlign: ' left',
                                    }}
                                >
                                    <Grid container spacing={0}>
                                        <button className={classes.cityBtn}>
                                            <p className={classes.textNormal}>
                                                Ahmedabad
                                            </p>
                                        </button>{' '}
                                        <button className={classes.cityBtn}>
                                            <p className={classes.textMuted}>
                                                Bangalore
                                            </p>
                                        </button>
                                        <button className={classes.cityBtn}>
                                            <p className={classes.textNormal}>
                                                Chennai
                                            </p>
                                        </button>
                                        <button className={classes.cityBtn}>
                                            <p className={classes.textMuted}>
                                                Delhi
                                            </p>
                                        </button>
                                        <button className={classes.cityBtn}>
                                            <p className={classes.textNormal}>
                                                Gurgoan
                                            </p>
                                        </button>
                                        <button className={classes.cityBtn}>
                                            <p className={classes.textMuted}>
                                                Hyderabad
                                            </p>
                                        </button>
                                        <button className={classes.cityBtn}>
                                            <p className={classes.textNormal}>
                                                Kolkata
                                            </p>
                                        </button>
                                        <button className={classes.cityBtn}>
                                            <p className={classes.textMuted}>
                                                Mumbai
                                            </p>
                                        </button>
                                        <button className={classes.cityBtn}>
                                            <p className={classes.textNormal}>
                                                Pune
                                            </p>
                                        </button>
                                        <button className={classes.cityBtn}>
                                            <p className={classes.textMuted}>
                                                & more.
                                            </p>
                                        </button>
                                    </Grid>{' '}
                                </Grid>
                            </Grid>
                        </Grid>{' '}
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        style={{
                            margin: 'auto',
                        }}
                    >
                        <img
                            src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq'
                            alt='swiggy main'
                            className={classes.img1}
                        />
                    </Grid>
                </Grid>

                {/* MID PART */}
                <Grid
                    container
                    spacing={1}
                    style={{
                        paddingBottom: '50px',
                    }}
                    className={classes.midContainer}
                >
                    <Grid item xs={1}>
                        {/* <p>Free Space</p> */}
                    </Grid>
                    <Grid item xs={10}>
                        {/* <p>Free Space</p> */}
                        <Grid container>
                            <Grid
                                xs={3}
                                style={{
                                    marginLeft: '50px',
                                }}
                                item
                            >
                                <Card className={classes.card} elevation={0}>
                                    <CardActionArea>
                                        <div>
                                            <img
                                                className={classes.midImg}
                                                src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf'
                                                alt='No Minimum Order   '
                                            />
                                        </div>
                                        <CardContent>
                                            <p className={classes.cardTitle}>
                                                No Minimum Order
                                            </p>
                                            <p className={classes.cardInfo}>
                                                Order in for yourself or for the
                                                group, with no restrictions on
                                                order value
                                            </p>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={1}>
                                {/* <p>Free Space</p> */}
                            </Grid>
                            <Grid item xs={3}>
                                <Card className={classes.card} elevation={0}>
                                    <CardActionArea>
                                        <div>
                                            <img
                                                className={classes.midImg}
                                                src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy'
                                                alt='Live Order Tracking'
                                            />
                                        </div>
                                        <CardContent>
                                            <p className={classes.cardTitle}>
                                                Live Order Tracking
                                            </p>
                                            <p className={classes.cardInfo}>
                                                Know where your order is at all
                                                times, from the restaurant to
                                                your doorstep
                                            </p>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={1}>
                                {/* <p>Free Space</p> */}
                            </Grid>
                            <Grid item xs={3}>
                                <Card className={classes.card} elevation={0}>
                                    <CardActionArea>
                                        <div>
                                            <img
                                                className={classes.midImg}
                                                src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn'
                                                alt='Lightning-Fast Delivery'
                                            />
                                        </div>
                                        <CardContent>
                                            <p className={classes.cardTitle}>
                                                Lightning-Fast Delivery
                                            </p>
                                            <p className={classes.cardInfo}>
                                                Experience Swiggy's superfast
                                                delivery for food delivered
                                                fresh & on time
                                            </p>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        {/* <p>Free Space</p> */}
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default LandingUpper;
