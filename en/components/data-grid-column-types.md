---
title: React Data Grid | Table Controls | Ignite UI for Angular | Column Types | Infragistics
_description: The Ignite UI for Angular Table / Grid component simplifies the complexities of the grid domain into manageable API so that a user can bind a collection of data.
_keywords: react table, Ignite UI for Angular, infragistics
mentionedTypes: ['Grid', 'CellInfo', 'TemplateCellInfo']
---

## Column Types

The Ignite UI for Angular Data Table / Data Grid supports 4 column types, plus a Templated Column Type, giving you complete flexibility over the way your data is displayed in the Angular data grid.  Column types supported are Text, Numeric, DateTime, Image and Template.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-column-types-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

Each column binds to data by setting the `propertyPath` property to the name of the corresponding property on the items of your underlying `dataSource` bound to the Angular data grid.

### Text Column

The Angular grid is used for displaying formatted text in its associated cells. This is the default column type used to display data of the string type.

### Numeric Column

The <code>IgrNumericColumn</code> is used for displaying a formatted numeric value in its associated cells and enables control of decimal place placement within cells and displaying fractional digits.

### DateTime Column

The <code>IgrDateTimeColumn</code> is used for displaying Date objects in its associated cells and enables control to format the Date objects how you see fit.

### Image Column

The <code>IgrImageColumn</code> is used for displaying an image within a cell and exposes options for image stretch customization for cells by using its <code>imageStretchOption</code> option.

You can also choose what type of resource your image is by setting the <code>imageResourceType</code> option.

### Template Column

The <code>IgrTemplateColumn</code> is used in conjunction with a cell template. It enables you to apply a custom template to the column's cell. This is done by handling the <code>cellUpdating</code> event of the template column.

The <code>cellUpdating</code> event's arguments expose the <code>IgrTemplateColumn</code> that fires the event as well as a <code>TemplateCellUpdatingEventArgs</code> parameter. This event arguments parameter exposes a <code>content</code> property that returns the <code>HTMLDivElement</code> that will be placed within the associated cells of the column. You can then append new elements to this <code>div</code>.

The <code>TemplateCellUpdatingEventArgs</code> also exposes a <code>cellInfo</code> property that you can use to get a <code>TemplateCellInfo</code> object. This object exposes information about the cell and the row, such as the index, underlying data item, and appearance of the cell.

### Sparkline Column

You can embed Sparkline components in <code>IgrTemplateColumn</code> to show more complex data structures.
Refer to the [Column Sparkline](data-grid-type-sparkline-table.md) topic for information on how to do this.

### Code Snippet

The following demonstrates the implementation of each of the columns described in this topic:

The following is a sample data source to use with the above columns.

```ts
const maleNames: string[] = ["Kyle", "Oscar", "Ralph", "Torrey", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce"];
const femaleNames: string[] = ["Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally"];
const lastNames: string[] = ["Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "Betts", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Newberry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adama", "Power", "Tesla"];
const genders: string[] = ["male", "female"];
const cities: string[] = ["New York, New York", "Columbus, Ohio", "Los Angeles, California", "Orlando, Florida", "New Orleans, Louisiana", "Las Vegas, Nevada", "Atlanta, Georgia"];
const roadSuffixes: string[] = ["Road", "Street", "Court", "Way"];
const roadNames: string[] = ["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November"];

const people: any[] = [];

let maleCount: number = 0;
let femaleCount: number = 0;
for (let i = 0; i < 250; i++) {

    const age: number = Math.round(this.getRandomNumber(20, 40));
    const today: Date = new Date();
    const gender: string = this.getRandomItem(genders);

    let firstName: string;
    const lastName: string = this.getRandomItem(lastNames);

    const propertyNum: string = Math.round(this.getRandomNumber(1, 300)).toString();
    const cityState: string = this.getRandomItem(cities);
    const road: string = this.getRandomItem(roadNames) + " " + this.getRandomItem(roadSuffixes);

    let photoPath: string;

    if (gender === "male") {
        firstName = this.getRandomItem(maleNames);
        maleCount++;

        if(maleCount > 26){
             maleCount = 0;
        }

        if (maleCount < 10) {
            photoPath = '/assets/GUY0' + maleCount.toString() + '.png';
        }
        else {
            photoPath = '/assets/GUY' + maleCount.toString() + '.png';
        }
    }
    else {
        firstName = this.getRandomItem(femaleNames);
        femaleCount++;

        if(femaleCount > 24){
            femaleCount = 0;
        }

        if (femaleCount < 10) {
            photoPath = '/assets/GIRL0' + femaleCount.toString() + '.png';
        }
        else {
            photoPath = '/assets/GIRL' + femaleCount.toString() + '.png';
        }
    }

    const path: string = './assets/GIRL01.png';

    const birthday: Date = new Date(today.getFullYear() - age, Math.round(this.getRandomNumber(1, 12)), Math.round(this.getRandomNumber(1, 28)));

    people.push({
        Address: propertyNum + " " + road + ", " + cityState,
        Age: age,
        Birthday: birthday,
        City: cityState,
        FirstName: firstName,
        LastName: lastName,
        Photo: path,
        Street: propertyNum + " " + road + ","
    });
}

this.data = people;

public getRandomNumber(min: number, max: number): number {
    return min + Math.random() * (max - min);
}

public getRandomItem(array: any[]): any {
    const index = Math.round(this.getRandomNumber(0, array.length - 1));
    return array[index];
}
```
