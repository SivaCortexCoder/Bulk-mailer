import express from 'express'
import { Router } from 'express'
import { addDetail } from '../controllers/adminController.js'

const admin = Router()

admin.post('/admin',addDetail)

export default admin;