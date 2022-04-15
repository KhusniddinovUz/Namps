import React, { useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { news } from '../data/dummyData';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1199, min: 900 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 899, min: 0 },
    items: 1,
  },
};

const Blog: React.FC = () => {
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/blog')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box id='blog'>
      <Box padding='60px 20px' sx={{ bgcolor: 'primary.dark' }}>
        <Typography textAlign='center' variant='h3' marginBottom='30px'>
          So'nggi Yangiliklar
        </Typography>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          infinite={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
          responsive={responsive}
          keyBoardControl={true}
          containerClass='carousel-container'
          itemClass='carousel-item-padding-40-px'
          removeArrowOnDeviceType={['tablet', 'mobile']}
        >
          {news.map((post) => (
            <Box
              key={uuidv4()}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '30px',
              }}
            >
              <Link sx={{ textDecoration: 'none' }} href={`/posts/${post.id}`}>
                <Card sx={{ maxWidth: 345, maxHeight: 450 }}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      height='200'
                      image={post.imgLink}
                      alt='green iguana'
                    />
                    <CardContent sx={{ padding: '5px 0' }}>
                      <Typography
                        sx={{ fontWeight: '800' }}
                        variant='h5'
                        color='text.secondary'
                        textAlign={'center'}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant='body1'
                        color='text.secondary'
                        textAlign='center'
                      >
                        {post.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Blog;
