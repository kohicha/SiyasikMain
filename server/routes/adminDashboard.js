const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const supabase = require('../config/supabase');

router.get('/admin', adminController.dashboard);

router.post('/admin', async (req, res) => {
    const { productName, productPrice, productDescription, productRating, productBrand} = req.body;
  
    try {
        const { data, error } = await supabase
        .from('products')
        .insert(
            { 
                productName: productName,
                productPrice: productPrice,
                productDescription: productDescription,
                productRating: productRating, 
                productBrand: productBrand
            }
        )
                
        if (error) {
            throw error;
        }

        // Return the inserted data
        res.send("successfully uploaded!")
    } catch (error) {
        console.error(error);
    }
  });
  

module.exports = router;