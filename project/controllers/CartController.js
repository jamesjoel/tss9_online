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
    var pagedata = { title : "My Cart", pagename : "cart/mycart" };
    res.render("layout", pagedata);
}




