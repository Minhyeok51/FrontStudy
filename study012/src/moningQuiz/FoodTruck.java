package moningQuiz;

import java.util.*;

public class FoodTruck {

	//필드
	List<Food> foodList;	//판매하는 음식 목록
	int totalSales; //총매출액
	boolean isOpened; //영업중 여부
	//생성자
	FoodTruck(){
		foodList = new ArrayList<Food>();
		totalSales = 0;
		isOpened = false;
		//마감될때까지 장사 계속 수행
	}

	//메소드
	void startSales() {//장사시작 (전체 프로세스 흐름 관리)
		//1.메뉴보기 2.주문하기 3.재고관리 4.마감
		System.out.println("푸드트럭 장사시작!");
		while(isOpened) {
			int mainMenu = getMainMenu();
			switch(mainMenu) {
			case 1:	//메뉴보기
				//foodList음식 목록 보여주기
				showFoodList();
				break;
			case 2://주문하기
				//어떤 메뉴를 주문할지 입력받아서 처리 (매출액 증가, 재고감소)
				//메뉴보여주기
				showFoodList();
				//주문하기(입력받아서 처리)
				orderMenu();
				break;
			case 3://재고관리
				//어떤 메뉴 재고관리 하지 + 수량 몇개 조정(선택한 메뉴의 재고(Food.stock) 조정)
				break;
			case 4://마감
				//각 음식 메뉴별 폐기로 인한 손해금액 계산(남은재고*가격*0.3)
				//전체매출액 - 손해금액 = 매출액
				//마감
				System.out.println("푸드트럭 마감합니다.");
				isOpened = false;
				break;
			}
		}
	}

	//메인 메뉴들 중에 메뉴를 선택받아서 선택한 메뉴번호를 반환
	//1.메뉴보기 2.주문하기 3.재고관리 4.마감
	int getMainMenu() {

		Scanner scan = new Scanner(System.in);
		int menu;
		while(true) {
			System.out.println("1.메뉴보기 2.주문하기 3.재고관리 4.마감");
			System.out.println("메뉴를 선택하세요:");
			menu = scan.nextInt();
			if(menu >=1 && menu<=4) {
				break;
			}else {
				System.out.println("보기중에 선택하세요");
			}
		}
		return menu;
	}

	void addMenu(String name, int price) {
		Food food = new Food(name, price);
		foodList.add(food);
	}		

	void showFoodList() {	//판매중인 음식리스트 보여주기
		int num =1;
		for(Food food : foodList) {
			System.out.println("메뉴번호 "+ num++ +". " + food.getFoodInfo());

		}
	}
	void orderMenu() {//주문 받아서 처리
		//주문 입력받고
		Scanner scan = new Scanner(System.in);
		System.out.println("메뉴를 선택하세요:");
		int menu = scan.nextInt();
		
		//재고량 있어야 주문가능
		
		//입력 1-> 인덱스는 0 (입력받은 숫자 -1)
		//매출액 늘리고
		 this.totalSales += foodList.get(menu-1).price;
		//재고량 줄이고
		 foodList.get(menu-1).modifyStock(-1);

	}
}
