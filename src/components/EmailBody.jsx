import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedEmail } from '../redux/emailSlice';
import './styles.css'

const EmailBody = () => {
  const dispatch = useDispatch();
  const selectedEmail = useSelector(selectSelectedEmail);

  if (!selectedEmail) {
    return <div className='unselected'>Select an email to view.</div>;
  }


  return (
    <div className='email__body'>
      <div>{selectedEmail.subject}</div>
      <div>{selectedEmail.body}</div>
      <div>{selectedEmail.dateTime}</div>
      <button onClick={() => dispatch(markAsFavorite(selectedEmail.id))} style={{}}>Mark as Favorite</button>
    </div>
  );
};

export default EmailBody;
