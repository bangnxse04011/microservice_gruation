package com.msb.product.controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.msb.product.entity.Phone;
import com.msb.product.service.PhoneService;

@Controller
@RequestMapping("product/v1/")
public class ProductController {

	@Autowired
	private PhoneService phoneService;

	/**
	 * Method find all phone
	 * 
	 * @return
	 */
	@GET
	@RequestMapping(value = "/", produces = MediaType.APPLICATION_JSON)
	public ResponseEntity<List<Phone>> findAllPhone() {
		List<Phone> dataPhone = phoneService.findAllPhone();
		return ResponseEntity.ok().body(dataPhone);
	}

	/**
	 * Method find phone by id
	 * 
	 * @return
	 */
	@GET
	@RequestMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON)
	public ResponseEntity<List<Phone>> findPhoneByID(@PathVariable("id") Long id) {
		List<Phone> dataPhone = phoneService.findPhoneByID(id);
		return ResponseEntity.ok().body(dataPhone);
	}

//	@GET
//	@RequestMapping(value = "/status/{status}", produces = MediaType.APPLICATION_JSON)
//	public ResponseEntity<List<Phone>> findAllPhoneByStatus(@PathVariable("status") int status) {
//		List<Phone> dataPhone = phoneService.findAllPhoneActive(status);
//		return ResponseEntity.ok().body(dataPhone);
//	}
}
