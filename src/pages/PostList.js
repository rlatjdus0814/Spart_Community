import React, { useEffect } from 'react';
import Post from '../components/Post';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import InfinityScroll from '../shared/InfinityScroll';

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);
  const is_loading = useSelector((state) => state.post.loading);
  const paging = useSelector((state) => state.post.paging);

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <React.Fragment>
      <InfinityScroll
        callNext={() => {
          console.log('next!');
          dispatch(postActions.getPostFB(paging.next));
        }}
        is_next={paging.next ? true : false}
        loading={is_loading}>
        {post_list.map((props, idx) => {
          if (props.user_id === user_info?.uid) {
            console.log(props.id);
            return <Post key={props.id} {...props} is_me />;
          } else {
            return <Post key={props.id} {...props} />;
          }
        })}
      </InfinityScroll>
      {/* <button
        onClick={() => {
          dispatch(postActions.getPostFB(paging.next));
        }}>
        추가 로드
      </button> */}
    </React.Fragment>
  );
};

export default PostList;
