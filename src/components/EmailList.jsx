import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmails, selectEmails } from '../redux/emailSlice';
import EmailListItem from './EmailListItem';

const EmailList = () => {
  const dispatch = useDispatch();
  const emails = useSelector(selectEmails);

  useEffect(() => {
    dispatch(fetchEmails());
  }, [dispatch]);

  console.log(emails)

  return (
    <div className="email__desk">
      {emails?.map((email) => (
        <EmailListItem key={email.id} email={email} />
      ))}
    </div>
  );
};

export default EmailList;
