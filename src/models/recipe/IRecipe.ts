export interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    tags: string[];
    instructions: string;
    userId: number;
}