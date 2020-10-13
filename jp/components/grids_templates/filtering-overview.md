---
title: Angular フィルタリング概要 | Angular グリッド フィルタリング | Ignite UI for Angular | インフラジスティックス
_description: フィルターを使用した作業の開始。Excel のテーブルと同じように、Ignite UI for Angular Material テーブルでも便利な方法でデータにフィルターをかけられます。
_keywords: angular filter, ignite ui for angular, infragistics, Angular フィルター, インフラジスティックス
---

# @@igComponent のフィルタリング概要

IgniteUI for Angular @@igComponent コンポーネントは、[クイック フィルタリング](filtering.md)、[Excel スタイル フィルタリング](excel_style_filtering.md)、および[高度なフィルタリング](advanced_filtering.md)の 3 つの異なるフィルタリング タイプを提供します。それらのフィルタリング タイプは指定された基準を満たすレコードのみを表示できるようにします。

## 設定
フィルタリングが有効かどうか、およびどのフィルタリング モードを使用するかを指定するために、@@igComponent は次のブール プロパティを公開します - [`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering)、[`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowadvancedfiltering)、[`filterMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filtermode) と [`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable)。

**[allowFiltering]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering)** プロパティを使用して、以下のオプションを指定できます:
- **false** - 対応する列のフィルタリングが無効になります /デフォルト値/。
- **true** - 対応する列のフィルタリングが有効になります。

**[allowAdvancedFiltering]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowadvancedfiltering)** プロパティを使用して、以下のオプションを指定できます:
- **false** - 対応するグリッドのフィルタリングが無効になります /デフォルト値/。
- **true** - 対応するグリッドのフィルタリングが有効になります。

**[filterMode]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filtermode)** プロパティを使用して、以下のオプションを指定できます:
- **quickFilter** - 簡易なフィルタリング UI /デフォルト値/。 
- **excelStyleFilter** - Excel のようなフィルタリング UI。

**[filterable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable)** プロパティを使用して、以下のオプションを指定できます:
- **true** - 対応する列のフィルタリングが有効なになります /デフォルト値/。
- **false** - 対応する列のフィルタリングが無効になります。


```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" dataType="string"></igx-column>
    <igx-column field="Price" [dataType]="'number'" [filterable]="false">
</@@igSelector>
```

ただし、[高度なフィルタリング](advanced_filtering.md)を有効にするには、[`showToolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showtoolbar) および [`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowadvancedfiltering) 入力プロパティを `true` に設定します。

```html
<@@igSelector [data]="data" [autoGenerate]="true" [showToolbar]="true" [allowAdvancedFiltering]="true">
</@@igSelector>
```

>[!NOTE]
>@@igComponent で [`quickFilter`]({environment:angularApiUrl}/enums/filtermode.html#quickfilter)/[`excelStyleFilter`]({environment:angularApiUrl}/enums/filtermode.html#excelstylefilter) と高度なフィルタリング ユーザー インターフェイスの両方を有効にできます。両フィルタリング ユーザー インターフェイスは、互いに依存せずに機能します。@@igComponent の最終的なフィルター結果は、2 つのフィルター結果の共通部分です。

## API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列ピン固定](column_pinning.md)
* [列サイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
