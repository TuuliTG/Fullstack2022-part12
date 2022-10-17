const express = require('express');
const {getAsync} = require('../redis')
const router = express.Router();

/* GET statistics. */
router.get('/', async (_, res) => {
    const count = await getAsync('todoCount')
    return res.json({"added_todos" : count || "0"})
});

module.exports = router;