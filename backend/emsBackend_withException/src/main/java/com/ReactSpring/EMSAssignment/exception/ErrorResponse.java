package com.ReactSpring.EMSAssignment.exception;

import java.time.LocalDateTime;

public class ErrorResponse {
	private String message;
	private int statusCode;
	private LocalDateTime timestamp;
	

	
	public ErrorResponse() {
		super();
	}
	public ErrorResponse(String message, int statusCode, LocalDateTime timestamp) {
		super();
		this.message = message;
		this.statusCode = statusCode;
		this.timestamp = timestamp;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public int getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	public synchronized LocalDateTime getTimestamp() {
		return timestamp;
	}
	public synchronized void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}
	
	

}
