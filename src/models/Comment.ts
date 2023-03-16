import { Document, model, Schema } from 'mongoose';

interface IComment extends Document {
  postId: string;
  parentCommentId?: string;
  author: string;
  email: string;
  content: string;
}

const CommentSchema: Schema = new Schema<IComment>(
  {
    postId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    parentCommentId: {
      type: Schema.Types.ObjectId,
    },
    author: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Comment = model<IComment>('Comment', CommentSchema);

export default Comment;
