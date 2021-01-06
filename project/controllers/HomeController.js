var ProductModel = require("../models/ProductModel");
exports.index = (req, res)=>{

    console.log("--------", req.cookies);
    ProductModel.find({}).exec((err, result)=>{

        var pagedata = { title : "Home Page", pagename : "home/index", result : result};
        res.render("layout", pagedata);
    })

}

exports.category = (req, res)=>{
    // console.log(req.params);
    var id = req.params.id;
    ProductModel.find({ category : id }).exec((err, result)=>{

        var pagedata = { title : "Home Page", pagename : "home/index", result : result};
        res.render("layout", pagedata);
    })
}