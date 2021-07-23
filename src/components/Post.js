import React from 'react';
import Grid from '../elements/Grid';
import Image from '../elements/Image';

const Post = (props) => {
  return (
      <React.Fragment>
        <Grid>
          <Grid is_flex>
            <Image shape='circle' src={props.src} />
          </Grid>
          <Grid padding='16px'>
            
          </Grid>
          <Grid>
            <Image shape='rectangle' src={props.src} />
          </Grid>
          <Grid padding='16px'>
            
          </Grid>
          <div>user profile / user name /insert_dt</div>
          <div>contents</div>
          <div>image</div>
        <div>comment cnt</div>
        </Grid>
      </React.Fragment>
  );
}
Post.defaultProps = {
  user_info: {
    user_name: 'mean0',
    user_profile: 'https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg',
  },
  image_url: 'https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg',
  contents: '고양이네요!',
  comment_cnt: 10,
  insert_dt: '2021-02-27 10:00:00',
};

export default Post;