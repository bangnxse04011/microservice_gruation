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
	private final String SERVICE_PHONE = SERVICE.LAPTOP_SERVICE;
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
		String SERVICE_CALL = SERVICE_LAPTOP;
		if (chanel.equals("phone")) {
			SERVICE_CALL = SERVICE_PHONE;
		}
		System.out.println("-------------------------------");
		System.out.println(SERVICE_CALL);
		String result = restTemplate.exchange(SERVICE_CALL, httpMethod, entity, String.class).getBody();
		return result;
	}

	/**
	 * Config header
	 */
	public void config() {
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	}

}
