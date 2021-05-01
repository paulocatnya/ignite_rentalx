import { Category } from "../model/Category";
import { CategoriesRepository } from "./CategoriesRepository";

interface ICategoriesRepository{
    findByName(name:string): Category{
        throw new Error('Method not implement')
    }

    findAll():Category[]{
        throw new Error('Method not implement')
    }

    create(name:string, description:string):void{
        throw new Error('Method not implement')
    }
}