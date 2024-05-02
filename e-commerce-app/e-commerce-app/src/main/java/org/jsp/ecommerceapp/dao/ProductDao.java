package org.jsp.ecommerceapp.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.ecommerceapp.model.Product;
import org.jsp.ecommerceapp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductDao {
	@Autowired
	private ProductRepository productRepository;
	
	public Product saveProduct(Product product) {
		return productRepository.save(product);
	}
	public Product updateProduct(Product product) {
		return productRepository.save(product);
	}
	public Optional<Product> findById(int product_id) {
		return productRepository.findById(product_id);
	}
	public List<Product> findByCategory(String category){
		return productRepository.findByCategory(category);
	}
	
	public List<Product> findByCategoryAndMerchantId(String category,int merchant_id){
		return productRepository.findByCategoryAndMerchantId(category, merchant_id);
	}
	public List<Product> findByBrand(String brand){
		return productRepository.findByBrand(brand);
	}
	public List<Product> findByAll(){
		return productRepository.findAll();
	}
	public List<Product> findByMerchantId(int merchant_id){
		return productRepository.findByMerchantId(merchant_id)
		;
	}
	
	public boolean deleteByid(int id) {
		Optional<Product> recProduct=productRepository.findById(id);
		if(recProduct.isPresent()) {
			productRepository.deleteById(id);
			return true;
		}else {
			return false;
		}
	}
	

}

