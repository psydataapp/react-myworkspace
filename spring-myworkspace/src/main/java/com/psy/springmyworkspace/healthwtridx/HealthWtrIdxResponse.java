package com.psy.springmyworkspace.healthwtridx;

import java.util.List;

import lombok.Data;

@Data
public class HealthWtrIdxResponse {
	private Response response;

	@Data
	public class Response {
		private Body body;
	}

	@Data
	public class Body {
		private Items items;
	}

	@Data
	public class Items {
		private List<Item> item;
	}

	@Data
	public class Item {
		private String code;
		private String date;
		private String areaNo;
		private String today;
		private String tomorrow;
		private String theDayAfterTomorrow;
	}
}
