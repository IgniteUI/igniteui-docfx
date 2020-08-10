@@if (igxName === 'IgxGrid') {
---
title: Angular 複数列ヘッダー | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI Material UI グリッドを使用して列ヘッダーを共通の階層ヘッダーの下に配置し、それらを複数のヘッダーに結合することで、列ヘッダーのグループ化を開始します。
_keywords: column headers, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular 複数列ヘッダー | Ignite UI for Angular の | インフラジスティックス
_description: Ignite UI Material UI グリッドを使用して列ヘッダーを共通の階層ヘッダーの下に配置し、それらを複数のヘッダーに結合することで、列ヘッダーのグループ化を開始します。
_keywords: column headers, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular 複数列ヘッダー | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI Material UI グリッドを使用して列ヘッダーを共通の階層ヘッダーの下に配置し、それらを複数のヘッダーに結合することで、列ヘッダーのグループ化を開始します。
_keywords: 列ヘッダー, ignite ui for angular, infragistics
_language: ja
---
}

### @@igComponent 複数列ヘッダーの概要

[`@@igxName`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) は、共通の列ヘッダー下で行のグループ化が可能な`複数列ヘッダー`をサポートします。各複数列ヘッダーグループは、マテリアル UI グリッド内でその他複数のグループや列を組み合わせることができます。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-multi-column-headers-iframe" src='{environment:demosBaseUrl}/grid/multi-column-headers' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-multi-column-headers-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-multi-column-headers' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="hierarchical-grid-multi-column-headers-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

`Multi column header` の宣言は列セットを [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) コンポーネントと渡された [`header`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#header) タイトルにラップして行います。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group header="Contact Information">
        <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
        <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
        <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
    </igx-column-group>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID">
    <igx-column-group header="Contact Information">
        <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    </igx-column-group>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="localdata" [height]="'600px'" [width]="'100%'" displayDensity="compact" [allowFiltering]="true">
    <igx-column field="CustomerID" [movable]="true" sortable="true" resizable="true"></igx-column>
        ...
        <igx-column-group header="Location">
            <igx-column field="Address" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="City" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="PostalCode" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="Country" [movable]="true" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" sortable="true" resizable="true"></igx-column>
            <igx-column field="Fax" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
...
</igx-hierarchical-grid>
```
}

ネスト ヘッダーの `n-th` レベルは、上記の宣言に従います。[`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) をネストしてください。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group header="General Information">
        <igx-column [movable]="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column [movable]="true" [pinned]="false" sortable="true" resizable="true" field="ContactName"></igx-column>
            <igx-column [movable]="true" sortable="true" resizable="true" field="ContactTitle"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID">
    <igx-column-group [movable]="true" [pinned]="false" header="General Information">
        <igx-column field="HireDate" dataType="date" [movable]="true" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column field="ID" dataType="number" [movable]="true" [resizable]="true" [filterable]="false"></igx-column>
            <igx-column field="Title" dataType="string" [movable]="true" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Age" dataType="number" [movable]="true" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>            
    </igx-column-group>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="localdata" [height]="'600px'" [width]="'100%'" displayDensity="compact" [allowFiltering]="true">
    <igx-column field="CustomerID" [movable]="true" sortable="true" resizable="true"></igx-column>
    <igx-column-group [movable]="true" [pinned]="false" header="General Information">
        <igx-column field="CompanyName" [movable]="true" sortable="true" resizable="true"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column field="ContactName" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" [movable]="true" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
   
    ...
</igx-hierarchical-grid>
```
}

各 [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) は、[`移動`](column_moving.md), [`ピン固定`](column_pinning.md) と [`非表示`](column_hiding.md) をサポートします。
> [!NOTE]
> 列セットと列グループがある場合、ピン固定は列の一番上の親レベルでのみ可能です。ネストした `column groups` や `columns` のピン固定はできません。<br />
> `columns` と `column groups` 間の移動は、階層の同じレベルで同じ `group` の場合のみです。<br />
> `Columns/column-groups` が現在の `group` でラップされない場合 (**一番上のレベル** `columns` の場合)、表示列全体の移動はできません。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group  [movable]="true" [pinned]="true" header="General Information">
        <igx-column [movable]="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
    </igx-column-group>
    <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
    <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
    <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID">
    <igx-column-group header="Contact Information">
        <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    </igx-column-group>
    <igx-column field="Name" dataType="string" [movable]="true" [sortable]="true" [resizable]="true"></igx-column>
    <igx-column field="Title" dataType="string" [movable]="true" [sortable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [movable]="true" [sortable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="localdata" [height]="'600px'" [width]="'100%'" displayDensity="compact" [allowFiltering]="true">
    <igx-column field="CustomerID" [movable]="true" sortable="true" resizable="true"></igx-column>
    <igx-column-group [movable]="true" [pinned]="false" header="General Information">
        <igx-column field="CompanyName" [movable]="true" sortable="true" resizable="true"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column field="ContactName" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" [movable]="true" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
    ...
</igx-hierarchical-grid>
```
}

