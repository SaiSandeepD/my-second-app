import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test Recipe","This is to see if the test recipe works","https://image.shutterstock.com/image-photo/blank-vintage-recipe-cooking-book-600w-504504346.jpg"),
    new Recipe("Test Recipe 2","This is a secomnd test recipe","https://sweetpeasandsaffron.com/wp-content/uploads/2018/07/7-easy-rice-recipes-HERO.jpg")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
