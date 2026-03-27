---
title: Angular Hierarchical Grid の列非表示 - Ignite UI for Angular
_description: ユーザーが Ignite Material UI テーブルの UI で列の表示状態を変更できるようにする列非表示機能の使用方法。
_keywords: column hiding, ignite ui for angular, infragistics, 列非表示
_license: commercial
_language: ja
---



# Angular Hierarchical Grid の列非表示

Ignite UI for Angular Hierarchical Grid は、[`IgxColumnHidingDirective`]({environment:angularApiUrl}/classes/igxcolumnhidingdirective.html) のある [`IgxColumnActionsComponent`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html) を提供し、ユーザーがユーザー インターフェイスを介して、または Angular コンポーネントを使用して列の非表示を実行できるようにします。Material UI Grid には組み込み列非表示 UI があり、これを Hierarchical Grid のツールバーから使用して列の表示状態を変更できます。更に別のコンポーネントとして列非表示 UI を定義してページの必要な場所に配置できます。

## Angular Hierarchical Grid 列非表示の例





<code-view style="height:570px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-hiding/" alt="Angular Hierarchical Grid 列非表示の例">
</code-view>

<div class="divider--half"></div>



## Hierarchical Grid の設定

Hierarchical Grid を作成してからデータをバインドします。列でフィルタリングとソートも有効にします。





```html
<igx-hierarchical-grid class="hgrid" [data]="localdata"
        [height]="'560px'" [width]="'100%'" columnWidth="200px" [allowFiltering]="true" #hGrid>

    <igx-column field="Artist" [sortable]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Photo">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column field="Grammy Nominations" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column field="Grammy Awards" [sortable]="true"></igx-column>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" #layout1 >
        <igx-column field="Album" [sortable]="true"></igx-column>
        <igx-column field="Launch Date" [sortable]="true"></igx-column>
        <igx-column field="Billboard Review" [sortable]="true"></igx-column>
        <igx-column field="US Billboard 200" [sortable]="true"></igx-column>
        <igx-row-island [key]="'Songs'" [autoGenerate]="false">
            <igx-column field="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released"></igx-column>
            <igx-column field="Genre"></igx-column>
        </igx-row-island>
    </igx-row-island>

    <igx-row-island [key]="'Tours'" [autoGenerate]="false">
        <igx-column field="Tour"></igx-column>
        <igx-column field="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>

</igx-hierarchical-grid>
```



## ツールバーの列非表示 UI

定義済みの列非表示 UI は、Hierarchical Grid のツールバーの [`IgxDropDownComponent`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) 内に配置されます。列非表示の UI をこのドロップダウンを使用して表示/非表示にできます。
これには、Hierarchical Grid の [`IgxGridToolbarActionsComponent`]({environment:angularApiUrl}/classes/igxgridtoolbaractionscomponent.html) および [`IgxGridToolbarHidingComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html) の両方を設定することだけです。ツールバーにタイトルを追加するには、[`IgxGridToolbarTitleComponent`]({environment:angularApiUrl}/classes/igxgridtoolbartitlecomponent.html) を設定し、Hierarchical Grid のラッパーにカスタム スタイルを設定します。



```html
<!--columnHiding.component.html-->
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata">
    <igx-grid-toolbar>
            <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
    ...
 </igx-hierarchical-grid>
</div>
```

```css
/* columnHiding.component.css */
.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}
```









Hierarchical Grid にはツールバーの列非表示 UI に便利なプロパティがあります。
`igx-grid-toolbar-hiding` の [`title`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html#title) プロパティを使用して、ツールバーのドロップダウン ボタン内に表示されるタイトルを設定します。




```html
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata">
    <igx-grid-toolbar>
            <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding #hidingActionRef title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
 </igx-hierarchical-grid>
</div>
```



IgxGridToolbarHidingComponent の [`columnsAreaMaxHeight`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html#columnsAreaMaxHeight) プロパティを使用して、列操作を含む領域の最大高さを設定できます。このように、多くの操作があり、それらのすべてがコンテナーに収まらない場合は、スクロールバーが表示され、必要な操作にスクロールできます。

```typescript
// columnHiding.component.ts

