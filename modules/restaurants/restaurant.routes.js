import {
    Router
} from 'express';
import * as RestaurantController from './restaurant.controllers';

const routes = new Router();

routes.get('/', RestaurantController.getRestaurants)

export default routes;