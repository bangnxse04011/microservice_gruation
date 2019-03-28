package com.msb.product.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "phone_details")
public class PhoneDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "p_id")
	private String phoneID;

	@Column(name = "phone_description")
	private String phoneDes;

	@Column(name = "phone_producer")
	private String phoneProducer;

	@Column(name = "quanlity")
	private double quanlity;

	@Column(name = "specifications")
	private String specifications;

	public PhoneDetails() {
		super();
	}

	public PhoneDetails(Long id, String phoneID, String phoneDes, String phoneProducer, double quanlity,
			String specifications) {
		super();
		this.id = id;
		this.phoneID = phoneID;
		this.phoneDes = phoneDes;
		this.phoneProducer = phoneProducer;
		this.quanlity = quanlity;
		this.specifications = specifications;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPhoneID() {
		return phoneID;
	}

	public void setPhoneID(String phoneID) {
		this.phoneID = phoneID;
	}

	public String getPhoneDes() {
		return phoneDes;
	}

	public void setPhoneDes(String phoneDes) {
		this.phoneDes = phoneDes;
	}

	public String getPhoneProducer() {
		return phoneProducer;
	}

	public void setPhoneProducer(String phoneProducer) {
		this.phoneProducer = phoneProducer;
	}

	public double getQuanlity() {
		return quanlity;
	}

	public void setQuanlity(double quanlity) {
		this.quanlity = quanlity;
	}

	public String getSpecifications() {
		return specifications;
	}

	public void setSpecifications(String specifications) {
		this.specifications = specifications;
	}

}
