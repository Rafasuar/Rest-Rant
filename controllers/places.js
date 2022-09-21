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
})


module.exports = router
