---
title: Angular Hierarchical Grid の条件付きセルのスタイル設定 - Ignite UI for Angular
_description: ユーザーが異なるセルをすばやく識別できるようにします。さまざまなセルのスタイル設定を定義します。Angular Data Grid の条件付きセル スタイル設定を使用してセルを目立たせます。
_keywords: 条件付きのスタイル設定, ignite ui for angular, インフラジスティックス
_license: commercial
_canonicalLink: grid/conditional-cell-styling
_language: ja
---


# Angular Hierarchical Grid 条件付きスタイル設定

IgxHierarchicalGrid コンポーネントでカスタム スタイルを提供する必要がある場合は、行レベルまたはセル レベルで行うことができます。

## Hierarchical Grid 条件付き行のスタイル設定

Ignite UI for Angular の IgxHierarchicalGrid コンポーネントは、カスタム ルールに基づいて**行の条件付きスタイル設定**を作成する次の 2 つの方法を提供します:




- IgxHierarchicalGrid コンポーネントで [`rowClasses`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowClasses) 入力を設定する方法。
- IgxHierarchicalGrid コンポーネントで [`rowStyles`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowStyles) 入力を設定する方法。


さらにこのトピックでは、両方について詳しく説明します。

### rowClasses の使用




[`rowClasses`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowClasses) 入力を設定し、カスタム ルールを定義することで、IgxHierarchicalGrid 行のスタイルを条件付きで設定できます。






```html
<igx-hierarchical-grid  #hierarchicalGrid class="hgrid" [data]="localData" [height]="'580px'" [width]="'100%'" [rowStyles]="rowStyles">
    ...
</igx-hierarchical-grid>
```






[`rowClasses`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowClasses) 入力は、キー値のペアを含むオブジェクト リテラルを受け入れます。ここで、キーは CSS クラスの名前であり、値はブール値またはブール値を返すコールバック関数となります。


```typescript
// sample.component.ts

public rowClasses = {
  activeRow: this.activeRowCondition
};

public activeRowCondition = (row: RowType) => this.grid?.navigation.activeNode?.row === row.index;
```

```scss
// sample.component.scss

::ng-deep {
 .activeRow {
  border: 2px solid #fc81b8;
  border-left: 3px solid #e41c77;
 }
}
```

> [!NOTE]
> **`::ng-deep`** または **`ViewEncapsulation.None`** を使用してカスタム スタイルを現在のコンポーネントとその子コンポーネントに適用します。

### デモ




<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-row-classes/" >
</code-view>

<div class="divider--half"></div>


### rowStyles の使用

列は、データ行の条件付きスタイル設定を可能にする `rowStyles` プロパティを公開するようになりました。`rowClasses` と同様、キーがスタイル プロパティであり、値が評価用の式であるオブジェクト リテラルを受け取ります。また、通常のスタイル設定 (条件なし) を適用することもできます。

> `rowStyles` と `rowClasses` の両方のコールバック署名は次のとおりです:

```ts
(row: RowType) => boolean
```

次にスタイルを定義します。







```typescript
// component.ts
public rowStyles = {
    background:(row: RowType) => row.data['HasGrammyAward'] ? '#eeddd3' : '#f0efeb',
    'border-left': (row: RowType) => row.data['HasGrammyAward'] ? '2px solid #dda15e' : null
};

public childRowStyles = {
    'border-left': (row: RowType) => row.data['BillboardReview'] > 70 ? '3.5px solid #dda15e' : null
};
```

```html
<igx-hierarchical-grid  #hierarchicalGrid [data]="localdata" [autoGenerate]="false"
        [height]="'580px'" [width]="'100%'" [rowStyles]="rowStyles">
        <igx-row-island [key]="'Albums'" [autoGenerate]="false" [rowStyles]="childRowStyles">
             ...
        </igx-row-island>  
    ...
</igx-hierarchical-grid>
```




### デモ




<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-row-styles/" >
</code-view>

<div class="divider--half"></div>


## Hierarchical Grid 条件付きセル スタイル設定
## 概要

Ignite UI for Angular の IgxHierarchicalGrid コンポーネントは、カスタム条件に基づいて 2 通りの条件付きセルのスタイル設定をサポートします。

- [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) を設定して、キーと値のペアを含むオブジェクト リテラルに [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellClasses) を入力します。キーは CSS クラスの名前です。値はブール値を返すコールバック関数またはブール値です。その結果、セルのマテリアル スタイル設定が簡単にできます。

```ts
// component.ts file
public beatsPerMinuteClasses = {
    downFont: this.downFontCondition,
    upFont: this.upFontCondition
};
...

private downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;
}
```

```scss
// component.scss file
.upFont {
  color: red;
}

.downFont {
  color: green;
}
```

### cellClasses の使用

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellClasses) 入力を設定してカスタム条件を定義することにより、IgxHierarchicalGrid の条件付きセルのスタイルを設定できます。





```html
<!-- sample.component.html -->
<igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number" [cellClasses]="grammyClasses"></igx-column>
```



[`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellClasses) 入力は、キーと値のペアを含むオブジェクト リテラルを受け取ります。キーは CSS クラスの名前です。値はブール値を返すコールバック関数またはブール値です。





```typescript
// sample.component.ts

private upGrammyCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 5;
}

private downGrammyCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 5;
}

public grammyClasses = {
    downGrammy: this.downPriceCondition,
    upGrammy: this.upPriceCondition
};
```

```scss
// sample.component.scss

