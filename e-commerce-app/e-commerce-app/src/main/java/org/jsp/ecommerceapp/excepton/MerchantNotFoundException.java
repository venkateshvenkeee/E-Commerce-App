package org.jsp.ecommerceapp.excepton;

public class MerchantNotFoundException extends RuntimeException {

	public MerchantNotFoundException(String message) {
		super(message);
	}
}
