const movieModel = require("../models/moviesSchema");

module.exports.indexpage = async(req,res)=>{
    try {
        let data = await  movieModel.find({})
        return res.render('index',{data})
    } catch (error) {
        
        return res.render('index')
    }
}

module.exports.addMovie = (req,res)=>{
    return res.render('addMovie')
}

module.exports.homepage = (req,res)=>{
    return res.render('home')
}

module.exports.about = (req,res)=>{
    return res.render('about')
}
module.exports.createData = async (req,res)=> {
    try {
        await movieModel.create(req.body);
        return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}

module.exports.getmovieData = async (req,res)=>{
    try {
        let {movieId} = req.params
        let data = await movieModel.findById(movieId)
        return res.render('edit',{data})
    } catch (error) {
        console.log(error);
    }
}

module.exports.deleteData=  async (req,res)=>{
    try {
        let {movieId}=req.params
        await movieModel.findByIdAndDelete(movieId)
        return res.redirect('/')
    } catch (error) {
        console.log(error);
        return res.redirect('/')
    }
}

module.exports.updateData = async (req,res) => {
    try {
        let {movieId} = req.params
        
         await movieModel.findByIdAndUpdate(movieId,req.body)
        return res.redirect('/')
    } catch (error) {
        console.log(error);
        return res.render('/')
    }
}