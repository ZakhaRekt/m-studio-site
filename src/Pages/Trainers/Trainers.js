import React from 'react';
import './Trainers.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        paddingBottom: 20,
        minWidth: '100%',
        backgroundColor:'white',
    },
    media: {
        margin: '10px',
        height: 800,
    },
    main: {
        backgroundColor:'#442e19',
        padding: '20px',
    }
});

function Trainers() {
    const trainers = [{
        firstName: 'Alexey',
        secondName: 'Medunica',
        specialty: 'Европейские Танцы (Стандарт)',
        image: 'https://scontent.fiev25-2.fna.fbcdn.net/v/t1.0-9/59301150_2483419485218918_4071555642861551616_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=kXa5_dxZ8IQAX-SNqji&_nc_ht=scontent.fiev25-2.fna&oh=d57c1c790542bde08067343065f18f07&oe=6011CBC3'
    },
    {
        firstName:'Lyudmila',
        secondName:'Medunica',
        specialty:'Латиноамереканкие Танцы (Латина)',
        image:'https://instagram.fiev25-2.fna.fbcdn.net/v/t51.2885-15/e35/125907110_159883639167105_1299516629855838569_n.jpg?_nc_ht=instagram.fiev25-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=JSHDggit8m8AX_zepND&tp=1&oh=20b8232446735b1f4b045d3b851b94d5&oe=6016A432'
    },
    {
        firstName:'Zakhar',
        secondName:'Medunica',
        specialty:'Просто Захар Программист',
        image:'https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/92690528_107524030792887_4551172821700799391_n.jpg?_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=BAbvE9I-y_IAX_HjPGL&tp=1&oh=ea727acf8f941f7d01be662fc498871a&oe=60148EA5'
    }
    ];
    const classes = useStyles();
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Grid
                    container
                    className={classes.main}
                    spacing={4}
                >
                    {trainers.map((tr,i) => {
                        console.log(i);
                        return (
                            <Grid
                                container
                                item
                                xs
                                className={classes.main__item}
                            >
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={tr.image}
                                            title={tr.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {tr.firstName} {tr.secondName}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {tr.specialty}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Trainers;