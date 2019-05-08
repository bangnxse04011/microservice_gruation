package com.msb.prouduct_getways.client;

import java.util.Arrays;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import com.msb.prouduct_getways.config.GetWaysConfig.SERVICE;

@Repository
public class RestClient {

	private final String SERVICE_LAPTOP = SERVICE.LAPTOP_SERVICE;
	private final String SERVICE_PHONE = SERVICE.PHONE_SERVICE;
	private HttpHeaders headers = new HttpHeaders();
	private RestTemplate restTemplate = new RestTemplate();

	/**
	 * Method send
	 * 
	 * @param topupRequest
	 * @return
	 */
	public String send(String chanel, HttpMethod httpMethod) {
		config();
		HttpEntity<Object> entity = new HttpEntity<Object>(headers);
		String SERVICE_CALL = SERVICE_PHONE;
		if (chanel.equals("laptop")) {
			SERVICE_CALL = SERVICE_LAPTOP;
		}
		return restTemplate.exchange(SERVICE_CALL, httpMethod, entity, String.class).getBody();
	}

	/**
	 * Method send
	 * 
	 * @param topupRequest
	 * @return
	 */
	public String findCategory(String chanel) {
		config();
		HttpEntity<Object> entity = new HttpEntity<Object>(headers);
		String SERVICE_CALL = SERVICE.PHONE_CATEGORY;
		if (chanel.equals("laptop")) {
			SERVICE_CALL = SERVICE.LAPTOP_CATEGORY;
		}
		return restTemplate.exchange(SERVICE_CALL, HttpMethod.GET, entity, String.class).getBody();
	}

	/**
	 * Method find by id
	 * 
	 * @param id
	 * @param category
	 * @param httpMethod
	 * @return
	 */
	public String findById(String id, String category, HttpMethod httpMethod) {
		config();
		HttpEntity<Object> entity = new HttpEntity<Object>(headers);
		String SERVICE_CALL = SERVICE_PHONE + id;
		if (category.equals("laptop")) {
			SERVICE_CALL = SERVICE_LAPTOP + id;
		}
		System.out.println(SERVICE_CALL);
		return restTemplate.exchange(SERVICE_CALL, httpMethod, entity, String.class).getBody();
	}

	/**
	 * Config header
	 */
	public void config() {
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	}

}
