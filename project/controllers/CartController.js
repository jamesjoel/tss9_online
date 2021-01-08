var ProductModel = require("../models/ProductModel");

exports.add = (req, res)=>{
    // console.log(req.params);
    var id = req.params.id; // 25256
    if(req.cookies.cart)
    {
        // we can not store array or object in the cookie, its store only string
        var oldid = req.cookies.cart; //1115
        var joinid = oldid+"#"+id; // 1115#25256
        res.cookie("cart", joinid, { expires : new Date(Date.now()+(60*60*24*1000)), httpOnly : true});

    }
    else
    {

        res.cookie("cart", id, { expires : new Date(Date.now()+(60*60*24*1000)), httpOnly : true});
    }
    // req.flash("cookiemsg", "The Product Added to Your Cart");
    res.redirect("/");
}

exports.mycart = (req, res)=>{
    var cartstr = req.cookies.cart; // 1500#6301#8754
    var cartarr = cartstr.split("#"); // [1500, 6301, 8754]
    
    var arr=[];
    // arr.push("red");

    cartarr.forEach((x)=>{
        var obj = { _id : x };
        arr.push(obj);
    })
    
    //console.log(arr);



    ProductModel.find({ $or : arr}).exec((err, result)=>{
        // console.log("-------------", result);
        var pagedata = { title : "My Cart", pagename : "cart/mycart" , result : result};
        res.render("layout", pagedata);
    })

}

exports.remove=(req, res)=>{
    var id = req.params.id; // 123
    // console.log("---------", id);
    var cartstr = req.cookies.cart; // 1500#123#8754#6547
    var cartarr = cartstr.split("#"); // [1500, 123, 8754, 6547]
    // console.log("********************", cartarr);
    var n = cartarr.indexOf(id); // 1

    cartarr.splice(n, 1); // [1500, 8754, 6547]

    // console.log(cartarr);

    var newstr = cartarr.join("#");
    res.cookie("cart", newstr, { expires : new Date(Date.now()+(60*60*24*1000)), httpOnly : true});
    res.redirect("/cart/mycart");
    // console.log(newstr);

    // ["red", "green", "blue", "yellow", "pink"]
    // arr.indexOf("blue")--- 2

    // app.splice(17, 3)


}

exports.clearcart = (req, res)=>{
    res.clearCookie("cart");
    res.redirect("/");
}
/*

    [6542, 5201, 7845]

    .find({
        $or : 
            [
                {
                    _id : 6542
                },
                {
                    _id : 5201
                },
                {
                    _id : 7845
                }
            ]
    })





*/



