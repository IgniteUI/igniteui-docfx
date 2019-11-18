---
title: Angular Data Grid | Angular アプリケーションの Ignite UI Table コントロール | Infragistics
_description: Ignite UI for Angular Live Grid コンポーネントは、グリッド ドメインの複雑さを管理しやすい API に簡素化しているためユーザーがデータのコレクションを簡単にバインドできます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Grid Control, Angular Grid 例, Angular Grid コンポーネント, Angular Live Grid
_language: ja
---

## Angular Table 列データのタイプ

Angular Data Table / Data Grid は、データを Angular グリッドに表示する方法を 4 つの列タイプとテンプレート列タイプから選択できます。  サポートされている列タイプは、Text、Numeric、DateTime、Image　および Template です。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

各列は、`propertyPath` プロパティを、グリッドにバインドされた基になる `dataSource` の項目の対応するプロパティの名前に設定することによってデータにバインドします。

### テキスト列

`IgrTextColumn` は、関連付けられたセルにフォーマットされたテキストを表示するために使用されます。これは、`string` データ型のデータを表示するために使用されるデフォルトの列型です。

### 数値列

`IgrNumericColumn` は、関連付けられたセルに書式設定された数値を表示するために使用され、セル内の小数点以下の桁数の制御と小数桁の表示を可能にします。

### DateTime 列

`IgrDateTimeColumn` は、関連付けられたセルに `Date` オブジェクトを表示するために使用され、`Date` オブジェクトを適切に表示する方法をコントロールで制御できます。

### 画像列

`IgrImageColumn` はセル内に画像を表示するために使用され、その `imageStretchOption` オプションを使用してセルの画像ストレッチカスタマイズのためのオプションを公開します。

`imageResourceType` オプションを設定して、イメージのリソースの種類を選択することもできます。

### テンプレート列

`IgrTemplateColumn` はセルテンプレートと共に使用されます。カスタム テンプレートを列のセルに適用することができます。これは、テンプレート列の `cellUpdating` イベントを処理することによって行われます。

`cellUpdating` イベントの引数は、イベントを発生させる `IgrTemplateColumn` と [`TemplateCellUpdatingEventArgs`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/templatecellupdatingeventargs.html) パラメーターを公開します。このイベント引数パラメーターは、列の関連付けられたセル内に配置される `HTMLDivElement` を返す `content` プロパティを公開します。その後、この `div` に新しい要素を追加することができます。

`TemplateCellupdatingEventArgs` は、`TemplateCellInfo` オブジェクトを取得するために使用できる `cellInfo` プロパティも公開しています。このオブジェクトは、インデックス、基になるデータ項目、セルの外観など、セルと行に関する情報を公開します。

### コード スニペット

以下は、このトピックで説明されている各列の実装を示します。

以下は、上記の列で使用するサンプルデータソースです。

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
