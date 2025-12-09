@@if (igxName === 'IgxGrid') {
---
title: Angular Grid の列サイズ変更 - Ignite UI for Angular
_description: Angular Grid の列サイズ変更を使用して、グリッド列の幅を瞬時に変更できます。Angular ドラッグ サイズ変更が大変使いやすくなりました。無料でお試しください。
_keywords: grid 列サイズ変更, igniteui for angular, インフラジスティックス
_license: commercial
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid の列サイズ変更 - Ignite UI for Angular
_description: Angular Tree Grid の列サイズ変更を使用して、グリッド列の幅を瞬時に変更できます。Angular ドラッグ サイズ変更が大変使いやすくなりました。無料でお試しください。
_keywords: grid 列サイズ変更, igniteui for angular, インフラジスティックス
_canonicalLink: grid/column-resizing
_license: commercial
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid の列サイズ変更 - Ignite UI for Angular
_description: Angular Hierarchical Grid の列サイズ変更を使用して、グリッド列の幅を瞬時に変更できます。Angular ドラッグ サイズ変更が大変使いやすくなりました。無料でお試しください。
_keywords: grid 列サイズ変更, igniteui for angular, インフラジスティックス
_canonicalLink: grid/column-resizing
_license: commercial
_language: ja
---
}

# Angular @@igComponent 列サイズ変更

グリッド列のサイズ変更遅延では、Angular ドラッグ操作の実行中にサイズ変更インジケーターが一時的に表示されます。ドラッグ操作が完了すると、新しいグリッド列幅が適用されます。

## Angular @@igComponent 列サイズ変更の例

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-resizing-sample/" alt="Angular @@igComponent 列サイズ変更の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-column-resizing/" alt="Angular @@igComponent 列サイズ変更の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           iframe-src="{environment:lobDemosBaseUrl}/hierarchical-grid/hierarchical-grid-resizing/" alt="Angular @@igComponent 列サイズ変更の例">
</code-view>

<div class="divider--half"></div>
}

