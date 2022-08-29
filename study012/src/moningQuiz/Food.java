package moningQuiz;

import java.util.Scanner;

public class Food {
	String name;
	int price;
	int stock;



	Food(String name, int price){
		this.name= name;		//음식 이름 매개변수로 입력받아서 초기화
		this.price= price;		//음식 가격 매개변수로 입력받아서 초기화
		this.stock=10;			//음식 재고 초기화 (현재 10으로 초기화 -> 추후 수정예정)
	}

		void modifyStock(int q) {
			if((stock -q) < 0) {
				stock =0;
			}else {
				stock += q;
			}
		}
		//음식의 현재 정보 반환
	String getFoodInfo() {
		String str = name + ":" + price + "원 " + "재고:"+ stock;
		return str;
	}
}
