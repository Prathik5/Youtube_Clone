import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { COMMENTS_API } from "../Utils/constants";

const commentData = [
  {
    name: "Prathik Prakash",
    comment: "Very nice video. Keep it up",
    reply: [],
  },
  {
    name: "Karthik",
    comment: "Very nice. Love from America",
    reply: [
      {
        name: "James",
        comment: "Love from Antartica",
        reply: [],
      },
      {
        name: "Johnathan",
        comment: "Love From Mars",
        reply: [],
      },
    ],
  },
  {
    name: "Dixit",
    comment: "Haha very funny lol",
    reply: [],
  },
  {
    name: "Priya",
    comment: "Whatsapp number 9393473471",
    reply: [
      {
        name: "Ramesh",
        comment: "Love you dear",
        reply: [
          {
            name: "SomeUser2",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorem repellendus. Iusto, eligendi accusamus ipsa eaque inventore quasi dolorem vel quae quis adipisci fugit tempora aliquam qui laboriosam quia dignissimos!",
            reply: [],
          },
          {
            name: "SomeUser2",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorem repellendus. Iusto, eligendi accusamus ipsa eaque inventore quasi dolorem vel quae quis adipisci fugit tempora aliquam qui laboriosam quia dignissimos!",
            reply: [],
          },
        ],
      },
      {
        name: "SomeUser2",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorem repellendus. Iusto, eligendi accusamus ipsa eaque inventore quasi dolorem vel quae quis adipisci fugit tempora aliquam qui laboriosam quia dignissimos!",
        reply: [],
      },
    ],
  },
  {
    name: "SomeUser4",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorem repellendus. Iusto, eligendi accusamus ipsa eaque inventore quasi dolorem vel quae quis adipisci fugit tempora aliquam qui laboriosam quia dignissimos!",
    reply: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div className="w-3/4">
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5 ">
        <CommentsList comments={comment.reply} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2 m-2">
      <h1 className="font-bold">Comments: </h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
