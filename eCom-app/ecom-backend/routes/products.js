const express = require('express');
//const {getAsync, setAsync} = require('../redis')
const { Product } = require('../mongo')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const products = await Product.find({})
  res.send(products);
});

/* POST todo to listing. */
/*
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  const value = await getAsync('todoCount');
  const nextValue = value ? Number(value) + 1 : 1;
  await setAsync('todoCount', nextValue);
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}
*/
/* DELETE todo. */
/*
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});
*/
/* GET todo. */
/*
singleRouter.get('/', async (req, res) => {
  const todo = req.todo
  res.send(todo)
});
*/
/* PUT todo. */
/*
singleRouter.put('/', async (req, res) => {
  const updatedTodo = {
    text: req.body.text,
    done: req.body.done
  }
  const todo = await Todo.findByIdAndUpdate(req.todo.id, updatedTodo, {new: true})
  res.send(todo)
  });

router.use('/:id', findByIdMiddleware, singleRouter)

*/
module.exports = router;
