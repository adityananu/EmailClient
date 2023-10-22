import React from "react";
import { useDispatch } from "react-redux";
import { markAsFavorite, fetchEmailBody } from "../redux/emailSlice";
import "./styles.css";

const EmailListItem = ({ email }) => {
  const dispatch = useDispatch();

  const handleEmailClick = () => {
    dispatch(fetchEmailBody(email.id));
  };

  const handleFavoriteClick = () => {
    dispatch(markAsFavorite(email.id));
  };

  function formatDate(timestamp) {
    const date = new Date(parseInt(timestamp, 10));
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const formattedDate = formatDate(email.date);

  return (
    <div className="email__list">
      <div onClick={handleEmailClick}>
        <div className="list__email">From: {email.from.email}</div>
        <div className="list__subject">Subject: {email.subject}</div>
        <div className="list__description">{email.short_description}</div>
        <div>Date: {formattedDate}</div>
        <div onClick={handleFavoriteClick} className="fav__btn">
          Favorite
        </div>
      </div>
    </div>
  );
};

export default EmailListItem;