::ng-deep {
    .upGrammy {
        color: red;
    }

    .downGrammy {
        color: green;
    }
}
```



> [!NOTE]
> **`::ng-deep`** または **`ViewEncapsulation.None`** を使用してカスタム スタイルを現在のコンポーネントとその子コンポーネントに適用します。

### デモ




<!-- TODO -->

<div class="divider--half"></div>

- [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 入力を使用して、キーがスタイル プロパティであり、値が評価用の式であるオブジェクト リテラルを受け取る [`cellStyles`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellStyles)。

```ts
public styles = {
    'background': 'linear-gradient(180deg, #dd4c4c 0%, firebrick 100%)',
    'text-shadow': '1px 1px 2px rgba(25,25,25,.25)',
    'animation': '0.25s ease-in-out forwards alternate popin'
};
```

> `cellStyles` と `cellClasses` の両方のコールバック シグネチャが次のように変更されました。

```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```

### cellStyles の使用

列の `cellStyles` プロパティを公開。列セルの条件付きスタイリングが可能になりました。`cellClasses` と同様、キーがスタイル プロパティであり、値が評価用の式であるオブジェクト リテラルを受け取ります。また、通常のスタイリングを簡単に適用できます (条件なし)。

[上記のサンプル](#デモ)で作成した項目:
- 列インデックスに基づいて適用される 2 つの異なるスタイル。
- また、偶数/奇数行に基づいて`テキストの色`を変更します。

> 両方の `cellStyles` のコールバック署名は以下のとおりです。

```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```

次にスタイルを定義します。

```typescript
// component.ts
public oddColStyles = {
    background: 'linear-gradient(to right, #b993d6, #8ca6db)',
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'white' : 'gray',
    animation: '0.75s popin'
};

public evenColStyles = {
    background: 'linear-gradient(to right, #8ca6db, #b993d6)',
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'gray' : 'white',
    animation: '0.75s popin'
};
```

`ngOnInit` で、IgxHierarchicalGrid 列を動的に作成するために使用される事前定義 `columns` コレクションの各列に `cellStyles` 構成を追加します。





```ts
// component.ts
public ngOnInit() {
    this.data = SINGERS;
    this.columns = [
        { field: 'Artist' },
        { field: 'HasGrammyAward' },
        { field: 'Debut' },
        { field: 'GrammyNominations' },
        { field: 'GrammyAwards' }
    ];

    this.applyCSS();
}
```



```ts
public applyCSS() {
    this.columns.forEach((column, index) => {
        column.cellStyles = (index % 2 === 0 ? this.evenColStyles : this.oddColStyles);
    });
}

public updateCSS(css: string) {
    this.oddColStyles = {...this.oddColStyles, ...JSON.parse(css)};
    this.evenColStyles = {...this.evenColStyles, ...JSON.parse(css)};
    this.applyCSS();
}
```





```html
<igx-hierarchical-grid #hierarchicalGrid [data]="localdata"    
    [autoGenerate]="false"
    [height]="'580px'">
    <igx-column *ngFor="let c of columns"
        [field]="c.field"
        [header]="c.header"
        [cellStyles]="c.cellStyles">
    </igx-column>
</igx-hierarchical-grid>
```




`popin` アニメーションの定義

```scss
// component.scss
@keyframes popin {
    0% {
        opacity: 0.1;
        transform: scale(.75, .75);
        filter: blur(3px) invert(1);
    }

    50% {
        opacity: .5;
        filter: blur(1px);
    }

    100% {
        transform: scale(1, 1);
        opacity: 1;
        filter: none;
    }
}
```

### デモ




<!-- TODO -->

<div class="divider--half"></div>

## 既知の問題と制限

- 他の列に同じ条件でバインドされたセルがある場合、その 1 つのセルが更新された際に条件が満たされて要る場合も他のセルが新しい値に基づいて更新されない問題。
残りのセルに変更を適用するには、パイプ チェックを実行する必要があります。以下の例は、[`onCellEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onCellEdit) イベントで `spread operator(...)` を使用してチェックを実行する方法を示します。これにより、元のオブジェクトが新しいインスタンスでコピーされ、パイプのみ発生します。

```ts
public backgroundClasses = {
    myBackground: (rowData: any, columnKey: string) => {
        return rowData.Col2 < 10;
    }
};
...

editDone(evt) {
    this.backgroundClasses = {...this.backgroundClasses};
}

```





```html
<igx-hierarchical-grid #grid1 [data]="data" height="500px" width="100%" (onCellEdit)="editDone($event)">
  <igx-column field="Col1" dataType="number" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col2" dataType="number" [editable]="true" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col3" header="Col3" dataType="string" [cellClasses]="backgroundClasses"></igx-column>
</igx-hierarchical-grid>
```




## API リファレンス

<div class="divider--half"></div>

- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
- [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent スタイル]({environment:sassApiUrl}/themes#mixin-grid)

## その他のリソース

<div class="divider--half"></div>

- [Hierarchical Grid 概要](hierarchical-grid.md)
- [仮想化とパフォーマンス](virtualization.md)
- [編集](editing.md)
- [ページング](paging.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)
- [集計](summaries.md)
- [列の移動](column-moving.md)
- [列のピン固定](column-pinning.md)
- [列のサイズ変更](column-resizing.md)
- [列の非表示](column-hiding.md)
- [選択](selection.md)
- [検索](search.md)
- [ツールバー](toolbar.md)
- [複数行ヘッダー](multi-column-headers.md)
- [サイズ](display-density.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
