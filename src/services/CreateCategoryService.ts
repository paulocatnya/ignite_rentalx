import {CategoriesRepository} from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    private categoriesRepository:CategoriesRepository
    
    constructor(categoriesRepository:CategoriesRepository){
        this.categoriesRepository = categoriesRepository
    }

    execute({name, description}:IRequest):void {
        const categoryExist = this.categoriesRepository.findByName(name);
        
        if (categoryExist) {
            throw new Error(`Category ${name} already exists`);
        }
        this.categoriesRepository.create({name, description});
    }
}

export {CreateCategoryService};
