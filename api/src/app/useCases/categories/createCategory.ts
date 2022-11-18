import {Request, Response} from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response){

  try{
    const {icon, name} = req.body;
    if (!name || !icon) {
        return res.status(400).json({
          error:'Há informações faltando'
        });
    }
    const category = await Category.create({icon,name});

    res.status(201).json(category);
  }
  catch (error){
    console.log(error);
    res.sendStatus(500);
  }
}
