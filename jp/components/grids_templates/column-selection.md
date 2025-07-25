@@if (igxName === 'IgxGrid') {
---
title: Angular Grid の列選択 - Ignite UI for Angular
_description: Ignite UI for Angular Data Grid で列選択を構成する方法を説明します。これにより、グリッドのインタラクションがより簡単かつ高速になります。
_keywords: column selection, igniteui for angular, 列選択, infragistics, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid の列選択 - Ignite UI for Angular
_description: Ignite UI for Angular Tree Grid で列選択を構成する方法を説明します。これにより、グリッドのインタラクションがより簡単かつ高速になります。。
_keywords: column selection, igniteui for angular, 列選択, infragistics, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid の列選択 - Ignite UI for Angular
_description: Ignite UI for Angular Hierarchical Grid で列選択を構成する方法を説明します。これにより、グリッドのインタラクションがより簡単かつ高速になります。
_keywords: column selection, igniteui for angular, 列選択, infragistics, インフラジスティックス
_language: ja
---
}

# Angular @@igComponent 列選択
列選択機能は、シングルク リックで列全体を選択する簡単な方法を提供します。特定の列の重要性を強調するために、ヘッダー セルとその下のすべてにフォーカスします。この機能は豊富な [`API`]({environment:angularApiUrl}) を備えて選択状態の操作、選択した部分からのデータ抽出、データ分析操作、可視化が可能になります。

## Angular 列選択の例
<div class="divider--half"></div>

以下のサンプルは、@@igComponent の**列選択**動作の 3 つのタイプを示します。使用可能な各選択モードを有効にするには、以下の [列選択] ドロップダウンを使用します。
@@if (igxName === 'IgxGrid') {
*_Contact Title_、_City_、および _Address_ 列の選択が無効になっています。
}
@@if (igxName === 'IgxTreeGrid') {
*_Units_、_Unit Price_ および _Delivered_ 列の選択が無効になっています。
}
@@if (igxName === 'IgxHierarchicalGrid') {
*_Photo_ および _Debut_ 列の選択が無効になっています。
}


<code-view style="height:570px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/@@igDemoBasePath/column-selection" alt="Angular 列選択の例">
</code-view>

<div class="divider--half"></div>

## 基本的な使用方法

列選択機能は、[GridSelectionMode]({environment:angularApiUrl}/enums/gridselectionmode.html) 値を受け取る [`columnSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnSelection) 入力によって有効にすることができます。

## インタラクション
デフォルトの選択モードは `none` です。`single` または `multiple` に設定されると、すべての列は [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) になります。列を選択するには、列をクリックして [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected) としてマークします。列が選択不可な場合、ホバー時に選択スタイルはヘッダーに適用されません。

> [!NOTE]
> [`複数列ヘッダー`](multi-column-headers.md) は [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) 入力に反映されません。その子の 1 つ以上で選択動作が有効な場合、[`IgxColumnGroupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) は [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) です。さらに、すべての `selectable` 子孫が [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected) である場合、コンポーネントは [`selected`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected) としてマークされます。

@@if (igxName === 'IgxGrid') {
*_Country Information_ 列グループでは、_City_ 列および _Postal code_ 列のみを選択できます。
}
@@if (igxName === 'IgxTreeGrid') {
*_Personal Details_ 列グループでは、_ID_ 列および _Title_ 列のみを選択できます。
}
@@if (igxName === 'IgxHierarchicalGrid') {
*_Location_ 列グループでは、_City_ 列のみを選択できます。
}


<code-view style="height:570px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/@@igDemoBasePath/column-group-selection" >
</code-view>

<div class="divider--half"></div>

## キーボードの組み合わせ

