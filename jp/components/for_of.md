---
title: Virtual For ディレクティブ
_description: Ignite UI for Angular は ngFor と同様の仮想 igxFor ディレクティブを公開します。DOM でデータの表示されている部分のみを可視化すると DOM オブジェクトの描画が仮想化されます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, 仮想化, パフォーマンス, 仮想ディレクティブ, 仮想 For
_language: ja
---

## Virtual For ディレクティブ

<p class="highlight">
大量データをテンプレート化するために `ngForOf` の代わりに `igxForOf` を使用できます。`igxForOf` は、DOM 描画およびメモリ使用を最適化するために仮想化を使用します。仮想化はページング機能のようにデータをより小さいチャンクに分割します。このチャンクは、ユーザーがデータを水平/垂直にスクロールするときにコンテナー ビューポートで切り替えます。ページングの動作との違いは、仮想化が通常のスクロールバーの動作を装うことです。ディレクティブはスクロール可能なコンテナーを作成して、データの小さい部分を描画します。`igx-grid` で使用され、仮想化された `igx-list` を作成するために使用できます。</p>


### デモ

<div class="sample-container loading" style="height:650px">
    <iframe id="igx-for-sample-iframe" src='{environment:demosBaseUrl}/igx-for-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="igx-for-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### 依存関係

`igxFor` ディレクティブが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に _IgxForOfModule_ をインポートする必要があります。

```typescript
// app.module.ts

import { IgxForOfModule } from 'igniteui-angular/main';

@NgModule({
    imports: [
        ...
        IgxForOfModule,
        ...
    ]
})
export class AppModule {}
```

### 使用方法

`igxForOf` モジュールをインポート後、ローカル データにバインドする **igxFor** の基本構成を設定します。

```html
<span #container>
    <ng-template *igxFor="data"></ng-template>
</span>
```

**data** プロパティは、仮想化されたデータを提供する配列です。

ディレクティブはデータを垂直、水平、または両方向で仮想化できます。

#### 垂直仮想化

```html
<table style='height: 500px; overflow: hidden; position: relative;'>
    <ng-template igxFor let-item [igxForOf]="data" #virtDirVertical
        [igxForScrollOrientation]="'vertical'"
        [igxForContainerSize]='"500px"'
        [igxForItemSize]='"50px"'
        let-rowIndex="index">
            <tr style='height:50px;'>{{rowIndex}} : {{item.text}}</tr>
    </ng-template>
</table>
```

#### 水平仮想化

```html
<table>
    <tbody style='display: grid; position: relative;'>
    <tr style='width:500px; height:118px; overflow: hidden;'>
        <ng-template igxFor let-item [igxForOf]="data" #virtDirHorizontal
            [igxForScrollOrientation]="'horizontal'"
            [igxForContainerSize]='"500px"'
            let-rowIndex="index">
                <td  [style.width.px]='item.width' style='height:100px;'>{{rowIndex}} : {{item.text}}</td>
            </ng-template>
    </tr>
    </tbody>
</table>
```

***注:*** `igxForOf` テンプレートの親コンテナーで関連するディメンション (垂直の場合は `height` で、水平の場合は `width`) を設定し、`overflow: hidden` および `position: relative` の CSS ルールを適用する必要があります。スムーズ スクロール動作が、表示されたままの場合にページのその他の部分に視覚的に影響を与えることが可能なコンテンツ オフセットによって実装されるためです。

#### 水平仮想化および垂直仮想化

```html
<table #container [style.width]='width' [style.height]='height' [style.overflow]='"hidden"' [style.position]='"relative"'>
    <ng-template #scrollContainer igxFor let-rowData [igxForOf]="data"
        [igxForScrollOrientation]="'vertical'"
        [igxForContainerSize]='height'
        [igxForItemSize]='"50px"'>
        <tr [style.display]="'flex'" [style.height]="'50px'">
            <ng-template #childContainer igxFor let-col [igxForOf]="cols"
                [igxForScrollOrientation]="'horizontal'"
                [igxForScrollContainer]="parentVirtDir"
                [igxForContainerSize]='width'>
                    <td [style.min-width]='col.width + "px"'>{{rowData[col.field]}}</td>
            </ng-template>
        </tr>
    </ng-template>
</table>
```
### リモート サービスにバインドされる igxFor

`igxForOf` ディレクティブはリモート サービスにバインドできます。 `Observeable` プロパティを使用する必要があります。以下の例は `remoteData` プロパティです。また、`chunkLoading` イベントを使用してデータへの要求をトリガーします。

```html
<div style='height: 500px; overflow: hidden; position: relative;'>
    <ng-template igxFor let-item [igxForOf]="remoteData | async" (onChunkPreload)="chunkLoading($event)"
        [igxForScrollOrientation]="'vertical'"
        [igxForContainerSize]='"500px"'
        [igxForItemSize]='"50px"'
        [igxForRemote]='true'
        let-rowIndex="index" #virtDirRemote>
        <div style='height:50px;'>{{item.ProductID}} : {{item.ProductName}}</div>
    </ng-template>
</div>
```

また、`totalItemCount` プロパティを `igxForOf` インスタンスに設定する必要があります。

