---
title: 仮想スクロール ディレクティブ
_description: Ignite UI for Angular は ngFor と同様の仮想 igxFor ディレクティブを公開します。DOM でデータの表示されている部分のみを可視化すると DOM オブジェクトの描画が仮想化されます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, 仮想化, パフォーマンス, 仮想ディレクティブ, 仮想 For
_language: ja
---

# 仮想スクロール ディレクティブ

<p class="highlight">Ignite UI for Angular igxForOf ディレクティブは、膨大なデータをテンプレート化するための ngForOf の代替手段です。仮想化を使用して、DOM レンダリングとメモリ使用量を最適化します。</p>
<div class="divider"></div>

## Angular 仮想スクロール ディレクティブの例


<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/igx-for-sample-1" alt="Angular 仮想スクロール ディレクティブの例">
</code-view>


## 使用方法

### はじめに

[`igxFor`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) ディレクティブは `NgModule` としてエクスポートされるため、アプリケーションで行う必要があるのは、`AppModule` に `IgxForOfModule` をインポートすることだけです。

```typescript
// app.module.ts

import { IgxForOfModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxForOfModule,
        ...
    ]
})
export class AppModule {}
```

### igxFor を追加

モジュールをインポート後、ローカル データにバインドする `igxFor` の基本構成を設定します。

```html
<span #container>
    <ng-template *igxFor="data"></ng-template>
</span>
```

**data** プロパティは、仮想化されたデータを提供する配列です。


## 例

`igxFor` ディレクティブを使用して、データを垂直、水平、または両方向に仮想化できます。

仮想化はページング機能のようにデータをより小さいチャンクに分割します。このチャンクは、ユーザーがデータを水平/垂直にスクロールするときにコンテナー ビューポートで切り替わります。ページングの動作との違いは、仮想化が通常のスクロールバーの動作を装うことです。`igxFor` ディレクティブはスクロール可能なコンテナーを作成して、データを分割して描画します。それは [`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) 内で使用され、仮想 [`igx-list`]({environment:angularApiUrl}/classes/igxlistcomponent.html) を構築するために使用できます。

### 垂直仮想化

```html
<igx-list>
    <div [style.height]="'500px'" [style.overflow]="'hidden'" [style.position]="'relative'">
        <igx-list-item [style.width]="'calc(100% - 18px)'"
            *igxFor="let item of data | igxFilter: fo;
                     scrollOrientation : 'vertical';
                     containerSize: '500px'; 
                     itemSize: '50px'">
            <div class="contact">
                <span class="name">{{item.name}}</span>
            </div>
        </igx-list-item>
    </div>
</igx-list>
```

***注:*** [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) テンプレートの親コンテナには、次の CSS ルールが適用されていることを強く推奨します: 垂直方向には `height`、水平方向には `width`、`overflow: hidden` および ` position: relative`。スムーズ スクロール動作が、表示されたままの場合にページのその他の部分に視覚的に影響を与えることが可能なコンテンツ オフセットによって実装されるためです。

### 水平仮想化 

```html
<igx-list>
    <div [style.width]="'880px'" [style.overflow]="'hidden'" [style.position]="'relative'">
        <igx-list-item [style.width]="'220px'"
            *igxFor="let item of data | igxFilter: fo;
                     scrollOrientation : 'horizontal'; 
                     containerSize: '880px'; 
                     itemSize: '220px'">
            <div class="contact">
                <span class="name">{{item.name}}</span>
            </div>
        </igx-list-item>
    </div>
</igx-list>
```


<code-view style="height: 240px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/igx-for-sample-2" >
</code-view>

<div class="divider--half"></div>

### 水平仮想化および垂直仮想化

```html
<table #container [style.width]='width' 
    [style.height]='height'
    [style.overflow]='"hidden"'
    [style.position]='"relative"'>
    <ng-template #scrollContainer igxFor let-rowData
        [igxForOf]="data"
        [igxForScrollOrientation]="'vertical'"
        [igxForContainerSize]='height'
        [igxForItemSize]='"50px"'>
        <tr [style.display]="'flex'" [style.height]="'50px'">
            <ng-template #childContainer igxFor let-col
                [igxForOf]="cols"
                [igxForScrollOrientation]="'horizontal'"
                [igxForScrollContainer]="parentVirtDir"
                [igxForContainerSize]='width'>
                    <td [style.min-width]='col.width + "px"'>
                        {{rowData[col.field]}}
                    </td>
            </ng-template>
        </tr>
    </ng-template>
</table>
```

`igxFor` ディレクティブは、`igxGrid` 内のデータを垂直方向と水平方向の両方向に仮想化するために使用されます。 

より詳細な情報とデモについては、[グリッド仮想化](grid/virtualization.md)トピックに従ってください。

### リモート サービスにバインドされる igxFor
[`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) ディレクティブは、`Observable` プロパティ- `remoteData`を使用してリモート サービスにバインドできます。(次の例の場合) `chunkLoading` イベントも、データのリクエストをトリガーするために利用する必要があります。

