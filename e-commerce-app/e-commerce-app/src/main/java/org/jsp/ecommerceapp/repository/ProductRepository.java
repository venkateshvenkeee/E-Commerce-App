package org.jsp.ecommerceapp.repository;

import java.util.List;

import org.jsp.ecommerceapp.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepository extends JpaRepository<Product,Integer>{
	@Query("select p from Product p where p.merchant.id=?1")
	public List<Product> findByMerchantId(int merchant_id);
	public List<Product> findByCategory(String category);
	public List<Product> findByBrand(String brand);
	public List<Product> findAll();
	public List<Product> findByCategoryAndMerchantId(String category,int merchant_id);
	public boolean deleteById(int id);

}
