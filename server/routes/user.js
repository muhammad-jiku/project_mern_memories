import express from 'express';
const router = express.Router();

import { googleSignIn, signin, signup } from '../controllers/user.js';

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/google-signin', googleSignIn);

export default router;
