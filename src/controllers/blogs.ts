import Blog from '@/models/Blog'
import { NextApiRequest, NextApiResponse } from 'next'

// Crear blog
const createBlog = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { title, content } = req.body
    if (!title || !content)
      return res.status(400).json({ error: 'Faltan datos Requeridos' })

    const blog = new Blog({ title, content })
    await blog.save()

    return res.status(201).json(blog)
  } catch (err) {
    return res.status(500).json({ error: 'Error al crear el Blog' })
  }
}

// Obtener todos los blog
const getAllBlogs = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const blogs = await Blog.find()

    return res.status(200).json(blogs)
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los Blogs' })
  }
}

// Obtener un blog
const getBlogById = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query
    console.log('IDDDDDDD', id)
    if (!id)
      return res.status(400).json({ error: 'ID de Blog no proporcionado' })

    const blog = await Blog.findById(id)
    if (!blog) return res.status(400).json({ error: 'Blog no encontrado' })

    return res.status(200).json(blog)
  } catch (err) {
    return res.status(500).json({ error: 'Error al obtener el Blog' })
  }
}

// Actualizar blog
const updateBlog = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query
    if (!id)
      return res.status(400).json({ error: 'ID de Blog no proporcionado' })

    const { title, content } = req.body
    if (!title || !content)
      return res.status(400).json({ error: 'Faltan datos Requiridos' })

    const blog = await Blog.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    )
    if (!blog) return res.status(400).json({ error: 'Blog no encontrado' })

    if (!blog) return res.status(400).json({ error: 'Blog no Encontrado' })

    return res.status(200).json(blog)
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar el Blog' })
  }
}

// Eliminar blog
const deleteBlog = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query
    if (!id)
      return res.status(400).json({ error: 'ID de Blog no proporcionado' })

    const blog = await Blog.findByIdAndDelete(id)
    if (!blog) return res.status(400).json({ error: 'Blog no Encontrado' })

    return res.status(200).json({ message: 'Blog eliminado' })
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar el Blog' })
  }
}

export { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog }
