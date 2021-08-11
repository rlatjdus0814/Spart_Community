import React, { useCallback, useEffect } from 'react';
import _ from 'lodash';

const InfinityScroll = (props) => {
  const { children, callNext, is_next, loading } = props;

  const _handleScroll = _.throttle(() => {
    if(loading){
      return;
    }
    callNext();
  }, 300);

  const handleScroll = useCallback(_handleScroll, [loading]);

  useEffect(() => {
    if(loading){
      return;
    }
    
    if(is_next){
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
    return window.removeEventListener('scroll', handleScroll);
  },[is_next, loading]);

  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
InfinityScroll.defaultProps = {
  children: null,
  callNext: () => {},
  is_next: false,
  loading: false,
}

export default InfinityScroll;
