@@if(igxName === 'IgxGrid'){
---
title: Angular Grid | 高度なフィルタリング | インフラジスティックス
_description: Angular マテリアル テーブルを使用してデータの高度なフィルターを構成する方法を学びます。グリッドの高度なフィルタリングは、これまで以上に便利で魅力的です。
_keywords: 高度なフィルター, igniteui for angular, インフラジスティックス
_language: ja
---
}
@@if(igxName !== 'IgxGrid'){
---
title: Angular Grid | 高度なフィルタリング | インフラジスティックス
_description: Angular マテリアル テーブルを使用してデータの高度なフィルターを構成する方法を学びます。グリッドの高度なフィルタリングは、これまで以上に便利で魅力的です。
_keywords: 高度なフィルター, igniteui for angular, インフラジスティックス
_language: ja
---
}

# @@igComponent 高度なフィルタリング

高度なフィルタリングは、@@igComponent のような任意の Angular Material テーブルの全列に及ぶフィルタリング条件を持つグループを作成できるダイアログを提供します。

## Angular @@igComponent 高度なフィルタリングの例

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:530px">
    <iframe id="grid-sample-1-iframe" src='{environment:demosBaseUrl}/grid/grid-advanced-filtering' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent 高度なフィルタリングの例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="tree-grid-sample-1-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-advanced-filtering' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent 高度なフィルタリングの例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:630px">
    <iframe id="hierarchical-grid-sample-1-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-advanced-filtering' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent 高度なフィルタリングの例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

<div class="divider--half"></div>

## インタラクション

高度なフィルタリングダイアログを開くには、グリッドツールバーの**高度なフィルタリング**ボタンをクリックする必要があります。高度なフィルターが適用されていない場合、[`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) または [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or) でリンクされたフィルター条件のグループの作成から開始する必要があります。その後、フィルタリング条件またはサブグループを追加できます。 

フィルター条件を追加するには、[`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable) 列のいずれか、列 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) に基づくオペランド、およびオペランドが単項でない場合の値を選択する必要があります。条件が確定すると、条件情報を含むチップが表示されます。チップをホバーまたはクリックすると、チップを変更したり、その直後に別の条件やグループを追加したりできます。

複数のフィルター条件チップを選択すると、グループを作成したりフィルターを削除したりするためのオプションを含むコンテキストメニューが表示されます。選択した条件でグループを作成することを選択した場合、一番上に選択した条件が配置された場所に新しく作成されたグループが表示されます。

