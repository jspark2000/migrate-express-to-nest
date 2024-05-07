import * as db from './repository.js'

export const registerRoutes = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/posts', (req, res) => {
    const posts = db.findManyPosts()

    res.send(posts)
  })

  app.get('/posts/:postId', (req, res) => {
    const postId = parseInt(req.params.postId, 10)
    const post = db.findOnePost(postId)

    res.send(post)
  })

  app.post('/posts', (req, res) => {
    const post = db.createPost(req.body)

    res.send(post)
  })

  app.put('/posts/:postId', (req, res) => {
    const postId = parseInt(req.params.postId, 10)
    const post = db.updatePost(postId, req.body)

    res.send(post)
  })

  app.delete('/posts/:postId', (req, res) => {
    const postId = parseInt(req.params.postId, 10)
    const post = db.deletePost(postId)

    res.send(post)
  })
}
