import restaurantRoutes from './restaurants/restaurant.routes';
import favouriteRoutes from './favourites/favourite.routes'

export default app => {
    app.use('/api/v1/restaurants', restaurantRoutes);
    app.use('/api/v1/favourites', favouriteRoutes); 
    app.get('/hello', (req, res) => {        
        res.send('This is a TEST route!!!!');
    });
};