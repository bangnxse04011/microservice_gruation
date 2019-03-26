package com.msb.product.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Phone")
public class Phone {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "p_name")
	private String phoneName;

	@Column(name = "p_id")
	private String phoneID;

	@Column(name = "images")
	private String phoneImages;

	@Column(name = "price")
	private double phonePrice;

	@Column(name = "p_info")
	private String phoneInfo;

	@Column(name = "p_category")
	private String phoneCategory;

	@Column(name = "create_date")
	private String createDate;

	@Column(name = "delete_date")
	private String deleteDate;

	@Column(name = "is_delete")
	private int isDelete;

	public Phone() {
		super();
	}

	public Phone(Long id, String phoneName, String phoneID, String phoneImages, double phonePrice, String phoneInfo,
			String phoneCategory, String createDate, String deleteDate, int isDelete) {
		super();
		this.id = id;
		this.phoneName = phoneName;
		this.phoneID = phoneID;
		this.phoneImages = phoneImages;
		this.phonePrice = phonePrice;
		this.phoneInfo = phoneInfo;
		this.phoneCategory = phoneCategory;
		this.createDate = createDate;
		this.deleteDate = deleteDate;
		this.isDelete = isDelete;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPhoneName() {
		return phoneName;
	}

	public void setPhoneName(String phoneName) {
		this.phoneName = phoneName;
	}

	public String getPhoneID() {
		return phoneID;
	}

	public void setPhoneID(String phoneID) {
		this.phoneID = phoneID;
	}

	public String getPhoneImages() {
		return phoneImages;
	}

	public void setPhoneImages(String phoneImages) {
		this.phoneImages = phoneImages;
	}

	public double getPhonePrice() {
		return phonePrice;
	}

	public void setPhonePrice(double phonePrice) {
		this.phonePrice = phonePrice;
	}

	public String getPhoneInfo() {
		return phoneInfo;
	}

	public void setPhoneInfo(String phoneInfo) {
		this.phoneInfo = phoneInfo;
	}

	public String getPhoneCategory() {
		return phoneCategory;
	}

	public void setPhoneCategory(String phoneCategory) {
		this.phoneCategory = phoneCategory;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	public String getDeleteDate() {
		return deleteDate;
	}

	public void setDeleteDate(String deleteDate) {
		this.deleteDate = deleteDate;
	}

	public int getIsDelete() {
		return isDelete;
	}

	public void setIsDelete(int isDelete) {
		this.isDelete = isDelete;
	}

}
