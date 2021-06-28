package com.psy.springmyworkspace.healthwtridx;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HealthWtrIdxId implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1743176488971107945L;
	private String date;
	private String code;
	private String areaNo;
}
