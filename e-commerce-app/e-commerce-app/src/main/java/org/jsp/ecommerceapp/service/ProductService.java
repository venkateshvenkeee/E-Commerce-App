package org.jsp.ecommerceapp.service;

import java.util.List;
import java.util.Optional;

import org.jsp.ecommerceapp.dao.MerchantDao;
import org.jsp.ecommerceapp.dao.ProductDao;
import org.jsp.ecommerceapp.dao.UserDao;
import org.jsp.ecommerceapp.dto.ResponseStructure;
import org.jsp.ecommerceapp.excepton.IdNotFoundException;
import org.jsp.ecommerceapp.excepton.ProductNotFoundException;
import org.jsp.ecommerceapp.model.Merchant;
import org.jsp.ecommerceapp.model.Product;
import org.jsp.ecommerceapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
	@Autowired
	private ProductDao productDao;
	@Autowired
	private MerchantDao merchantDao;
	@Autowired
	private UserDao userDao;

	public ResponseEntity<ResponseStructure<Product>> saveProduct(Product product, int merchant_id) {
		ResponseStructure<Product> structure = new ResponseStructure<>();
		Optional<Merchant> recMerch = merchantDao.findById(merchant_id);
		if (recMerch.isPresent()) {
			Merchant merchant = recMerch.get();
			merchant.getProducts().add(product);
			product.setMerchant(merchant);
			structure.setBody(productDao.saveProduct(product));
			structure.setMessage("product saved");
			structure.setStatusCode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseStructure<Product>>(structure, HttpStatus.CREATED);
		}
		throw new IdNotFoundException();

	}

	public ResponseEntity<ResponseStructure<Product>> updateProduct(Product product) {
		ResponseStructure<Product> structure = new ResponseStructure<>();
		Optional<Product> recProduct = productDao.findById(product.getId());
		if (recProduct.isPresent()) {
			Product product1 = recProduct.get();
			product1.setName(product.getName());
			product1.setCost(product.getCost());
			product1.setBrand(product.getBrand());
			product1.setCategory(product.getCategory());
			product1.setDescription(product.getDescription());
			product1.setImage_url(product.getImage_url());
			structure.setBody(productDao.saveProduct(product1));
			structure.setMessage("product saved");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Product>>(structure, HttpStatus.ACCEPTED);
		}
		throw new IdNotFoundException();
	}
	

	public ResponseEntity<ResponseStructure<Product>> fingById(int product_id) {
		ResponseStructure<Product> structure = new ResponseStructure<>();
		Optional<Product> recProduct = productDao.findById(product_id);
		if (recProduct.isPresent()) {
			structure.setBody(recProduct.get());
			structure.setMessage("product is found");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Product>>(structure, HttpStatus.OK);
		}
		throw new ProductNotFoundException("Id is Invalid");

	}

	public ResponseEntity<ResponseStructure<List<Product>>> findByBrand(String brand) {
		ResponseStructure<List<Product>> structure = new ResponseStructure<>();
		structure.setBody(productDao.findByBrand(brand));
		structure.setMessage("Product is found bt brand");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Product>>>(structure, HttpStatus.OK);
	}

	public ResponseEntity<ResponseStructure<List<Product>>> findByCategoryAndMerchantId(String category,int mercnat_id) {
		ResponseStructure<List<Product>> structure = new ResponseStructure<>();
		structure.setBody(productDao.findByCategoryAndMerchantId(category, mercnat_id));
		structure.setMessage("Product is found ");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Product>>>(structure, HttpStatus.OK);
	}
	
	public ResponseEntity<ResponseStructure<List<Product>>> findByCategory(String category) {
		ResponseStructure<List<Product>> structure = new ResponseStructure<>();
		structure.setBody(productDao.findByCategory(category));
		structure.setMessage("Product is found ");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Product>>>(structure, HttpStatus.OK);
	}

	public ResponseEntity<ResponseStructure<List<Product>>> findByMerchantId(int merchant_id) {
		ResponseStructure<List<Product>> structure = new ResponseStructure<>();
		Optional<Merchant> merchant1 = merchantDao.findById(merchant_id);
		if (merchant1.isEmpty()) {
			throw new IdNotFoundException();
		}
		structure.setBody(productDao.findByMerchantId(merchant_id));
		structure.setMessage("Product is found ");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Product>>>(structure, HttpStatus.OK);
	}

	public ResponseEntity<ResponseStructure<List<Product>>> findAll() {
		ResponseStructure<List<Product>> structure = new ResponseStructure<>();
		structure.setBody(productDao.findByAll());
		structure.setMessage("products found");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Product>>>(structure, HttpStatus.OK);

	}
	
	public ResponseEntity<ResponseStructure<String>> deleteById(int id) {
		ResponseStructure<String> structure=new ResponseStructure<>();
		if(productDao.deleteByid(id)) {
			structure.setBody("Product Found");
			structure.setMessage("Product Deleted");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.OK);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<String>> addToCart (int user_id,int product_id){
		Optional<Product> recProduct = productDao.findById(product_id);
		Optional<User> recUser = userDao.findById(user_id);
		if(recProduct.isEmpty() || recUser.isEmpty())
			throw new IllegalArgumentException("Invalid Product ID or User ID");
		
		recUser.get().getCart().add(recProduct.get());
		userDao.saveUser(recUser.get());
		ResponseStructure<String> structure = new ResponseStructure<>();
		structure.setBody("User and Product Found");
		structure.setMessage("Added Product to cart");
		structure.setStatusCode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.ACCEPTED);
	}
	public ResponseEntity<ResponseStructure<String>> addToWishList (int user_id,int product_id){
		Optional<Product> recProduct = productDao.findById(product_id);
		Optional<User> recUser = userDao.findById(user_id);
		if(recProduct.isEmpty() || recUser.isEmpty())
			throw new IllegalArgumentException("Invalid Product ID or User ID");
		
		recUser.get().getWishList().add(recProduct.get());
		userDao.saveUser(recUser.get());
		ResponseStructure<String> structure = new ResponseStructure<>();
		structure.setBody("User and Product Found");
		structure.setMessage("Added Product to Wishlist");
		structure.setStatusCode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.ACCEPTED);
}
}
