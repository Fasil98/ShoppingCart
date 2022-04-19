var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers')
/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"iphone11",
      category:"mobile",
      description:"good phone blah blah blah",
      image:""
    },
    {
      name:"samsung s20 ultra",
      category:"mobile",
      description:"good phone blah blah blah",
      image:"https://www.gizmochina.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Ultra.jpg"
    },
    {
      name:"iphone 13",
      category:"mobile",
      description:"good phone blah blah blah",
      image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000"
    },
    {
      name:"iphone 13 mini",
      category:"mobile",
      description:"good phone blah blah blah",
      image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-product-red-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907845000"
    }
  ]
  res.render('admin/view-products',{admin:true,products})
});
  router.get('/add-product',function(req,res){
    res.render('admin/add-product')
  })
router.post('/add-product',(req,res)=>{
  
  console.log(req.files.Image);
  productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.Image
    console.log("id ithan"+id);
    image.mv('./public/product-images/'+id+'.jpg' ,(err,done)=>{
      if(!err){
        res.render("admin/add-product")}
        else{
          console.log(err);
        }
      }
    )
    res.render("admin/add-product")
  })
})
module.exports = router;
