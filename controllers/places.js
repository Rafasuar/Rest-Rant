const router = require('express').Router()


router.get('/',(req,res) => {
    let places = [{
        name: 'Rivas Tacos',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Mexican',
        pic: 'https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_auto,q_auto:low,fl_lossy,dpr_2.0,c_pad,f_auto,h_168/llpwwz7vjzwfp9ujxrbk'
    }]
    res.render('places/index', {places})
}),

router.get('/new',(req,res) => {
    res.render('places/new')
}),

// CREATE //
router.post('/', (req, res) => {
    console.log(req.body)
    // if (!req.body.pic) {
    //   // Default image if one is not provided
    //   req.body.pic = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fslice-of-bread-with-center-missing-gm522598875-51392774&psig=AOvVaw3jwuhKHQEVmWC98oZuT4Eu&ust=1664421094973000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCcv__BtvoCFQAAAAAdAAAAABAE'
    // }
    // if (!req.body.city) {
    //   req.body.city = 'Anytown'
    // }
    // if (!req.body.state) {
    //   req.body.state = 'USA'
    // }
    // places.push(req.body)
    res.redirect('/places')
  })


module.exports = router
