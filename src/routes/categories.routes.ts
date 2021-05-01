import {Router} from "express";
const categoriesRoutes = Router();

import {CreateCategoryService} from "../services/CreateCategoryService";
import {ShowCategoriesService} from "../services/ShowCategoriesService";
import {CategoriesRepository} from "../repositories/CategoriesRepository";

const categoriesRepository = new CategoriesRepository()



categoriesRoutes.post("/categories", (req, res) => {
    const {name, description} = req.body;
    const createCategoryService = new CreateCategoryService(categoriesRepository)

    const newCategory = {name, description}

    try {
        createCategoryService.execute(newCategory);
    } catch (err) {
        return res.status(400).send(err);
    }

    return res.status(201).json({message:'success', data:newCategory}).send();
});

categoriesRoutes.get("/categories", (req, res) => {
    const showCategoriesService = new ShowCategoriesService(categoriesRepository)
    const allCategories = showCategoriesService.execute();
    return res.status(200).send(allCategories);
});

export {categoriesRoutes};
