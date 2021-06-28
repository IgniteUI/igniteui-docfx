@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 列サイズ変更 | Ignite UI for Angular | インフラジスティックス
_description: Angular Grid グリッド列のサイズ変更は Angular ドラッグ サイズ変更に基づいて、グリッド列の幅を簡単に変更できます。Angular ドラッグ サイズ変更が大変使いやすくなりました。
_keywords: grid column resizing, igniteui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid 列サイズ変更 | Ignite UI for Angular | インフラジスティックス
_description: Angular Tree Grid グリッド列のサイズ変更は Angular ドラッグ サイズ変更に基づいて、グリッド列の幅を簡単に変更できます。Angular ドラッグ サイズ変更が大変使いやすくなりました。
_keywords: grid column resizing, igniteui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid 列サイズ変更 | Ignite UI for Angular | インフラジスティックス
_description: Angular Hierarchical Grid グリッド列のサイズ変更は Angular ドラッグ サイズ変更に基づいて、グリッド列の幅を簡単に変更できます。Angular ドラッグ サイズ変更が大変使いやすくなりました。
_keywords: grid column resizing, igniteui for angular, infragistics
_language: ja
---
}

# @@igComponent 列サイズ変更

グリッド列のサイズ変更遅延では、Angular ドラッグ操作の実行中にサイズ変更インジケーターが一時的に表示されます。ドラッグ操作が完了すると、新しいグリッド列幅が適用されます。

## Angular @@igComponent 列サイズ変更の例

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-resizing-sample" alt="Angular @@igComponent 列サイズ変更の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-column-resizing" alt="Angular @@igComponent 列サイズ変更の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/hierarchical-grid/hierarchical-grid-resizing" alt="Angular @@igComponent 列サイズ変更の例">
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

## ピクセル/パーセンテージで列のサイズを変更する

ユーザーのシナリオに応じて、列の幅はピクセル、パーセンテージ、または両方の組み合わせで定義できます。 これらのシナリオはすべて、列のサイズ変更機能でサポートされています。デフォルトでは、列に幅が設定されていない場合、ピクセルで設定された幅の使用可能なスペースに収まります。

つまり、次の構成が可能です。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" (onColumnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="10%" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" [resizable]="true"></igx-column>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (onColumnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'10%'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [resizable]="true"></igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
  <igx-hierarchical-grid class="hgrid" [data]="localdata" (onColumnResized)="onResize($event)" [autoGenerate]="false"
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

幅がパーセンテージで設定された列のサイズを変更する場合、ピクセル単位のマウスの水平移動量は、ほぼグリッド幅に対するパーセンテージの量に変換されます。 列はレスポンシブな状態のまま、その後のグリッドのサイズ変更は列にも反映されます。

## 列のサイズ変更の制限

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

列幅の最小値と最大値のタイプ (ピクセルまたはパーセンテージ) を混在させることができます。 最小値と最大値がパーセンテージに設定されている場合、それぞれの列サイズはピクセルと同様の正確なサイズに制限されます。

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

## スタイル設定
@@igComponent 列のサイズ変更行のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在するインデックス ファイルをインポートする必要があります。

```scss
// grid-resize-line-styling-sample.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) を拡張し、`$resize-line-color` パラメーター以外にも多くのパラメータを受け入れます。

``` scss
$custom-grid-theme: igx-grid-theme(
    $resize-line-color: #0288D1
);

```
 >[!NOTE]
 >コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-grid-theme);
    }
}
```

### カラーパレットの定義
上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) と [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は指定した一次色と二次色に基づいてカラーパレットを生成します。

```scss
$primary-color: #0288D1;
$secondary-color: #BDBDBD;

$custom-theme-palette: igx-palette($primary: $primary-color, $secondary: $secondary-color);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。 

```scss
$custom-grid-theme: igx-grid-theme(
    $palette: $custom-theme-palette,
    $resize-line-color: igx-color($custom-theme-palette, 'secondary', 500)
);
```

>[!NOTE]
>`igx-color` と `igx-palette` は色を生成したり取り出したりするための関数です。使い方の詳細については [`パレット`](../themes/palettes.md) のトピックを参照してください。

### スキーマの使用
テーマ エンジンを使用して[**スキーマ**](../themes/sass/schemas.md)の利点を使用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている定義済みスキーマ、ここでは [`light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid) スキーマを拡張します。

```scss
// Extending the light grid schema
$light-grid-schema: extend($_light-grid,
    (
        resize-line-color: (
            igx-color: ('secondary', 500)
            ),
        header-background: (
            igx-color: ("primary", 100)
            ),
        header-text-color: (
            igx-color: ("primary", 600)
            )
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを拡張する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネントテーマに追加するものです。

```scss
// Extending the global light-schema
$custom-light-grid-schema: extend($light-schema,(
    igx-grid: $light-grid-schema
));

// Specifying the palette and schema of the custom grid theme
$custom-grid-theme: igx-grid-theme(
    $palette: $custom-theme-palette,
    $schema: $custom-light-grid-schema
);
```
テーマを上記と同じ方法で含めることに注意してください。

### デモ

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-resize-line-styling-sample" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-resize-line-styling" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-resize-line-styling" >
</code-view>

}

>[!NOTE]
>このサンプルは、「テーマの変更」から選択したグローバル テーマに影響を受けません。

## API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#mixin-igx-grid)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
