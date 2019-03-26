package com.msb.product.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.msb.product.entity.Phone;

@Repository
public interface PhoneRepo extends CrudRepository<Phone, Long> {

	public List<Phone> findAll();

	public List<Phone> findPhoneById(Long id);

//	@Query(value = "SELECT p.* FROM Phone p WHERE p.is_delete=:is_delete", nativeQuery = true)
//	public List<Phone> findPhoneByIsDelete(@Param("is_delete") int status);

}