グループを選択するために、リンク条件 ([`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) または [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or)) に基づいて色付けされた垂直線をクリックすることもできます。単一のグループが選択されている場合、フィルタリング ロジックを変更、グループ解除、または削除するオプションを含むコンテキスト メニューが表示されます。

フィルタリング条件とグループを作成する準備後にデータをフィルタリングするには、**[適用]** ボタンをクリックします。拡張フィルターを変更後、変更を保存したくない場合は、**[キャンセル]** ボタンをクリックします。**[フィルターのクリア]** ボタンをクリックして、高度なフィルターをクリアすることもできます。

## 使用方法

高度なフィルタリングを有効にするには、[`showToolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showtoolbar) および [`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowadvancedfiltering) 入力プロパティを true に設定します。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true" [showToolbar]="true" [allowAdvancedFiltering]="true">
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" [autoGenerate]="true" [showToolbar]="true" [allowAdvancedFiltering]="true">
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="true" [showToolbar]="true" [allowAdvancedFiltering]="true">
</igx-hierarchical-grid>
```
}

高度なフィルタリングは、[`advancedFilteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#advancedfilteringexpressionstree) 入力プロパティに保存される [`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html) を生成します。[`advancedFilteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#advancedfilteringexpressionstree) プロパティを使用して、高度なフィルタリングの初期状態を設定できます。

```typescript
ngAfterViewInit(): void {
    const tree = new FilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ID',
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        searchVal: 'a',
        ignoreCase: true
    });
    const subTree = new FilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ContactTitle',
        condition: IgxStringFilteringOperand.instance().condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'CompanyName',
        condition: IgxStringFilteringOperand.instance().condition('startsWith'),
        searchVal: 'c',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);
    
    this.@@igObjectRef.advancedFilteringExpressionsTree = tree;
}
```

@@igComponent ツールバーを表示したくない場合は、[`openAdvancedFilteringDialog`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#openadvancedfilteringdialog) および [`closeAdvancedFilteringDialog`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#closeadvancedfilteringdialog) メソッドを使用して、高度なフィルタリング ダイアログをコーディングを使用して開いたり閉じたりできます。

>[!NOTE]
>@@igComponent で [`quickFilter`]({environment:angularApiUrl}/enums/filtermode.html#quickfilter)/[`excelStyleFilter`]({environment:angularApiUrl}/enums/filtermode.html#excelstylefilter) と高度なフィルタリング ユーザー インターフェイスの両方を有効にできます。両フィルタリング ユーザー インターフェイスは、互いに依存せずに機能します。@@igComponent の最終的なフィルター結果は、2 つのフィルターの結果の共通部分です。


## 外部の高度なフィルタリング

上記デモで示されるように、高度なフィルタリング ダイアログは、@@igComponent の上にあるオーバーレイでホストされます。ダイアログのセットアップの準備ができたときに、適用または閉じる操作によってダイアログが非表示になります。ダイアログはスタンドアロン コンポーネントとして使用した場合、常に表示になります。以下のデモでは、高度なフィルタリングダイアログが @@igComponent とは別に宣言されます。

### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:750px">
    <iframe id="grid-sample-2-iframe" src='{environment:demosBaseUrl}/grid/grid-external-advanced-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:750px">
    <iframe id="treegrid-sample-2-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-external-advanced-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:750px">
    <iframe id="hierarchicalgrid-sample-2-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-external-advanced-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchicalgrid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchicalgrid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}

### 使用方法

@@igComponent の外部で動作するように高度なフィルタリングを構成する方法は簡単です。ダイアログを作成して、その [`grid`]({environment:angularApiUrl}/classes/igxadvancedfilteringdialogcomponent.html#grid) プロパティを設定するだけです。

@@if (igxName === 'IgxGrid') {
```html
<igx-advanced-filtering-dialog [grid]="grid1">
</igx-advanced-filtering-dialog>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-advanced-filtering-dialog [grid]="treegrid1">
</igx-advanced-filtering-dialog>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-advanced-filtering-dialog [grid]="hierarchicalgrid1">
</igx-advanced-filtering-dialog>
```
}


<div class="divider--half"></div>


## スタイル設定

高度なフィルタリング ダイアログのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Excel スタイルのフィルタリング ダイアログは、`filtering-row-background` パラメーターを使用して、グリッドのテーマから背景色を取得します。背景を変更するには、カスタム テーマを作成する必要があります。

```scss
$custom-grid: igx-grid-theme(
    $filtering-row-background: #FFCD0F
);
```

ボタン、チップ、ドロップダウン、入力など、高度なフィルタリング ダイアログ内に他のコンポーネントがあるため、それぞれに個別のテーマを作成する必要があります。

```scss
$custom-button: igx-button-theme(
    $disabled-color: gray,
    ...
);

$custom-button-group: igx-button-group-theme(
    $item-background:  #292826,
    ...
);

$custom-input-group: igx-input-group-theme(
    $box-background: #4a4a4a,
    ...
);

$custom-chip: igx-chip-theme(
    $background: #FFCD0F,
    ...
);

