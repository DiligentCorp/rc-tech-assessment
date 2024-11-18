// server.js
const qs = require('qs');
const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const VALID_VOTES = ['?', 1, 2, 3, 5, 8, 13];

server.get('/votes', async (req, res) => {
  const { storyId } = req.query;
  await router.db.read();
  const users = router.db.get('users').value();
  const story = router.db.get('stories').find({ id: storyId }).value();

  res.jsonp({
    data: users.map(user => {
      let i = Math.floor(Math.random() * VALID_VOTES.length);
      return {
        storyId: story.id,
        userId: user.id,
        vote: VALID_VOTES[i]
      }
    })
  })
})

server.delete('/stories/:id', async (req, res) => {
  const { id } = req.params;
  await router.db.read();
  router.db.get('stories').remove({ id: +id }).write();

  res.jsonp({ success: true })
})

router.render = (req, res) => {
  const params = qs.parse(req.originalUrl.split('?')[1], { ignoreQueryPrefix: true })
  const page = params._page || 1;
  const limit = params._limit || 5;

  res.jsonp({
    data: res.locals.data,
    total: res.locals.data.length,
    page_size: +limit, 
    page_number: +page
  })
}

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
