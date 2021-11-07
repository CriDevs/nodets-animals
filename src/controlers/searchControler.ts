import {Request, Response} from 'express';
import { Pet } from '../models/pet';
import { createObject } from '../helpers/MenuObject';

export const search = (req: Request, res:Response) =>{
    let query : string = req.query.q as string;

    if(!query){
        res.redirect('/home');
        return;
    }

    let list = Pet.getFromName(query)
    res.render('pages/page', {
        menu: createObject(''),
        list,
        query
    })
}