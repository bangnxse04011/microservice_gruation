package com.msb.prouduct_getways.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.msb.prouduct_getways.client.RestClient;

@CrossOrigin(maxAge = 3600)
@Controller
@RequestMapping("v1/api")
public class GetWaysController {

	@Autowired
	private RestClient restClient;

	@RequestMapping(value = "/{chanel}")
	public ResponseEntity<Object> findAll(@PathVariable("chanel") String chanel) {
		return ResponseEntity.ok().body(restClient.send(chanel, HttpMethod.GET));
	}

	@RequestMapping(value = "/images/{name}", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
	public ResponseEntity<byte[]> getImage(@PathVariable("name") String name) throws IOException {
		ClassPathResource imgFile = new ClassPathResource("static/images/" + name);
		byte[] bytes = StreamUtils.copyToByteArray(imgFile.getInputStream());
		return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(bytes);
	}
}
