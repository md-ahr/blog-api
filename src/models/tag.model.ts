import { Document, model, Schema } from 'mongoose';

interface ITag extends Document {
  name: string;
  description?: string;
}

const TagSchema = new Schema<ITag>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true },
);

const Tag = model<ITag>('Tag', TagSchema);

export default Tag;
