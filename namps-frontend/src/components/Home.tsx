import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const [t] = useTranslation();
  return (
    <Box id={'home'}>
      <Box
        sx={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}
        padding={'50px 0'}
      >
        <Grid container spacing={2}>
          <Grid
            data-aos='fade-right'
            data-aos-delay='1300'
            item
            sm={12}
            md={6}
            lg={6}
            display={'grid'}
            justifyItems={'center'}
          >
            <Typography
              style={{ color: '#000' }}
              variant={'h4'}
              textAlign={'center'}
            >
              {t('home.title1')}
            </Typography>
            <Typography
              style={{ color: '#000' }}
              variant={'h3'}
              gutterBottom
              textAlign={'center'}
            >
              {t('home.title2')}
            </Typography>
            <Typography
              style={{ color: '#000' }}
              paragraph
              width={'75%'}
              textAlign={'center'}
            >
              {t('home.body')}
            </Typography>
          </Grid>
          <Grid
            data-aos='fade-left'
            data-aos-delay='1300'
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <img
              src={'/static/home.svg'}
              alt={'PS Building'}
              style={{
                width: '300px',
                height: '300px',
                backgroundColor: '#45a5f5',
                borderRadius: '50%',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
