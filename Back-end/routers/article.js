import express from 'express'
const router=express.Router()
import { createArticle, findAllArticles, findOneArticle, deleteOneArticle ,updateArticle} from '../controllers/article.js'

router.get('/read',findAllArticles)
router.get('/readOne',findOneArticle)
router.post('/create',createArticle)
router.delete('/deleteOne',deleteOneArticle)
router.put('/update',updateArticle)

export default router;


