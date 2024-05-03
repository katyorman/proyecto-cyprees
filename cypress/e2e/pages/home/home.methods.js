import { HomeElements } from'./home.elements';

export class HomeMethods{
    static clickOnPhonesOption(){
        HomeElements.catergoriesMenu.Phones.click();
    }
    static clickOnLaptopsOption(){
        HomeElements.catergoriesMenu.Laptops.click();
    }
    static clickOnMonitorsOption(){
        HomeElements.catergoriesMenu.Monitors.click();
    }

    static clickOnProductLink(productName){
        HomeElements.product(productName).click();
    }

}