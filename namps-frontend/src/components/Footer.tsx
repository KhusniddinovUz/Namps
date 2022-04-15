import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PinDropIcon from '@mui/icons-material/PinDrop';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const [t] = useTranslation();
  return (
    <Box
      id='contact'
      sx={{ bgcolor: 'primary.dark', color: '#fff' }}
      paddingTop='30px'
    >
      <Grid container>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
          item
          display='flex'
          sx={{ flexDirection: 'column' }}
          justifyContent='center'
          paddingBottom='20px'
        >
          <Typography variant='h4' textAlign='center' sx={{ width: '100%' }}>
            {t('footer.box1.title')}
          </Typography>
          <List className='contact-list'>
            <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
              <DoubleArrowIcon />
              <Typography variant='h6'>{t('footer.box1.info1')}</Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
              <DoubleArrowIcon />
              <Typography variant='h6'>{t('footer.box1.info2')}</Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
              <DoubleArrowIcon />
              <Typography variant='h6'>{t('footer.box1.info3')}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
          item
          display='flex'
          sx={{ flexDirection: 'column' }}
          justifyContent='center'
          paddingBottom='20px'
        >
          <Typography variant='h4' textAlign='center' sx={{ width: '100%' }}>
            {t('footer.box2.title')}
          </Typography>
          <List className='contact-list'>
            <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
              <CallIcon />
              <Typography variant='h6'>
                <Link href='tel:+998692265646'>+998 (69) 226 56 46</Link>
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
              <EmailIcon />
              <Typography variant='h6'>
                <Link href='mailto:info.nampm@gmail.com'>
                  info.nampm@gmail.com
                </Link>
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
              <PinDropIcon />
              <Typography variant='h6'>{t('footer.box2.address')}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          item
          display='flex'
          justifyContent='center'
          sx={{ flexDirection: 'column' }}
          paddingBottom='20px'
        >
          <Typography variant='h4' textAlign='center' sx={{ width: '100%' }}>
            {t('footer.box3.title')}
          </Typography>
          <List>
            <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
              <TelegramIcon />
              <Link href='https://t.me/nampmuz'>
                <Typography textAlign='center' variant='h6'>
                  {t('footer.box3.telegram')}
                </Typography>
              </Link>
            </ListItem>
            <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
              <FacebookIcon />
              <Link href='https://www.facebook.com/nampmuz/'>
                <Typography variant='h6'>
                  {t('footer.box3.facebook')}
                </Typography>
              </Link>
            </ListItem>
            <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramIcon />
              <Link href='https://instagram.com/nampmuz/'>
                <Typography variant='h6'>
                  {t('footer.box3.instagram')}
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Box
        sx={{ bgcolor: 'primary.main', borderTop: '1px solid #000' }}
        padding='20px'
      >
        <Typography textAlign='center'>
          Copyright © KhusniddinovUz 2021 All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
