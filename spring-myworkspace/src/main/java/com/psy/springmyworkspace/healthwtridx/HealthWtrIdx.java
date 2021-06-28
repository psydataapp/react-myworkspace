package com.psy.springmyworkspace.healthwtridx;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@IdClass(HealthWtrIdxId.class)
public class HealthWtrIdx {
	@Id
	private String code;
	@Id
	private String date;
	@Id
	private String areaNo;

	private String today;
	private String tomorrow;
	private String theDayAfterTomorrow;

	public HealthWtrIdx(HealthWtrIdxResponse.Item item) {
		this.code = item.getCode();
		this.date = item.getDate();
		this.areaNo = item.getAreaNo();
		this.today = item.getToday();
		this.tomorrow = item.getTomorrow();
		this.theDayAfterTomorrow = item.getTheDayAfterTomorrow();
	}
}
