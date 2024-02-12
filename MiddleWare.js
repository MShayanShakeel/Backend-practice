module.exports = middleWareUser = (req , res , next ) => {
  if(!req.query.age){
    res.send("Pleace enter your age !")
  }
  else if(req.query.age <  18 ){
    res.send("You are under age !")
  } 
  else{
    next();
  }
}