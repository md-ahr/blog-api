import { Document, model, Schema } from 'mongoose';

interface ICategory extends Document {
  name: string;
  description?: string;
}

const CategorySchema = new Schema<ICategory>(
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

const Category = model<ICategory>('Category', CategorySchema);

export default Category;
