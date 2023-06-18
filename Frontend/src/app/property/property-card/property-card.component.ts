import { Component } from "@angular/core";


@Component({
    selector: 'app-property-card',
    // template: `<h1>property card component testing</h1>`,
    templateUrl: 'property-card.component.html',
    // styles: ['h1{font-weight: normal;}']
    styleUrls: ['property-card.component.css']
}) 
export class PropertyCardComponent{
    property: any={
        "Id": 1,
        "Name": "SVK Systems",
        "Type": "House",
        "Price": 3500,
        "check":  67
    }
}