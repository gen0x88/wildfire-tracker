import React from "react";

export type category = {
    id: number;
    title: string;
  }

export type infoType = {
  id: string;
  title: string;
  description: string;
  link: string;
  categories: category[];
};

export const LocationInfo = ({ info }: { info: infoType }) => {
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li>ID: {info.id}</li>
        <li>Title: {info.title.replace(/\d+/g, '')}</li>
        <li>Description: {info.description}</li>
        <li>Link: <a href={info.link}>More Info</a></li>
        <li>Category: {info.categories.map((cat) => cat.title).join(", ")}</li>
      </ul>
    </div>
  );
};
