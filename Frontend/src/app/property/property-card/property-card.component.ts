// angular component is a typescript class with @component decarator

import { Component } from "@angular/core";

//export is important bcz we import these class in dfferent component
//decarator excepts object as parameter
@Component({
    selector : 'app-property-card',
    templateUrl : 'property-card.component.html',
    styleUrls:['property-card.component.css']
}
)
export class propertycardcomponent
{
    // any is the type which can accept any type of datatype
    Property : any = {
        "Id":1,
        "Type":"House",
        "Name":"Birla House",
        "Price":12000,
    }
}