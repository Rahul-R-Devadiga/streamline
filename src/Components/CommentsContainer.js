import React from "react";

const commentsData = [
  {
    name: "sample name",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident commodi iure dicta fugit.",
    replies: [],
  },
  {
    name: "sample name",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident commodi iure dicta fugit.",
    replies: [
      {
        name: "sample name",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident commodi iure dicta fugit.",
        replies: [
          {
            name: "sample name",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident commodi iure dicta fugit.",
            replies: [
              {
                name: "sample name",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident commodi iure dicta fugit.",
                replies: [],
              },
            ],
          },
          {
            name: "sample name",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident commodi iure dicta fugit.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "sample name",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident commodi iure dicta fugit.",
    replies: [],
  },
  {
    name: "sample name",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident commodi iure dicta fugit.",
    replies: [],
  },
  {
    name: "sample name",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident commodi iure dicta fugit.",
    replies: [],
  },
  {
    name: "sample name",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident commodi iure dicta fugit.",
    replies: [],
  },
  {
    name: "sample name",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident commodi iure dicta fugit.",
    replies: [],
  },
  {
    name: "sample name",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident commodi iure dicta fugit.",
    replies: [],
  },
  {
    name: "sample name",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident commodi iure dicta fugit.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg m-2">
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        alt="profile-id"
        className="w-10 h-6"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div>
          <Comment key={index} data={comment} />
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
