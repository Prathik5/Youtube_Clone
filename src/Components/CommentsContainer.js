import React from "react";
import Comment from "./Comment";

const commentData = [
  {
    name: "SomeUser",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorem repellendus. Iusto, eligendi accusamus ipsa eaque inventore quasi dolorem vel quae quis adipisci fugit tempora aliquam qui laboriosam quia dignissimos!",
    reply: [],
  },
  {
    name: "SomeUser1",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorem repellendus. Iusto, eligendi accusamus ipsa eaque inventore quasi dolorem vel quae quis adipisci fugit tempora aliquam qui laboriosam quia dignissimos!",
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
  {
    name: "SomeUser3",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorem repellendus. Iusto, eligendi accusamus ipsa eaque inventore quasi dolorem vel quae quis adipisci fugit tempora aliquam qui laboriosam quia dignissimos!",
    reply: [
      {
        name: "SomeUser2",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorem repellendus. Iusto, eligendi accusamus ipsa eaque inventore quasi dolorem vel quae quis adipisci fugit tempora aliquam qui laboriosam quia dignissimos!",
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
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
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
