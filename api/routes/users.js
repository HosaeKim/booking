import express from 'express';
import {
   deleteUser,
   geteUser,
   geteUsers,
   updateUser,
} from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//    res.send('Your are login in');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//    res.send('Your are login in and you can delete your account');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//    res.send('Your are login in with admin');
// });
router.put('/:id', verifyUser, updateUser);
//delete

router.delete('/:id', verifyUser, deleteUser);
//get

router.get('/:id', verifyUser, geteUser);
//getall

router.get('/', verifyAdmin, geteUsers);

export default router;
