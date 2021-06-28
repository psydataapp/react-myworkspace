package opendata.dust;

import org.springframework.stereotype.Service;

@Service
public class DustHourlyService {
	@Scheduled(fixeRate = 1000*60*30)
	public void requestDustHourlyData() {
		System.out.println("--½ÇÇà--");
		getDustHourlyData("PM10");
	private void getDustHourlyData(String itemCode) {
		
	}
		
	}
}
