import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../elements';
import { storage } from './Firebase';
import { actionCreators as imageActions } from '../redux/modules/image';

const Upload = (props) => {
  const dispatch = useDispatch();
  const fileInput = useRef();
  const is_uploading = useSelector(state => state.image.uploading);
  
  const selectFile = (e) => {
    console.log(e);
    console.log(e.target)
    console.log(e.target.files[0])
    console.log(fileInput.current.files[0])

    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      console.log(reader.result)
      dispatch(imageActions.setPreview(reader.result));
    }
  }

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    const _upload = storage.ref(`images/${image.name}`).put(image);

    _upload.then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url) => {
        console.log(url)
      })
    })
  }

  return(
    <React.Fragment>
      <input type='file' onChange={selectFile} ref={fileInput} disabled={is_uploading} />
      <Button _onClick={uploadFB} height={30}>업로드하기</Button>
    </React.Fragment>
  )
}

export default Upload;