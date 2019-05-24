
import {Restaurants} from '../../Mock'

export function getRestaurants(req,res,next){
    try{
        res.status(200).json({
            result:Restaurants,
        })
        return next()
    }catch(e){
        console.log('error in fetching restaurants  ', e)
        return res.status(500).json(e); 
    }
}