package org.jsp.ecommerceapp.excepton;

public class IdNotFoundException extends RuntimeException {
	@Override
	public String getMessage() {
		return "Invalid Id";

	}

}
