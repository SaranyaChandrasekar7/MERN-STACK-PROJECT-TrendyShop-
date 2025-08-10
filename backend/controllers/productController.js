import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

   const images = [image1, image2, image3, image4].filter(item => item && item.path);


const imagesUrl = await Promise.all(
  images.map(async (item) => {
    const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
    return result.secure_url;
  })
); 



    let parsedSizes;
    try {
      parsedSizes = JSON.parse(sizes);
    } catch {
      parsedSizes = [sizes]; // fallback for single size
    }

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
     bestSellers: bestseller === "true" ? true : false,
      sizes: parsedSizes,
      image: imagesUrl,
      date: Date.now()
    };

    const product = new productModel(productData);
    const savedProduct = await product.save(); // ✅ Save to MongoDB

//     // ✅ Final response — this sends back product including image URLs
    res.json({
      success: true,
      message: "Product Added",
      product: savedProduct
    });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// //function for list product
const listProducts = async (req,res) => {
    try{
         const products = await productModel.find({});
         res.json({success:true,products})
    }
    catch(error){
        console.log(error);
    res.json({ success: false, message: error.message });
    }
}

// //function for removing product
const removeProduct = async (req,res) => {
   try{
     await productModel.findByIdAndDelete(req.body.id)
     res.json({ success: true, message:"product Removed"})
   }
   catch (error) {
console.log(error);
    res.json({ success: false, message: error.message });
   }
}

// //function for single product info
const singleProduct = async (req,res) => {
  try{
    const {productId} = req.body
    // const { productId } = req.params;
    const product = await productModel.findById(productId)
    res.json({success:true,product})
  }
  catch(error){
    console.log(error)
    res.json({ success: false, message: error.message})
  }
}

const bulkInsertProducts = async (req, res) => {
  try {
    const products = await productModel.insertMany(req.body);
    res.json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



export {listProducts,addProduct,removeProduct,singleProduct,bulkInsertProducts}