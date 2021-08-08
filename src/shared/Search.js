import React, { useCallback, useState } from 'react';
import _ from 'lodash';

const Search = () => {
  const [text, setText] = useState('');

  const debounce = _.debounce((e) => {
    console.log(e.target.value)
  }, 1000) 

  const throttle = _.throttle((e) => {
    console.log(e.target.value)
  }, 1000)

  const keyPress = useCallback(debounce, []);

  const onChange = (e) => {
    setText(e.target.value);
    keyPress(e);
  }

  return(
    <div>
      <input type='text' onChange={onChange} />
    </div>
  )
}

export default Search;