import { Document, model, Schema } from 'mongoose';

interface IUser extends Document {
  name?: string;
  email: string;
  password: string;
  posts?: Schema.Types.ObjectId;
  comments?: Schema.Types.ObjectId;
  roles: string[];
  profile: {
    bio: string;
    avatar: string;
  };
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    roles: [
      {
        type: String,
        enum: ['user', 'editor', 'admin'],
        default: ['user'],
      },
    ],
    profile: {
      bio: {
        type: String,
        maxlength: 500,
      },
      avatar: {
        type: String,
      },
    },
  },
  { timestamps: true },
);

const User = model<IUser>('User', UserSchema);

export default User;
