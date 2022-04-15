import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const [t] = useTranslation();
  return (
    <Box id={'about'}>
      <Box sx={{ backgroundColor: 'primary.light' }}>
        <Typography
          variant={'h4'}
          paddingBottom={'50px'}
          textAlign={'center'}
          paddingTop={'50px'}
        >
          {t('about.title')}
        </Typography>
        <Grid container justifyContent={'space-evenly'} alignItems={'center'}>
          <Grid
            item
            sm={12}
            xs={12}
            md={6}
            lg={3}
            padding={'10px'}
            marginBottom={'30px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Card
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              }}
              sx={{ maxWidth: 345 }}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image='/static/about/card1.jpg'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography
                    variant='body1'
                    color='text.secondary'
                    textAlign={'center'}
                  >
                    {t('about.body1')}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            sm={12}
            xs={12}
            md={6}
            lg={3}
            marginBottom={'30px'}
            padding={'10px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Card
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              }}
              sx={{ maxWidth: 345 }}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image='/static/about/card2.jpg'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography
                    variant='body1'
                    color='text.secondary'
                    textAlign={'center'}
                  >
                    {t('about.body2')}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            sm={12}
            xs={12}
            md={6}
            lg={3}
            marginBottom={'30px'}
            padding={'10px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Card
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              }}
              sx={{ maxWidth: 345 }}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image='/static/about/card3.jpg'
                  alt='green iguana'
                />
                <CardContent>
                  <Typography
                    variant='body1'
                    color='text.secondary'
                    textAlign={'center'}
                  >
                    {t('about.body3')}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
