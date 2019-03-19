@@if (igxName === 'IgxGrid') {
---
title: Column Resizing コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular 遅延の列のイズ変更を使用すると、ドラッグ操作が実行中に、一時のサイズ変更インジケーターが表示されます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular 高パフォーマンス Data Table, 列のサイズ変更, 遅延列サイズ変更, グリッド列のサイズ変更, Angular Grid 列のサイズ変更, Angular Data Table 列のサイズ変更
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Column Resizing コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular 遅延の列のイズ変更を使用すると、ドラッグ操作が実行中に、一時のサイズ変更インジケーターが表示されます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Tree Grid, Angular Tree Table, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular 高パフォーマンス Tree Grid, Angular 高パフォーマンス Tree Table, Column Resizing, Deferred Column Reszing, Tree Grid Column Resizing, Angular Tree Grid Column Resizing, Angular Tree Table Column Resizing
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Column Resizing コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular 遅延の列のイズ変更を使用すると、ドラッグ操作が実行中に、一時のサイズ変更インジケーターが表示されます。
_keywords: Ignite UI for Angular, UI controls, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント Suite, ネイティブ Angular Controls, ネイティブ Angular Components Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid コンポーネント, Angular Hierarchical Table コンポーネント, Angular Hierarchical Grid コントロール, Angular Hierarchical Table control, Angular 高パフォーマンス Hierarchical Grid, Angular 高パフォーマンス Hierarchical Table, Column Resizing, Deferred Column Reszing, Hierarchical Grid Column Resizing, Angular Hierarchical Grid Column Resizing, Angular Hierarchical Table Column Resizing
_language: ja
---
}


### @@igComponent 列サイズ変更

列サイズ変更の遅延では、ドラッグ操作の実行中にサイズ変更インジケーターが一時的に表示されます。ドラッグ操作が完了すると新しい列サイズが適用されます。

#### @@igComponent 列サイズ変更のデモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-resizing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-resizing-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-resizing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-resizing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-resizing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-resizing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-resizing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-resizing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-resizing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
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
[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) の [`onColumnResized`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnresized) イベントにサブスクライブして列がサイズ変更されたにカスタム ロジックを実装します。以前の列幅、新しい列幅、および [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) オブジェクトがイベント引数で公開されます。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" (onColumnResized)="onResize($event)" [autoGenerate]="false">
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
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (onColumnResized)="onResize($event)" [autoGenerate]="false">
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
  <igx-hierarchical-grid class="hgrid" [data]="localdata" (onColumnResized)="onResize($event)" [autoGenerate]="false"
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

#### 列のサイズ変更の制限

列の最小幅および最大幅の構成も可能です。[`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)  の [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth) と [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) 入力で行うことができます。この場合、サイズ変更インジケーターのドラッグ操作が制限されます。列が  [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth) および [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth). によって定義される範囲以外にサイズ変更できないことをユーザーに通知します。

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

> [!NOTE]
> [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth) が値より小さい値に設定されてた場合も、列を **88px** より小さいサイズに変更することはできません。

#### ダブルクリックで列の自動サイズ調整

各列ヘッダーの右側をダブルクリックして列を**自動サイズ調整**することができます。列は、現在表示されているヘッダーを含む一番長いセル値にサイズ設定されます。この動作はデフォルトで有効なため、追加で構成する必要はありません。ただし、[`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) がその列に設定された際に新しい幅が [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) 値より大きい場合、列は自動サイズ調整されません。この場合、列が [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) 値に設定されます。

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

#### ピン固定列のサイズ変更

ピン固定列もサイズ変更できます。ただし、ピン固定される列のコンテナーが @@igComponent 全体の幅の 80% より大きくできないため、サイズ変更が制限されます。
ピン固定列の自動サイズ調整で、新しい幅がピン固定列コンテナーが @@igComponent 全体の幅の 80% より大きい場合、自動サイズ調整操作は無視されます。これは、ピン固定されていない列を常にユーザーに表示して利用可能にするためです。

### API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular ** フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)