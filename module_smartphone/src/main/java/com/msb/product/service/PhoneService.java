package com.msb.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msb.product.entity.Phone;
import com.msb.product.remote.IProduct;
import com.msb.product.repository.PhoneRepo;

@Service
public class PhoneService implements IProduct {

	@Autowired
	private PhoneRepo phoneRepo;

	@Override
	public List<Phone> findAllPhone() {
		return phoneRepo.findAll();
	}

	@Override
	public List<Phone> findPhoneByID(Long id) {
		return phoneRepo.findPhoneById(id);
	}

	@Override
	public List<Phone> findPhoneByPhoneId(String pId) {
		return phoneRepo.findPhoneByPhoneID(pId);
	}

//	@Override
//	public List<Phone> findAllPhoneActive(int status) {
//		return phoneRepo.findPhoneByIsDelete(status);
//	}

}
