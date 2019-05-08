package com.msb.product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.msb.product.entity.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Long> {

	public List<Category> findAll();

}