public ngAfterViewInit() {
    this.hidingActionRef.columnsAreaMaxHeight = "200px";
}
```

列非表示 UI の拡張機能セットを使用するために、IgxColumnActionsComponent の [`columnsAreaMaxHeight`]({environment:angularApiUrl}/classes/IgxColumnActionsComponent.html#columnsAreaMaxHeight) プロパティを使用できます。アプリケーションの要件に基づいて使用できます。

このトピックのはじめにあるコードの結果は、列非表示の例セクションで確認できます。



## スタイル設定

列操作コンポーネントのスタイル設定を開始するには、すべてのテーマ関数とコンポーネント ミックスインが存在するインデックス ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単なアプローチを使用して、[`column-actions-theme`]({environment:sassApiUrl}/themes#function-column-actions-theme) を拡張し、`$title-color` および `$background-color` パラメーターを受け取る新しいテーマを作成します。

```scss
$custom-column-actions-theme: column-actions-theme(
  $background-color: #292826,
  $title-color: #ffcd0f
);
```

ご覧のように `column-actions-theme` は列操作コンテナーの色のみを制御しますが、ボタン、チェックボックス、内部の入力グループには影響しません。ボタンのスタイルも設定したい場合、新しいボタン テーマを作成します。

```scss
$custom-button: flat-button-theme(
  $foreground: #292826, 
  $disabled-foreground: rgba(255, 255, 255, .54)
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/palettes#function-palette) および [`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックをご覧ください。

この例では、フラットボタンのテキストの色とボタンの無効な色のみを変更しましたが、[`button-theme`]({environment:sassApiUrl}/themes#function-button-theme) の方がより多くの方法を提供します。ボタンのスタイルを制御するパラメーター。

最後にそれぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。

```scss
:host {
  @include tokens($custom-column-actions-theme);
  
  .igx-column-actions {
    @include tokens($custom-button);
  }
}
```

>[!NOTE]
>作成した **flat-button-theme** を `.igx-column-actions` 内に含めて、列を非表示にするボタンのみにスタイルを設定します。 そうでない場合は、グリッド内の他のボタンも影響を受けます。

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、列アクション コンポーネント内のコンポーネント (ボタン、チェックボックスなど) に対して `::ng-deep` を使用してこのカプセル化を`解除する`必要があります。

```scss
:host {
  @include tokens($custom-column-actions-theme);

  ::ng-deep {
    .igx-column-actions {
      @include tokens($custom-button);
    }
  }
}
```

### デモ





<code-view style="height:570px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-column-hiding-style/" >
</code-view>

<div class="divider--half"></div>


## API リファレンス



このトピックでは、Hierarchical Grid のツールバーの定義済みの列非表示 UI の使用方法について学びました。


以下は、列非表示 UI のその他の API です。

- [IgxColumnActionsComponent]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html)
- [IgxColumnActionsComponent スタイル]({environment:sassApiUrl}/themes#function-column-actions-theme)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

[`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) プロパティ:

- [hiddenColumnsCount]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#hiddenColumnsCount)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) プロパティ:

- [disableHiding]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disableHiding)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) プロパティ:

- [showProgress]({environment:angularApiUrl}/classes/IgxGridToolbarComponent.html#showProgress)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) コンポーネント:

- [IgxGridToolbarTitleComponent]({environment:angularApiUrl}/classes/igxgridtoolbartitlecomponent.html)
- [IgxGridToolbarActionsComponent]({environment:angularApiUrl}/classes/igxgridtoolbaractionscomponent.html)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) メソッド:

[`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) イベント:

- [columnVisibilityChanged]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnVisibilityChanged)

[IgxRadioComponent]({environment:angularApiUrl}/classes/igxradiocomponent.html)

スタイル:

- [IgxHierarchicalGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)
- [IgxRadioComponent スタイル]({environment:sassApiUrl}/themes#function-radio-theme)

## その他のリソース

<div class="divider--half"></div>

- [Hierarchical Grid 概要](hierarchical-grid.md)
- [仮想化とパフォーマンス](virtualization.md)
- [フィルタリング](filtering.md)
- [ページング](paging.md)
- [並び替え](sorting.md)
- [集計](summaries.md)
- [列のピン固定](column-pinning.md)
- [列のサイズ変更](column-resizing.md)
- [選択](selection.md)


<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