**列サイズ変更**も列レベルで有効化にできます。つまり、[**@@igSelector**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) にサイズ変更可能な列とサイズ変更不可の列の両方を含むことが可能です。[`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の [`resizable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#resizable) 入力で行うことができます。

@@if (igxName !== 'IgxHierarchicalGrid') {

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
```

}
@@if (igxName === 'IgxHierarchicalGrid') {

```html
<igx-column [field]="'Artist'" [resizable]="true"></igx-column>
```

}
[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) の [`columnResized`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnResized) イベントにサブスクライブして列がサイズ変更されたにカスタム ロジックを実装します。以前の列幅、新しい列幅、および [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) オブジェクトがイベント引数で公開されます。

@@if (igxName === 'IgxGrid') {

```html
<igx-grid [data]="data" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
</igx-grid>
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

}
@@if (igxName === 'IgxTreeGrid') {

```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
</igx-tree-grid>
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

}
@@if (igxName === 'IgxHierarchicalGrid') {

```html
  <igx-hierarchical-grid class="hgrid" [data]="localdata" (columnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [resizable]="true"></igx-column>
        ...
</igx-hierarchical-grid>
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

}

## ピクセル/パーセンテージで列のサイズを変更する

ユーザーのシナリオに応じて、列の幅はピクセル、パーセンテージ、または両方の組み合わせで定義できます。これらのシナリオはすべて、列のサイズ変更機能でサポートされています。デフォルトでは、列に幅が設定されていない場合、ピクセルで設定された幅の使用可能なスペースに収まります。

つまり、次の構成が可能です。

@@if (igxName === 'IgxGrid') {

```html
<igx-grid [data]="data" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="10%" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" [resizable]="true"></igx-column>
</igx-grid>
```

}
@@if (igxName === 'IgxTreeGrid') {

```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'10%'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [resizable]="true"></igx-column>
</igx-tree-grid>
```

}
@@if (igxName === 'IgxHierarchicalGrid') {

```html
  <igx-hierarchical-grid class="hgrid" [data]="localdata" (columnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [resizable]="true" [width]="'10%'"></igx-column>
        <igx-column field="GrammyNominations" [resizable]="true" [width]="'100px'"></igx-column>
        <igx-column field="GrammyAwards" [resizable]="true"></igx-column>
        ...
</igx-hierarchical-grid>
```

}

>[!NOTE]
> ピクセルとパーセンテージで設定された場合で列のサイズ変更の動作は少々異なります。

**ピクセル**

幅がピクセルで設定された列のサイズ変更は、マウスの水平移動量を列のサイズに直接足したり引いたりして行なわれます。

**パーセンテージ**

幅がパーセンテージで設定された列のサイズを変更する場合、ピクセル単位のマウスの水平移動量は、ほぼグリッド幅に対するパーセンテージの量に変換されます。列はレスポンシブな状態のまま、その後のグリッドのサイズ変更は列にも反映されます。

## 列のサイズ変更の制限

列の最小幅および最大幅の構成も可能です。[`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)  の [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minWidth) と [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxWidth) 入力で行うことができます。この場合、サイズ変更インジケーターのドラッグ操作が制限されます。列が  [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minWidth) および [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxWidth). によって定義される範囲以外にサイズ変更できないことをユーザーに通知します。

@@if (igxName !== 'IgxHierarchicalGrid') {

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

}
@@if (igxName === 'IgxHierarchicalGrid') {

```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

}

列幅の最小値と最大値のタイプ (ピクセルまたはパーセンテージ) を混在させることができます。最小値と最大値がパーセンテージに設定されている場合、それぞれの列サイズはピクセルと同様の正確なサイズに制限されます。

つまり、次の構成が可能です。

@@if (igxName !== 'IgxHierarchicalGrid') {

```html
<igx-column [field]="'ID'" width="10%" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

}
@@if (igxName === 'IgxHierarchicalGrid') {

```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

}

または

@@if (igxName !== 'IgxHierarchicalGrid') {

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'5%'" [maxWidth]="'15%'"></igx-column>
```

}
@@if (igxName === 'IgxHierarchicalGrid') {

```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'15%'"></igx-column>
```

}

## ダブルクリックで列の自動サイズ調整

各列ヘッダーの右側をダブルクリックして列を**自動サイズ調整**することができます。列は、現在表示されているヘッダーを含む一番長いセル値にサイズ設定されます。この動作はデフォルトで有効なため、追加で構成する必要はありません。ただし、[`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxWidth) がその列に設定された際に新しい幅が [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxWidth) 値より大きい場合、列は自動サイズ調整されません。この場合、列が [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxWidth) 値に設定されます。

公開した [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の [`autosize()`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#autosize) を使用して列を動的に自動サイズ調整することも可能です。

@@if (igxName !== 'IgxHierarchicalGrid') {

```typescript
@ViewChild('@@igObjectRef') @@igObjectRef: @@igxNameComponent;

let column = this.@@igObjectRef.columnList.filter(c => c.field === 'ID')[0];
column.autosize();
```

}
@@if (igxName === 'IgxHierarchicalGrid') {

```typescript
@ViewChild('@@igObjectRef') @@igObjectRef: @@igxNameComponent;

let column = this.@@igObjectRef.columnList.filter(c => c.field === 'Artist')[0];
column.autosize();
```

}

## 初期化時に列を自動サイズ設定する

`width` を「auto」に設定することで、初期化時に各列を自動サイズに設定できます。

```html
<igx-column width='auto'>...
```

列がビューで最初に初期化されるとき、その幅は、表示されている最も長いセルまたはヘッダーのサイズに調整されます。表示されている行の外側にあるセルは含まれないことに注意してください。
このアプローチは、初期化後の自動サイズ変更よりもパフォーマンスが最適化されており、特に多数の列のサイズを自動サイズ設定する必要がある場合に推奨されます。

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-columnAutoResizing-sample/" alt="Angular @@igComponent 列のサイズ変更の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-columnAutoSizing-sample/" alt="Angular @@igComponent 列のサイズ変更の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-columnAutosizing-sample/" alt="Angular @@igComponent 列のサイズ変更の例">
</code-view>

<div class="divider--half"></div>
}


## スタイル設定

@@igComponent 列のサイズ変更行のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在するインデックス ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) を拡張し、`$resize-line-color` パラメーター以外にも多くのパラメータを受け入れます。

``` scss
$custom-grid-theme: grid-theme(
  $resize-line-color: #0288d1
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/palettes#function-palette) および [`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックをご覧ください。

最後のステップは、それぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。

```scss
@include css-vars($custom-grid-theme);
```

### デモ

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-resize-line-styling-sample/" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-resize-line-styling/" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:550px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-resize-line-styling/" >
</code-view>

}

>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。

## API リファレンス

<div class="divider--half"></div>

- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
- [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
- [@@igxNameComponent スタイル]({environment:sassApiUrl}/themes#mixin-grid)

## その他のリソース

<div class="divider--half"></div>

- [@@igComponent 概要](@@igMainTopic.md)
- [仮想化とパフォーマンス](virtualization.md)
- [ページング](paging.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)
- [集計](summaries.md)
- [列移動](column-moving.md)
- [列のピン固定](column-pinning.md)
- [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
