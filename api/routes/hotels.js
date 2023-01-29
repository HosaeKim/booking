import express from 'express';
import {
   createHotel,
   deleteHotel,
   geteHotel,
   geteHotels,
   updateHotel,
} from '../controllers/hotel.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';
const router = express.Router();

//create
router.post('/', createHotel);

//update
router.put('/:id', updateHotel);
//delete

router.delete('/:id', deleteHotel);
//get

router.get('/:id', geteHotel);
//getall

router.get('/', geteHotels);
export default router;
