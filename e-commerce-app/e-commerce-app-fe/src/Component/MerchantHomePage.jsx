// import axios from "axios";
// import { useState } from "react";
// import {useNavigate, useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ProductView from "./ProductView";
import MerchantNavBar from "./MerchantNavBar";
import MerchantUpdate from "./MerchantUpdate";
import AddProducts from "./AddProducts";
import UpdateProduct from "./UpdateProduct";
const MerchantHomePage = () => {
   
   return (
      <div className="merchanthomepage">
         <MerchantNavBar />
         <Routes>
            <Route path="/productview" element={<ProductView />} />
            <Route path="/updatemerchant" element={<MerchantUpdate/>}/>
            <Route path="/addproduct" element={<AddProducts/>}/>
            <Route path="/updateproduct/:id" element={<UpdateProduct/>}/>
         </Routes>
      </div>
   );
}

export default MerchantHomePage;