> [!NOTE]
> キーボードの組み合わせは、グリッドの [`columnSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnselection) 入力が [`multiple`]({environment:angularApiUrl}/enums/gridselectionmode.html#multiple) に設定されている場合にのみ使用できます。

**列の選択**機能のキーボード ナビゲーションには 2 つのオプションがあります。
- 複数列選択 - <kbd>Ctrl</kbd> キーを押しながら、すべての**選択可能な**ヘッダー セルを<kbd>クリック</kbd>。
- 範囲列の選択 - <kbd>Shift</kbd> キーを押しながら + <kbd>クリック</kbd>、間にあるすべての**選択可能な**列を選択します。

## API 操作
**API** は、**非表示**列に関していくつかの追加機能を提供し、対応する **setter** を設定することにより、すべての**非表示**列を [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected) としてマークできます。

> [!NOTE]
> 上記は [`IgxColumnGroupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) にも適用されますが、[`selected`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected) プロパティを変更する場合、その子孫の状態を変更します。

API 操作の詳細については、[`API リファレンス`](#api-references) セクションを参照してください。

## スタイル設定

スタイル設定オプションに移動する前に、core ジュールとすべてのコンポーネント ミックスインをインポートする必要があります。
```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

>[!NOTE]
>[`行選択`](row-selection.md)と[`列選択`](column-selection.md)は個別に操作できないことに注意してください。同じ`変数`に依存します。

**選択**と**ホバー**のスタイル設定を変更します。<br/>
最も簡単な方法は、カスタム **テーマ**を定義する方法です。

@@if (igxName === 'IgxTreeGrid') {
```scss
$custom-grid-theme: grid-theme(
  $row-selected-background: #011627,
  $row-selected-text-color: #ecaa53,
  $row-selected-hover-background: #011627,
  $header-selected-text-color: #ecaa53,
  $header-selected-background: #011627,
  $expand-icon-color: #ecaa53,
  $expand-icon-hover-color: #b64b80
);
```
}
@@if (igxName !== 'IgxTreeGrid') {
```scss
$custom-grid-theme: grid-theme(
  $row-selected-background: #011627,
  $row-selected-text-color: #ecaa53,
  $row-selected-hover-background: #011627,
  $header-selected-text-color: #ecaa53,
  $header-selected-background: #011627
);
```
}

[`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) はいくつかのパラメーターを受け入れますが、選択したすべての列の外観を変更するのは以下の 5 つです。
- **$row-selected-background**- 選択した部分の背景を設定します。
- **$row-selected-text-color** - 選択した部分のテキスト色を設定します。
- **$row-selected-hover-background** - ホバーされたセルまたは複数のセルの色を設定します。
- **$header-selected-text-color** - 選択した列ヘッダーのテキスト色を設定します。 
- **$header-selected-background** - 選択した列ヘッダーの背景色を設定します。


### CSS 変数の使用
最後にカスタム `igx-grid` テーマを含めます。

```scss
@include css-vars($custom-grid-theme)
```

### デモ


<code-view style="height:570px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/@@igDemoBasePath/column-selection-styles" >
</code-view>

>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。
<div class="divider--half"></div>

# <a name="api-references"></a>API リファレンス
<div class="divider--half"></div>
以下は、列選択 UI のその他の API です。

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumnomponent.html)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) プロパティ:
* [columnSelection]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnselection)
* [selectedColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectedColumns)
* [selectColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectColumns)
* [deselectColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#deselectColumns)
* [selectAllColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectAllColumns)
* [deselectAllColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#deselectAllColumns)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumnomponent.html) プロパティ:
* [selectable]({environment:angularApiUrl}/classes/IgxColumnComponent.html#selectable)
* [selected]({environment:angularApiUrl}/classes/IgxColumnComponent.html#selected)

[`IgxColumnGrpupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) プロパティ:
* [selectable]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selectable)
* [selected]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) イベント:
* [onColumnsSelectionChange]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onColumnsSelectionChange)

## その他のリソース

* [@@igComponent 概要](@@igMainTopic.md)
* [選択](selection.md)
* [セル選択](cell-selection.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [仮想化とパフォーマンス](virtualization.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
