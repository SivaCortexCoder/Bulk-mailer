import express from 'express'
import { sendingMail } from '../controllers/mailController.js'

const router = express.Router()

router.post('/sendmail',sendingMail)

export default router;