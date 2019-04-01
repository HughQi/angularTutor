import {Component, NgModule} from '@angular/core';
import { Food } from '../../shared/food.model';

@Component({
  // select: '[app-server]',
  selector: 'app-cooking',
  templateUrl: './cooking.component.html', // you can put real html here
  styleUrls: ['./cooking.component.css']
})

export class CookingComponent {
    inputFood: string;
    foodName: string;
    inputFoodName: string[];
    isSearch = false;
    found = false;
    isEmpty = true;
    curFood: string[][] = [];
    foods: Food[];
    gingerChicken = ['ginger Chicken', 'ginger', 'onion', 'chicken'];
    bbqChicken = ['bbq Chicken', 'bbq', 'chicken'];
    bbqBeef = ['bbq Beef', 'bbq', 'beef'];
    bbqPork = ['bbq Pork', 'bbq', 'pork'];
    bbqRib = ['bbq Rib', 'bbq', 'rib'];
    gingerBeef = ['ginger Beef', 'ginger', 'onion', 'beef'];
    gingerPork = ['ginger Pork', 'ginger', 'onion', 'pork'];
    gingerRib = ['ginger Rib', 'ginger', 'onion', 'rib'];
    dishes = [this.gingerChicken, this.gingerRib, this.gingerBeef, this.gingerPork,
              this.bbqBeef, this.bbqChicken, this.bbqPork, this.bbqRib];

    check() {
      if (this.inputFood.trim() === '') {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }
      this.isSearch = false;
    }
    // food:
      // dishes = [this.gingerChicken, this.bbqChicken];
    searchFood() {
        this.inputFoodName = this.inputFood.trim().split(',');
        const inputList: string[] = this.inputFoodName;
        // 输入的菜名材料
        // 存储的菜品
        // const curChoose: string[] = [];
        // let index = 0;
        // this.dishes = this.curFood == null ? this.dishes : this.curFood;
        for (let j = 0; j < this.dishes.length; ++j) {
            const curSet = this.dishes[j];
            // 当前菜品和输入的菜名材料比较
            let cnt = 0;
            let i;
            // let hasFood = true;
            for (i of inputList) {
                if (curSet.includes(i)) {
                    // hasFood = false;
                  cnt++;
                }
            }
            // if (hasFood) {
            //   this.curFood[index] = curSet;
            //   // food = [new curSet];
            //   index++;
            // } // else {
            //   this.foodName = '';
            // }
            //
            if (cnt === curSet.length - 1) {
              this.foodName = curSet[0];
              break;
            } else {
              this.foodName = '';
            }
        }
        this.found = this.foodName !== '';
        console.log(this.inputFood, '******');
        // if (this.curFood == null) {
        //   this.foods = [new Food('')];
        // } else {
        //   // let index = 0;
        //   this.foods = Food[this.curFood.length];
        //   for (const i of this.curFood) {
        //     this.foods.push(new Food(i[0]));
        //   }
        // }
      this.isSearch = true;
    }

    reset() {
      this.isSearch = false;
      this.foodName = '';
      this.inputFoodName = null;
      this.inputFood = null;
      this.isEmpty = true;
    }
}





