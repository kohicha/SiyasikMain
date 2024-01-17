const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const supabase = require('../config/supabase');
const {v4} = require('uuid')
const multer = require('multer');
const upload = multer();
const {isLoggedIn} = require('../middleware/checkAuth')

router.get('/admin', isLoggedIn, adminController.dashboard);

router.post('/admin', upload.single('productImage'), async (req, res, next) => {
    const { productName, productPrice, productDescription, productRating, productBrand, productCatalog} = req.body;
    const productImageFile = req.file
    const uuidv4 = v4()
    try {
        const {data, error} = await supabase
        .storage
        .from('images')
        .upload(`products/` + uuidv4, productImageFile.buffer ,{
            contentType: "image/png, image/jpg, image/jpeg"
        })

        if(error){
            console.log('Error!', error)
        }

        const { data:productData, error:productError } = await supabase
        .from('products')
        .insert(
            { 
                productName: productName,
                productPrice: productPrice,
                productDescription: productDescription,
                productRating: productRating, 
                productBrand: productBrand,
                productImageID: uuidv4,
                catalog: productCatalog
            }
        )
                
        if (productError) {
            console.log('Error! ', productError.message)
        }else{
            const{ data: products, error} = await supabase
            .from('products')
            .select('*')
            .eq('productImageID', uuidv4)
            let product = products[0]
            //res.redirect(`product/${product.product_id}`)
            res.redirect('back')
        }
    } catch (error) {
        console.error(error);
    }
  });
  

module.exports = router;