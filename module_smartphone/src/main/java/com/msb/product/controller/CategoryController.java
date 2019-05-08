package com.msb.product.controller;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.msb.product.entity.Category;
import com.msb.product.service.CategoryService;

@Controller
@RequestMapping("/v1/api/category")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	/**
	 * Method find all phone
	 * 
	 * @return
	 */
	@GET
	@Consumes(value = MediaType.APPLICATION_JSON)
	@RequestMapping(value = "/", produces = MediaType.APPLICATION_JSON)
	public ResponseEntity<List<Category>> findAllCategory() {
		System.out.println("findAllPhone");
		List<Category> dataCategory = categoryService.findAll();
		return ResponseEntity.ok().body(dataCategory);
	}
}
