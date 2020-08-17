import * as express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import {Users} from '../db/Users'

const router = express.Router();

process.env.SECRET_KEY = 'secret'

router.use(bodyParser.json());

router.use(cors({ origin: '*' }));


router.post('/register', (req, res) => {
  const {name, email, password} = req.body.user;
  bcrypt.hash(password, 10, (err, hash) => {
    Users.create({name, email, password:hash}).then(
      res.send('Reg')
    )
  })
})
    

router.post('/login', (req, res) => {
  Users.findOne({
    where: {
      email: req.body.user.email
    }
  })
  .then(user => {
    if (user) {
      if (bcrypt.compareSync(req.body.user.password, user.password)) {
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.send(token)
      }
    } else {
      res.status(400).json({ error: 'User does not exist' })
    }
  })
  .catch(err => {
    res.status(400).json({ error: err })
  })
})

router.get('/users', (req, res) => {
  Users.findAll({
    attributes: { exclude: ['password'] }
  }).then(users => {
    res.send(users);
  })

});

/*router.get('/block', function (req,res){
  Users.update({ status: false }, {
    where: {
      email: req.body.user.email
    }
  }).then((res) => {
    console.log(res);
  });
})*/

export default router;