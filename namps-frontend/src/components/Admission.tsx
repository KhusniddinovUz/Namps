import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

const Admission: React.FC = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [t] = useTranslation();

  return (
    <Box id='admission'>
      <Box sx={{ bgcolor: 'primary.light' }} padding='60px 20px'>
        <Typography textAlign='center' variant='h3' gutterBottom>
          {t('admission.title1')}
        </Typography>
        <Typography textAlign='center' variant='h4' gutterBottom>
          {t('admission.title2')}
        </Typography>
        <Box>
          <List id='admission-list' sx={{ color: '#fff' }}>
            <ListItemButton
              sx={{
                marginBottom: !open1 ? '20px' : '0px',
              }}
              onClick={() => setOpen1((a) => !a)}
            >
              <ListItemText primary={t('admission.box1.title')} />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              sx={{ marginBottom: open1 ? '20px' : '0px' }}
              in={open1}
              timeout='auto'
              unmountOnExit
            >
              <List>
                <ListItem>1. {t('admission.box1.step1')}</ListItem>
                <ListItem>2. {t('admission.box1.step2')}</ListItem>
                <ListItem>3. {t('admission.box1.step3')}</ListItem>
                <ListItem>4. {t('admission.box1.step4')}</ListItem>
                <ListItem>5. {t('admission.box1.step5')}</ListItem>
              </List>
            </Collapse>
            <ListItemButton
              sx={{ marginBottom: !open2 ? '20px' : '0px' }}
              onClick={() => setOpen2((a) => !a)}
            >
              <ListItemText primary={t('admission.box2.title')} />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              sx={{ marginBottom: open2 ? '20px' : '0px' }}
              in={open2}
              timeout='auto'
              unmountOnExit
            >
              <List>
                <ListItem>1. {t('admission.box2.step1')}</ListItem>
                <ListItem>{t('admission.box2.step2')}</ListItem>
                <ListItem>2.1. {t('admission.box2.step3')}</ListItem>
                <ListItem>2.2. {t('admission.box2.step4')}</ListItem>
                <ListItem>2.3. {t('admission.box2.step5')}</ListItem>
              </List>
            </Collapse>
            <ListItemButton
              sx={{ marginBottom: !open3 ? '20px' : '0px' }}
              onClick={() => setOpen3((a) => !a)}
            >
              <ListItemText primary={t('admission.box3.title')} />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              sx={{ marginBottom: open3 ? '20px' : '0px' }}
              in={open3}
              timeout='auto'
              unmountOnExit
            >
              <Typography sx={{ padding: '10px' }}>
                {t('admission.box3.step1')}
              </Typography>
            </Collapse>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Admission;
