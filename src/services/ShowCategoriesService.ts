import {CategoriesRepository} from "../repositories/CategoriesRepository";

class ShowCategoriesService {
    private categoriesRepository :CategoriesRepository;
    constructor(categoriesRepository:CategoriesRepository){
        this.categoriesRepository = categoriesRepository
    }
    
    execute() {       
        return this.categoriesRepository.findAll();
    }
}

export {ShowCategoriesService};
