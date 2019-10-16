---
제목: 반응형 데이터 그리드 | 테이블 제어 | Ignite UI for Angular | 열 유형 | Infragistics
_description: Ignite UI for Angular Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: react table, Ignite UI for Angular, infragistics
_language: kr
---

## 열 데이터 유형

Ignite UI for Angular 데이터 테이블/데이터 그리드는 데이터를 Angular 데이터 그리드에 표시하는 방법에 대해4개의 열 유형과 템플릿 열 유형을 지원합니다.  지원되는 열 유형은 텍스트, 숫자, 날짜·시간, 이미지, 템플릿입니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

각 열은 `propertyPath` 속성을 Angular 데이터 그리드에 바인딩된 기본 `dataSource` 항목의 해당 속성 이름으로 설정하여 데이터에 바인딩합니다.

### 텍스트 열

Angular 그리드는 관련된 셀에 포맷된 텍스트를 표시하는 데 사용됩니다. 이것은 `string` 데이터 유형의 데이터를 표시하는 데 사용되는 기본 열 유형입니다.

### 숫자 열

`IgrNumericColumn`은 관련된 셀에 포맷된 숫자 값을 표시하는 데 사용되며, 셀 내의 소수점 이하의 자릿수 제어 및 소수점 자릿수 표시를 가능하게 합니다.

### 날짜·시간 열

`IgrDateTimeColumn`은 관련된 셀에 `Date` 은 관련된 셀에 `Date` 객체를 적절하게 표시하는 방법을 제어할 수 있습니다.

### 이미지 열

`IgrImageColumn`은 셀 내에 이미지를 표시하는 데 사용되며, `imageStretchOption` 옵션을 사용하여 셀의 이미지 스트레치 사용자 정의 옵션을 표시합니다.

`imageResourceType` 옵션을 설정하여 이미지 리소스 유형을 선택할 수도 있습니다.

### 템플릿 열

`IgrTemplateColumn`은 셀 템플릿과 함께 사용됩니다. 열의 셀에 사용자 템플릿을 적용할 수 있습니다. 이것은 템플릿 열의 `cellUpdating` 이벤트를 처리하여 실행됩니다.

`cellUpdating` 이벤트의 인수는 이벤트를 발생시키는 `IgrTemplateColumn` 및 [`TemplateCellUpdatingEventArgs`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/templatecellupdatingeventargs.html) 매개 변수를 공개합니다. 이 이벤트 인수 매개 변수는 열의 관련된 셀 내에 배치되는 `HTMLDivElement`를 반환하는 `content` 속성을 공개합니다. 그런 다음, 이 `div`에 새로운 요소를 추가할 수 있습니다.

또한, `TemplateCellupdatingEventArgs`는 `TemplateCellInfo` 객체를 가져 오는 데 사용할 수 있는 `cellInfo` 속성을 공개합니다. 이 객체는 인덱스, 기본 데이터 항목 및 셀 모양 등의 셀과 행에 대한 정보를 공개합니다.

### 코드 조각

다음은 이 항목에서 설명한 각 열의 구현을 보여 줍니다.

다음은 위의 열에서 사용하는 샘플 데이터 소스입니다.

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
