import { NextApiRequest, NextApiResponse } from 'next'
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} from '@/controllers/blogs'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  switch (method) {
    case 'POST':
      await createBlog(req, res)
      break
    case 'GET':
      // Usar diferentes rutas para obtener todos los blogs u obtener blog por ID
      if (req.query.id) {
        await getBlogById(req, res)
      } else {
        await getAllBlogs(req, res)
      }
      break
    case 'PUT':
      await updateBlog(req, res)
      break
    case 'DELETE':
      await deleteBlog(req, res)
      break
    default:
      res.status(405).json({ error: 'Método no permitido' })
      break
  }
}
