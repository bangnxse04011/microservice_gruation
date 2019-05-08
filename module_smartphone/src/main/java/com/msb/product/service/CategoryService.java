package com.msb.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msb.product.entity.Category;
import com.msb.product.remote.ICategory;
import com.msb.product.repository.CategoryRepo;

@Service
public class CategoryService implements ICategory {

	@Autowired
	private CategoryRepo categoryRepo;

	@Override
	public List<Category> findAll() {
		return categoryRepo.findAll();
	}

}
