import { Schema, Document, model, models } from 'mongoose'

interface BlogData {
  title: string
  content: string
}

interface BlogModel extends Document, BlogData {}

const blogSchema = new Schema<BlogModel>({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

const Blog = models.Blog || model<BlogModel>('Blog', blogSchema)

export default Blog
