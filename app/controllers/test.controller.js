

exports.postMethod = (req,res)=>{
    res.send("Post Method is working");
}

exports.putMethod = (req,res)=>{
    res.send("Put Method is working");
}

exports.deleteMethod = (req,res)=>{
    res.send("Delete Method is working");
}

exports.dataBody = (req,res)=>{
    res.send(req.body);
}

exports.dataParams = (req,res)=>{
    res.send(req.params);
}

exports.dataQuery = (req,res)=>{
    res.send(req.query);
}

exports.sample = (req,res)=>{
    res.render("sample");
}

exports.dynamic = (req,res)=>{
    res.render("dynamic",{message:"Welcome to Dynamic Ejs"});
}

exports.form =(req,res)=>{
    res.render("form");
}

exports.result = (req,res)=>{
    res.render("result",req.body);
}