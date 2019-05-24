import {
    Router
} from 'express';
import * as FavouriteController from './favourite.controllers';

const routes = new Router();

routes.get('/', FavouriteController.getFavourites)
routes.delete('/:id', FavouriteController.deleteFavourites)
routes.put('/', FavouriteController.addFavourites)
// routes.delete('/:id',(req, res) => {        
//     res.send('This is a TEST route!!!!');
// })




export default routes;