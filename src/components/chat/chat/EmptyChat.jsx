import { Box, makeStyles, Typography, Divider } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    component: {
        background: '#f8f9fa',
        padding: '50px 0',
        textAlign: 'center',
        height: '100%'
    },
    container: {
        padding: '0 200px',
        [theme.breakpoints.down('sm')]: {
            padding: -0
        }
    },
    image: {
        width: 420
    },

    divider: {
        margin: '30px 0'
    }
}));

const EmptyChat = () => {
    const classes = useStyle();
    const url = 'https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png';

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={url} alt="dp" className={classes.image} />
                {/* <Typography className={classes.title}>Keep your phone connected</Typography> */}
                {/* <Typography className={classes.subTitle}>Whatsapp connects you to your phone to sync messages. To reduce data usage, connect
                    your phone to Wi-Fi.
                </Typography> */}
                <Divider className={classes.divider} />
            </Box>
        </Box>
    )
}

export default EmptyChat;