```typescript
this.virtDirRemote.totalItemCount = data["@odata.count"];
```

コンポーネントからディレクティブ インスタンスにアクセスするには、`ViewChild` としてマークします。

```typescript
@ViewChild("virtDirRemote", { read: IgxForOfDirective })
public virtDirRemote: IgxForOfDirective<any>;
```

最初のチャンクを読み込む要求の後に `totalItemCount` を設定します。

```typescript
public ngAfterViewInit() {
    this.remoteService.getData(this.virtDirRemote.state, (data) => {
        this.virtDirRemote.totalItemCount = data["@odata.count"];
    });
}
```

データを要求する際に `startIndex` および `chunkSize` を提供する `IgxForOfState` インターフェイスを使用できます。注: 最初の chunkSize は 0 です。最初に読み込んだ部分のサイズを指定する必要があります。最適な値は `igxForContainerSize` / `igxForItemSize` です。

```typescript
public getData(data?: IForOfState, cb?: (any) => void): any {
    var dataState = data;
    return this.http
        .get(this.buildUrl(dataState))
        .map((response) => response.json())
        .map((response) => {
            return response;
        })
        .subscribe((data) => {
            this._remoteData.next(data.value);
            if (cb) {
                cb(data);
            }
        });
}

private buildUrl(dataState: any): string {
    let qS: string = "?", requiredChunkSize: number;
    if (dataState) {
        const skip = dataState.startIndex;
            requiredChunkSize =  dataState.chunkSize === 0 ?
                // Set initial chunk size, the best value is igxForContainerSize initially divided by igxForItemSize
                10 : dataState.chunkSize;
        const top = requiredChunkSize;
        qS += `$skip=${skip}&$top=${top}&$count=true`;
    }
    return `${this.url}${qS}`;
}
```

`onChunkPreload` イベントが発生されたとき、新しいデータの部分を要求します。

```typescript
chunkLoading(evt) {
    if(this.prevRequest){
        this.prevRequest.unsubscribe();
     }
     this.prevRequest = this.remoteService.getData(evt, ()=> {
        this.virtDirRemote.cdr.detectChanges();
    });
}
```
## API

### 入力

`igxFor` の外観および動作を構成するには、以下の入力を使用します。

| 名前 | 型 | 説明 |
| :--- |:--- | :--- |
| `igxForOf` | any[] | 仮想化するデータ |
| `igxForScrollOrientation` | string | 仮想化の方向 - "horizontal" または "vertical" |
| `igxForScrollContainer` | any | 垂直および水平スクロールバーが作成されるコンテナー。ディレクティブをネストするか、スクロール コンテナーが直接の親ではない場合に便利です。 |
| `igxForContainerSize` | any | コンテナー サイズを指定します。 |
| `igxForItemSize` | any | 項目のサイズを指定します。仮想化が垂直方向の場合、高さのサイズです。仮想化が水平方向の場合、このサイズは幅です。水平方向の場合は項目が異なる幅を持つことが可能なため、通常は垂直方向で使用されます。 |


### アクセサー

以下は、`igxForOf` から情報を取得するための公開用アクセサーのリストです。

| 名前 | 型 | 説明 |
| :--- |:--- | :--- |
| `state`            | IgxForState | ディレクティブの現在状態。`startIndex` および `chunkSize` を含みます。 |
| `state.startIndex` | number      | 現在の表示チャンクが開始する項目のインデックス。    |
| `state.chunkSize`  | number      | 現在の表示チャンクに含まれる項目の数。                |
| `totalItemCount`   | number      | リモート サービスを使用する場合、仮想データ項目の合計数。               |


### ローカル変数

`igxForOf` にエクスポートされる、ローカル変数にエイリアス可能な値のリスト。

| 名前        | 型    | 説明                                           |
| :---------- |:------- | :---------------------------------------------------- |
| `$implicit` | T       | 列挙子に含まれる項目の値。     |
| `index`     | number  | 列挙子の現在項目のインデックス。        |

<div class="divider--half"></div>

### 出力

**igx-for** によって発生されるイベントのリスト:

| 名前              | 説明                                                          |
| :---------------- | :------------------------------------------------------------------- |
| イベント発生  | 変更の通知                                                |
| `OnChunkLoad`      | スクロール時、読み込んだデータ項目を発生します。                     |
| `OnChunkPreload`   | スクロール時、読み込むデータ項目を発生するために使用されます。 |


### メソッド

**igx-for** によって公開されるすべてのパブリック メソッドのリスト:

| 構文       | 説明                     |
| :-------------- | :------------------------------ |
| `scrollNext()`  | 「次」の方向に 1 項目スクロールします。 |
| `scrollPrev()`  | 「前」の方向に 1 項目スクロールします。|
| `scrollTo(index)`  | 指定されたインデックスへスクロールします。 |

## Limitations

| Name  | Description | Status |
| :---- | :---------- | :----- |
| Content Height Limitation | The browsers currently have height limitation for DOM elements. Because of that the total height of the rows shouldn't exceed the height limitation for the browsers. Otherwise there may be unexpected changes in behavior of the igxGrid. For example IE11 has height limitation of 1 533 916 pixels, which for rows with height 50px means no more than 30 678 rows. | Fix planned |
