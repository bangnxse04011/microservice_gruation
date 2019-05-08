package com.msb.product.remote;

import java.util.List;

import com.msb.product.entity.Phone;

public interface IProduct {

	public List<Phone> findAllPhone();

	public List<Phone> findPhoneByID(Long id);

	public List<Phone> findPhoneByPhoneId(int id);

//	public List<Phone> findAllPhoneActive(int status);

}