$custom-drop-down: igx-drop-down-theme(
    $background-color: #292826,
    ...
);
```

この例では、リストされたコンポーネントのパラメーターの一部のみを変更しましたが、[`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme)、[`igx-button-group-theme`]({environment:sassApiUrl}/index.html#function-igx-button-group-theme)、[`igx-chip-theme`]({environment:sassApiUrl}/index.html#function-igx-chip-theme)、[`igx-drop-down-theme`]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme)、[`igx-input-group-theme`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme) テーマは、それぞれのスタイルを制御するために多数のパラメーターを提供します。

最後の手順は、それぞれのテーマを持つコンポーネント mixins を**含める**ことです。また、高度なフィルタリング ダイアログ内の他の要素のスタイルを追加します。

```scss
@include igx-grid($custom-grid);
igx-advanced-filtering-dialog {
    @include igx-button($custom-button);
    @include igx-button-group($custom-button-group);
    @include igx-input-group($custom-input-group);
    @include igx-chip($custom-chip);
    @include igx-drop-down($custom-drop-down);
    .igx-filter-empty__title {
        color: #FFCD0F
    }
    .igx-advanced-filter__header {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon:hover {
        color: #ffe482
    }
    .igx-filter-tree__expression-actions igx-icon:focus {
        color: #ffe482
    }
    .igx-filter-contextual-menu {
        border: 1px solid #FFCD0F
    }
    .igx-filter-contextual-menu__close-btn {
        position: absolute !important;
        background: #292826 !important;
        border-color: #FFCD0F !important;
    }
    .igx-input-group__input::placeholder {
        color: gray;
    }
}
```

>[!NOTE]
>カスタム テーマが高度なフィルタリング ダイアログにネストされたコンポーネントのみに影響するように、コンポーネントのほとんどの mixins を`igx-advanced-filtering-dialog` 内にスコープします。そうでない場合、アプリケーション内の他のボタン、チップ、入力、ドロップダウンも影響を受けます。

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
    ::ng-deep {
        @include igx-drop-down($custom-drop-down);
        @include igx-grid($custom-grid);
        igx-advanced-filtering-dialog {
            @include igx-button($custom-button);
            @include igx-button-group($custom-button-group);
            @include igx-input-group($custom-input-group);
            @include igx-chip($custom-chip);
            .igx-input-group__input::placeholder {
                color: gray;
            }
            .igx-filter-empty__title {
                color: #FFCD0F
            }
            .igx-advanced-filter__header {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon:hover {
                color: #ffe482
            }
            .igx-filter-tree__expression-actions igx-icon:focus {
                color: #ffe482
            }
            .igx-filter-contextual-menu {
                border: 1px solid #FFCD0F
            }
            .igx-filter-contextual-menu__close-btn {
                position: absolute !important;
                background: #292826 !important;
                border-color: #FFCD0F !important;
            }
        }
    }
}
```

### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) と [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;
$dark-palette: igx-palette($primary: $yellow-color, $secondary: $black-color);
```
次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。 

```scss
$custom-grid: igx-grid-theme(
    $filtering-row-background: igx-color($dark-palette, "secondary", 400)
);

$custom-button: igx-button-theme(
    $disabled-color: igx-color($dark-palette, "secondary", 100),
    ...
);

$custom-button-group: igx-button-group-theme(
    $item-background:  igx-color($dark-palette, "secondary", 400),
    ...
);

$custom-input-group: igx-input-group-theme(
    $box-background: igx-color($dark-palette, "secondary", 200),
    ...
);

$custom-chip: igx-chip-theme(
    $background: igx-color($dark-palette, "primary", 400),
    ...
);

$custom-drop-down: igx-drop-down-theme(
    $background-color: igx-color($dark-palette, "secondary", 400),
    ...
);
```

>[!NOTE]
>`Igx-color` と `igx-palette` は色の生成や取得のための関数です。使い方の詳細については [`パレット`](../themes/palette.md) のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して[**スキーマ**](../themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供される 2 つの定義済みスキーマのいずれかを拡張します。この場合、[`light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid)、[`light-button`]({environment:sassApiUrl}/index.html#variable-_light-button)、[`light-button-group`]({environment:sassApiUrl}/index.html#variable-_light-button-group)、[`light-chip`]({environment:sassApiUrl}/index.html#variable-_light-chip)、[`light-input-group`]({environment:sassApiUrl}/index.html#variable-_light-input-group)、[`light-drop-down`]({environment:sassApiUrl}/index.html#variable-_light-drop-down) です。

```scss
$grid-dark-palette: igx-palette($primary: #11bd7b, $secondary: #e32057, $info: $black-color);

$custom-grid-schema: extend($_light-grid,
    (
        filtering-row-background:(
            igx-color: ("info")
        )
    )
);

$custom-button-schema: extend($_light-button,
    (
        disabled-color:(
            igx-color: ("secondary", 100)
        ),
        ...
    )
);

$custom-button-group-schema: extend($_light-button-group,
    (
        item-background:(
            igx-color: ("secondary", 400)
        ),
        ...
    )
);

$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
            igx-color: ("secondary", 200)
        ),
        ...
    )
);

$custom-chip-schema: extend($_light-chip,
    (
        background:(
            igx-color: ("primary", 400)
        ),
        ...
    )
);

$custom-drop-down-schema: extend($_light-drop-down,
    (
        background-color:(
            igx-color: ("secondary", 400)
        ),
        ...
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) のいずれかを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントをポイントし、その後それぞれのコンポーネント テーマに追加するものです。

```scss
$custom-light-schema: extend($light-schema,(
    igx-grid: $custom-grid-schema,
    igx-button: $custom-button-schema,
    igx-button-group: $custom-button-group-schema,
    igx-input-group: $custom-input-group-schema,
    igx-chip: $custom-chip-schema,
    igx-drop-down: $custom-drop-down-schema
));

$custom-grid: igx-grid-theme(
    $palette: $grid-dark-palette,
    $schema: $custom-light-schema
);

$custom-button: igx-button-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-button-group: igx-button-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-input-group: igx-input-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-chip: igx-chip-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-drop-down: igx-drop-down-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);
```

テーマを上記と同じ方法で含めることに注意してください。

### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:530px">
    <iframe id="grid-advanced-filtering-style-iframe" data-src='{environment:demosBaseUrl}/grid/grid-advanced-filtering-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-advanced-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-advanced-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="treegrid-advanced-filtering-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-advanced-filtering-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-advanced-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-advanced-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:630px">
    <iframe id="hierarchical-grid-advanced-filtering-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-advanced-filtering-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-advanced-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-advanced-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [フィルタリング](filtering.md)
* [Excel スタイル フィルタリング](excel-style-filtering.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [並び替え](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列固定](column-pinning.md)
* [列サイズ変更](column-resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)