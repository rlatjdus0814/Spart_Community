import React, { useEffect } from 'react';
import Post from '../components/Post';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);
  console.log(post_list)

  useEffect(() => {
    if(post_list.length === 0){
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <React.Fragment>
      {post_list.map((props, idx) => {
        console.log(props)
        console.log(user_info?.uid)
        if(user_info && props.user_id === user_info?.uid){
          return <Post key={props.id} {...props} is_me />
        } else {
          return <Post key={props.id} {...props} />
        }
      })}
    </React.Fragment>
  );
}

export default PostList;