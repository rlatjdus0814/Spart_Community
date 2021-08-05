import React, { useEffect } from 'react';
import Post from '../components/Post';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list)

  useEffect(() => {
    if(post_list.length === 0){
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <React.Fragment>
      {post_list.map((props, idx) => {
        return <Post key={props.id} {...props} />
      })}
    </React.Fragment>
  );
}

export default PostList;