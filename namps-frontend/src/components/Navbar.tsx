import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContactsIcon from '@mui/icons-material/Contacts';
import Link from '@mui/material/Link';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const langs = {
  uz: { nativeName: 'UZ' },
  en: { nativeName: 'EN' },
};

const Navbar: React.FC = () => {
  const [drawerActivate, setDrawerActivate] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [t, i18n] = useTranslation();

  useEffect(() => {
    AOS.init({
      disable: () => {
        const { innerWidth: width } = window;
        if (width < 600) {
          return true;
        } else {
          return false;
        }
      },
      duration: 600,
      once: true,
      delay: 300,
    });
    if (window.innerWidth <= 899) {
      setDrawerActivate(true);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 899) {
        setDrawerActivate(true);
      } else {
        setDrawerActivate(false);
      }
    });
  }, []);

  //Small Screens
  const createDrawer = () => {
    return (
      <Box marginBottom={'20px'}>
        <AppBar
          sx={{
            bgcolor: 'primary.main',
          }}
        >
          <Toolbar>
            <Grid container direction='row' alignItems='center'>
              <MenuIcon
                onClick={() => {
                  setDrawer(true);
                }}
              />
              <Box
                width={'100%'}
                sx={{
                  zIndex: '-1',
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Avatar alt={'logo namps'} src='/static/logo.png' />
                <Typography
                  textAlign='center'
                  color=' inherit'
                  variant='caption'
                >
                  {t('navbar.mobileTitle')}
                </Typography>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={drawer}
          onClose={() => {
            setDrawer(false);
          }}
          onOpen={() => {
            setDrawer(true);
          }}
        >
          <Box
            tabIndex={0}
            role='button'
            onClick={() => {
              setDrawer(false);
            }}
            onKeyDown={() => {
              setDrawer(false);
            }}
          >
            <List sx={{ background: '#fff', height: '100vh' }}>
              <ListItem key={1} button divider>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <HomeIcon />
                  <Link href={'/#home'}>{t('navbar.home')}</Link>
                </Box>
              </ListItem>
              <ListItem key={2} button divider>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon />
                  <Link href={'/#about'}>{t('navbar.about')}</Link>
                </Box>
              </ListItem>
              <ListItem key={3} button divider>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ArticleIcon />
                  <Link href={'/#blog'}>Blog</Link>
                </Box>
              </ListItem>
              <ListItem key={4} button divider>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AssignmentIndIcon />
                  <Link href={'/#admission'}>{t('navbar.admission')}</Link>
                </Box>
              </ListItem>
              <ListItem key={5} button divider>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ContactsIcon />
                  <Link href={'/#contact'}>Aloqa</Link>
                </Box>
              </ListItem>
              <ListItem>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ToggleButtonGroup>
                    {Object.keys(langs).map((lng) => (
                      <ToggleButton
                        key={lng}
                        style={{
                          border:
                            i18n.resolvedLanguage === lng
                              ? '1px #000 solid'
                              : 'none',
                          color: '#000',
                        }}
                        value={lng}
                        type='submit'
                        onClick={() => i18n.changeLanguage(lng)}
                      >
                        {(langs as any)[lng].nativeName}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Box>
              </ListItem>
            </List>
          </Box>
        </SwipeableDrawer>
      </Box>
    );
  };

  //Large Screens
  const destroyDrawer = () => {
    return (
      <>
        <AppBar
          position='fixed'
          sx={{ bgcolor: 'primary.main' }}
          style={{ marginBottom: '50px' }}
        >
          <Toolbar id={'nav-toolbar'}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Box
                data-aos='fade-down'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Avatar alt={'logo namps'} src='/static/logo.png' />
                <Typography>NamPM</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  width: '75%',
                  alignItems: 'center',
                }}
              >
                <Box
                  data-aos='fade-down'
                  data-aos-delay='400'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <HomeIcon />
                  <Link href={'/#home'}>{t('navbar.home')}</Link>
                </Box>
                <Box
                  data-aos='fade-down'
                  data-aos-delay='500'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon />
                  <Link href={'/#about'}>{t('navbar.about')}</Link>
                </Box>
                <Box
                  data-aos='fade-down'
                  data-aos-delay='600'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ArticleIcon />
                  <Link href={'/#blog'}>Blog</Link>
                </Box>
                <Box
                  data-aos='fade-down'
                  data-aos-delay='700'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AssignmentIndIcon />
                  <Link href={'/#admission'}>{t('navbar.admission')}</Link>
                </Box>
                <Box
                  data-aos='fade-down'
                  data-aos-delay='800'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ContactsIcon />
                  <Link href={'/#contact'}>{t('navbar.contact')}</Link>
                </Box>
                <Box
                  data-aos='fade-down'
                  data-aos-delay='500'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ToggleButtonGroup>
                    {Object.keys(langs).map((lng) => (
                      <ToggleButton
                        key={lng}
                        style={{
                          border:
                            i18n.resolvedLanguage === lng
                              ? '1px #000 solid'
                              : 'none',
                          color: '#000',
                        }}
                        value={lng}
                        type='submit'
                        onClick={() => i18n.changeLanguage(lng)}
                      >
                        {(langs as any)[lng].nativeName}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </>
    );
  };
  return <div>{drawerActivate ? createDrawer() : destroyDrawer()}</div>;
};

export default Navbar;
