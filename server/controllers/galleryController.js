const {Gallery} = require('../models/models')
const ApiError= require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class GalleryController{
    async create(req,res, next){
        try {
            const { url } = req.files;
            let fileName = uuid.v4()+'.jpg'
            url.mv(path.resolve(__dirname, '..', 'static', fileName))
        
            const gallery = await Gallery.create({ url: fileName });
            return res.json(gallery)
          } catch (e) {
            next(ApiError.badRequest(e.message))
          }
    }

    async gelAll(req,res){
        let {limit, page} = req.query
        page = page || 1
        limit = limit||8
        let offset = page * limit - limit
        const gallery = await Gallery.findAndCountAll({limit, offset})
        return res.json(gallery)
    }

    async getOne(req,res){

    }
}

module.exports= new GalleryController