```html
<div style='height: 500px; overflow: hidden; position: relative;'>
    <ng-template igxFor let-item [igxForOf]="remoteData | async"
        (onChunkPreload)="chunkLoading($event)"
        [igxForScrollOrientation]="'vertical'"
        [igxForContainerSize]='"500px"'
        [igxForItemSize]='"50px"'
        [igxForRemote]='true'
        let-rowIndex="index" #virtDirRemote>
        <div style='height:50px;'>{{item.ProductID}} : {{item.ProductName}}</div>
    </ng-template>
</div>
```

***注:*** [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) のインスタンスで [`totalItemCount`]({environment:angularApiUrl}/classes/igxforofdirective.html#totalitemcount) プロパティを設定する必要があります。

```typescript
this.virtDirRemote.totalItemCount = data["@odata.count"];
```

コンポーネントからディレクティブ インスタンスにアクセスするには、`ViewChild` としてマークします。

```typescript
@ViewChild("virtDirRemote", { read: IgxForOfDirective })
public virtDirRemote: IgxForOfDirective<any>;
```

最初のチャンクをロードするリクエストの後、[`totalItemCount`]({environment:angularApiUrl}/classes/igxforofdirective.html#totalitemcount) を設定できます:

```typescript
public ngAfterViewInit() {
    this.remoteService.getData(this.virtDirRemote.state, (data) => {
        this.virtDirRemote.totalItemCount = data["@odata.count"];
    });
}
```

データをリクエストする際、[`startIndex`]({environment:angularApiUrl}/classes/igxforofdirective.html#state.startindex) プロパティと [`chunkSize`]({environment:angularApiUrl}/classes/igxforofdirective.html#state.chunksize) プロパティを提供する [`IgxForOfState`]({environment:angularApiUrl}/classes/igxforofdirective.html#state) インターフェイスを利用できます。最初は chunkSize が 0 になるため、最初に読み込まれるチャンクのサイズを指定する必要があることに注意してください (最適な値は、初期の [`igxForContainerSize`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforcontainersize) を [`igxForItemSize`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforitemsize) で割った値です)。

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
            // Set initial chunk size, the best value is igxForContainerSize
            // initially divided by igxForItemSize
            10 : dataState.chunkSize;
        const top = requiredChunkSize;
        qS += `$skip=${skip}&$top=${top}&$count=true`;
    }
    return `${this.url}${qS}`;
}
```

[`onChunkPreload`]({environment:angularApiUrl}/classes/igxforofdirective.html#onchunkpreload) イベントが発生するたびに、新しいデータのチャンクがリクエストされます。

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

## ローカル変数

igxFor ディレクティブのコンテキストには、`even`、`odd`、`first`、`last` のヘルパー プロパティが含まれています。これらは、コレクション内の現在の要素の位置を識別するために使用されます。次のコードスニペットは、`ng-template` で `even` プロパティを使用する方法を示しています。すべての偶数の div 要素に `even` クラスが割り当てられます:

```html
<ng-template igxFor let-item let-isEven="even"
             [igxForOf]="data" 
             [igxForScrollOrientation]="'vertical'" >
    <div [ngClass]="{even: isEven}"></div>
</ng-template>
```

## 既知の制限

|制限|説明|
|--- |--- |
| 初期化後にレンダリングされたテンプレートのコンテンツのサイズが変更された場合、`scrollTo` メソッドが正しく動作されません。| 初期化後にランタイムを変更するサイズを持つテンプレート内の要素の場合 (コンテンツ プロジェクション、リモート要求の解決などの結果として)、`scrollTo` メソッドは正しいインデックスまでスクロールできません。メソッドは、ランタイムのサイズ変更が発生する前にインデックスの位置までスクロールし、サイズが変更された後は場所が正しくありません。回避策として、コンテンツが後で読み込まれた場合にコンテンツに基づいてサイズを変更しないテンプレートを使用します。

## API リファレンス

* [IgxForOfDirective]({environment:angularApiUrl}/classes/igxforofdirective.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
