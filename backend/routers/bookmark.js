import { Router } from 'express';
import { saveBookmarkController, unsaveBookmarkController } from '../controllers/bookmark.js';

const bookmarkRouter = Router();

bookmarkRouter.post('/save', async (req, res) => saveBookmarkController(req, res));
bookmarkRouter.post('/unsave', async (req, res) => unsaveBookmarkController(req, res));

export default bookmarkRouter