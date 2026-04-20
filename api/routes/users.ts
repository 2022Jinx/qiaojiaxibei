import express, { type Request, type Response, type NextFunction } from 'express'

interface User {
  id: number
  name: string
  email: string
}

let users: User[] = [
  { id: 1, name: '张三', email: 'zhangsan@example.com' },
  { id: 2, name: '李四', email: 'lisi@example.com' },
  { id: 3, name: '王五', email: 'wangwu@example.com' }
]

let nextId = 4

const router = express.Router()

// 获取所有用户
router.get('/', (req: Request, res: Response): void => {
  res.status(200).json(users)
})

// 获取指定用户
router.get('/:id', (req: Request, res: Response): void => {
  const id = parseInt(req.params.id)
  const user = users.find(u => u.id === id)
  
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
})

// 创建新用户
router.post('/', (req: Request, res: Response): void => {
  const { name, email } = req.body
  
  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required' })
    return
  }
  
  const newUser: User = {
    id: nextId++,
    name,
    email
  }
  
  users.push(newUser)
  res.status(201).json(newUser)
})

// 更新用户
router.put('/:id', (req: Request, res: Response): void => {
  const id = parseInt(req.params.id)
  const userIndex = users.findIndex(u => u.id === id)
  
  if (userIndex === -1) {
    res.status(404).json({ error: 'User not found' })
    return
  }
  
  const { name, email } = req.body
  const updatedUser = {
    ...users[userIndex],
    ...(name && { name }),
    ...(email && { email })
  }
  
  users[userIndex] = updatedUser
  res.status(200).json(updatedUser)
})

// 删除用户
router.delete('/:id', (req: Request, res: Response): void => {
  const id = parseInt(req.params.id)
  const userIndex = users.findIndex(u => u.id === id)
  
  if (userIndex === -1) {
    res.status(404).json({ error: 'User not found' })
    return
  }
  
  users.splice(userIndex, 1)
  res.status(200).json({ message: 'User deleted successfully' })
})

export default router