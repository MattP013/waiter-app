import {Request, Response} from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response){

  try{
    // const product = await Product.create({name, description, imagePath, price, ingredients, icon, category});
    const {name, description, price, category, ingredients} = req.body;
    const imagePath = req.file?.filename

const product = await Product.create({
                      name,
                      description,
                      price: Number(price),
                      category,
                      ingredients: ingredients ? JSON.parse(ingredients) : [],
                      imagePath
                    });
    res.status(201).json(product);
  }
  catch (error){
    console.log(error);
    res.sendStatus(500);
  }
}
