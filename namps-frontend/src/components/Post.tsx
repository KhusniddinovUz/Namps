import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { news } from '../data/dummyData';

interface RouteParams {
  id: string;
}

interface postInterface {
  id: Number;
  title: string;
  description: string;
  imgLink: string;
  text: string;
}

const Post: React.FC<RouteComponentProps<RouteParams>> = (props) => {
  const [post, setPost] = useState<postInterface>({
    id: 0,
    title: '',
    description: '',
    imgLink: '',
    text: 'Post Not Found',
  });
  useEffect(() => {
    const id = Number(props.match.params.id);
    const found = news.filter((item) => item.id === id)[0];
    setPost(found);
  }, [props.match.params]);
  return (
    <Box id='post' sx={{ bgcolor: 'primary.light', paddingBottom: '50px' }}>
      <Box width='50%' margin='auto'>
        <Typography sx={{ padding: '20px 0' }} textAlign='center' variant='h3'>
          {post.title}
        </Typography>
        <img
          alt='post'
          src={post.imgLink}
          style={{ margin: '20px auto', display: 'block' }}
          width='100%'
        />
        <Typography textAlign='left' variant='h5' sx={{ lineHeight: '1.7' }}>
          {post.text}
        </Typography>
      </Box>
    </Box>
  );
};

export default withRouter(Post);
