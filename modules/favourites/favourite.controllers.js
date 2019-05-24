
import {FavouriteRestaurants} from '../../Mock'

var FavouriteList = FavouriteRestaurants

export function getFavourites(req,res,next){
    try{
        res.status(200).json({
            result:FavouriteList,
        })
        return next()
    }catch(e){
        console.log('error in fetching restaurants  ', e)
        return res.status(500).json(e); 
    }
}

export function deleteFavourites(req,res,next){
    try{
        if(!req.params.id){
            throw 'restaurant id is missing'
        }
        let updatedList = FavouriteList.filter( val => val.id !== parseInt(req.params.id))
        FavouriteList = updatedList
        res.status(200).json({
            result:FavouriteList,
        })
        return next()
    }catch(e){
        console.log('error in deleting restaurants  ', e)
        return res.status(500).json(e); 
    }
}

export function addFavourites(req,res,next){
    try{

        console.log('addFavourites  ', req.body)
        if(Object.keys(req.body).length < 1 ){
            throw 'restaurant details are missing'
        }    
        if(req.body.forUpdate){
            let currFavouriteList = FavouriteList
            currFavouriteList.forEach( (val,i) =>{
                if(val.id === req.body.id){
                    let x =  req.body
                    delete req.body.forUpdate
                    FavouriteList[i] = Object.assign(val,x)
                }
            })
        }else{
            FavouriteList.unshift(req.body)
        } 
        
        res.status(200).json({
            result:FavouriteList,
        })
        return next()
    }catch(e){
        console.log('error in adding restaurants to favourites list ', e)
        return res.status(500).json(e); 
    }
}