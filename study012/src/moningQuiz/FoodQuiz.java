package moningQuiz;

import java.util.Scanner;

public class FoodQuiz {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		FoodTruck ft = new FoodTruck();
				
		System.out.println("메뉴보기");
		ft.addMenu("김밥", 3000);
		ft.addMenu("참치김밥", 4000);
		ft.addMenu("불고기김밥", 4500);
		ft.showFoodList();
		Scanner scan = new Scanner(System.in);
		System.out.print("주문하려는 메뉴 번호를 선택하세요:");
		int menuChoice = scan.nextInt();
		System.out.println(menuChoice);
		
		System.out.println(ft.foodList.get(menuChoice-1).price+"원 입니다.");
		System.out.println(ft.foodList.get(menuChoice-1).name);
		System.out.println(ft.foodList.get(menuChoice-1).stock+"개 남았습니다");
		
		
		
		
		
				
	}

}
