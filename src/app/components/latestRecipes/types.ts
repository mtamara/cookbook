export enum RecipeCategoryEnum {
    MAIN_DISH = 'MAIN_DISH',
    SIDE_DISH = 'SIDE_DISH',
    DESSERT = 'DESSERT',
    PASTRY = 'PASTRY',
    DRINK = 'DRINK',
}

export enum ReceipeOriginEnum {
    SERBIA = 'SERBIA',
    BOLIVIA = 'BOLIVIA',
    CENTRAL_EUROPE = 'CENTRAL_EUROPE',
    THAILAND = 'THAILAND',
}

export interface LatestRecipeProps {
    imgSource: string;
    category: RecipeCategoryEnum;
    readMoreLink: string;
    titleId: string;
    origin?: string;
    teaserId: string;
}