### 複数列ヘッダー テンプレート

グリッドの各列グループは個別のテンプレートを持つことができます。列グループは、`igxHeader` ディレクティブで装飾された `ng-template` タグを必要とします。
`ng-template` は、列グループ オブジェクトと共にコンテキストとして提供されています。

```html
...
<igx-column-group header="General Information">
    <ng-template igxHeader let-columnGroup>
        {{ columnGroup.header | uppercase }}
    </ng-template>
    ...
</igx-column-group>
...
```

複数の列グループに対して単一のテンプレートを再利用する場合は、以下のように列グループの [`headerTemplate`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#headertemplate) プロパティを設定できます。

```html
<ng-template #columnGroupHeaderTemplate let-columnGroup>
    {{ columnGroup.header | uppercase }}
</ng-template>

...
<igx-column-group header="General Information" [headerTemplate]="columnGroupHeaderTemplate">
    ...
</igx-column-group>
<igx-column-group header="Address Information" [headerTemplate]="columnGroupHeaderTemplate">
    ...
</igx-column-group>
...
```

> [!NOTE]
> ヘッダーが再テンプレート化され、対応する列グループが移動可能な場合は、テンプレート要素で **draggable** 属性を **false** に設定する必要があり、これにより適用されるイベントをすべて処理できます。

```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```

次のサンプルは、ヘッダー テンプレートを使用して折りたたみ可能な列グループを実装する方法を示しています。

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-multi-column-header-template-iframe" data-src='{environment:demosBaseUrl}/grid/multi-column-header-template' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-multi-column-header-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-column-header-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-multi-column-header-template-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-multi-column-header-template' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-multi-column-header-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-multi-column-header-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="hierarchical-grid-multi-column-header-template-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column-template' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-multi-column-header-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-multi-column-header-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

### スタイル設定

並べ替え動作のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も単純なアプローチに従って、[`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)  を拡張する新しいテーマを作成し、`$header-background`, `$header-text-color`, `$header-border-width`, `$header-border-style` and `$header-border-color` パラメーターを受け取ります。

```scss
$custom-theme: igx-grid-theme(
    $header-background: #e0f3ff,
    $header-text-color: #e41c77,
    $header-border-width: 1px,
    $header-border-style: solid,
    $header-border-color: rgba(0, 0, 0, 0.08)
);
```
最後の手順は、それぞれのテーマを持つコンポーネント mixins を**含める**ことです。 

```scss
@include igx-grid($custom-theme);
```

>[!NOTE]
 >コンポーネントが [`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。

 ```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```

#### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) と [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$light-blue-color: #e0f3ff;
$deep-pink-color: #e41c77;

$custom-palette: igx-palette($primary: $light-blue-color, $deep-pink-color);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。

```scss
$custom-theme: igx-grid-theme(
    $header-background: igx-color($custom-palette, "primary", 500),
    $header-text-color: igx-color($custom-palette, "secondary", 500),
    $header-border-width: 1px,
    $header-border-style: solid,
    $header-border-color: igx-color($custom-palette, "grays", 200)
);
```

>[!NOTE]
>`igx-color` と `igx-palette` は色の生成や取得のための関数です。使い方の詳細については [`パレット`](../themes/palette.md) のトピックをご覧ください。

#### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](../themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`_light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid)) の 1 つを拡張します。  

```scss
// Extending the light grid schema
$custom-grid-schema: extend($_light-grid,
    (
        header-background: (igx-color:('primary', 500)),
        header-text-color: (igx-color:('secondary', 500)),
        header-border-width: 1px,
        header-border-style: solid,
        header-border-color: (igx-color:('grays', 200))
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを拡張する必要があります。これは基本的にカスタム スキーマでコンポーネントをポイントし、その後それぞれのコンポーネントテーマに追加するものです。

```scss
Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-grid: $custom-grid-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: igx-grid-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

@@if (igxName === 'IgxGrid') {
#### デモ

<div class="sample-container loading" style="height:500px">
    <iframe id="multi-column-headers-styling-iframe" src='{environment:demosBaseUrl}/grid/multi-column-headers-styling' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="multi-column-headers-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="multi-column-headers-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
#### デモ

<div class="sample-container loading" style="height:500px">
    <iframe id="treegrid-multi-column-headers-styling-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-multi-column-headers-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-multi-column-headers-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-multi-column-headers-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
#### デモ

<div class="sample-container loading" style="height:500px">
    <iframe id="hierarchical-grid-multi-column-styling-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-multi-column-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-multi-column-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

### API リファレンス
<div class="divider--half"></div>

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
<div class="divider--half"></div>

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)
@@if (igxName === 'IgxGrid') {* [グループ化](groupby.md)}

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)

