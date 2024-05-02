package org.jsp.ecommerceapp.repository;

import java.util.Optional;

import org.jsp.ecommerceapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {
	@Query("select u from User u where u.email=?1 and u.password=?2")
	public Optional<User> verifyUser(String email, String password);

	@Query("select u from User u where u.phone=?1 and u.password=?2")
	public Optional<User> verifyUser(long phone, String password);

	@Query("select u from User u where u.id=?1 and u.password=?2")
	public Optional<User> verifyUser(int id, String password);
}
