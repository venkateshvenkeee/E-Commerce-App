package org.jsp.ecommerceapp.repository;

import java.util.List;

import org.jsp.ecommerceapp.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AddressRepository extends JpaRepository<Address, Integer> {

	public List<Address> findByUserId(int user_id);
	


}
