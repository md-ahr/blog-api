import { Document, model, Schema } from 'mongoose';

interface IPost extends Document {
  title: string;
  body: string;
  author: Schema.Types.ObjectId;
  likes?: number;
  comments?: Schema.Types.ObjectId[];
  tags?: Schema.Types.ObjectId[];
  category?: Schema.Types.ObjectId;
  published: boolean;
}

const PostSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    likes: {
      type: number,
      default: 0,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

PostSchema.index({ tags: 1 });
PostSchema.index({ category: 1 });

const Post = model<IPost>('Post', PostSchema);

export default Post;
