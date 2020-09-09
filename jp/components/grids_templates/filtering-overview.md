---
title: Angular フィルタリング概要 | Angular グリッド フィルタリング | Ignite UI for Angular | インフラジスティックス
_description: フィルターを使用した作業の開始。Excel のテーブルと同じように、Ignite UI for Angular Material テーブルでも便利な方法でデータにフィルターをかけられます。
_keywords: angular filter, ignite ui for angular, infragistics, Angular フィルター, インフラジスティックス
---

# @@igComponent のフィルタリング概要

IgniteUI for Angular @@igComponent コンポーネントは、[Quick filtering](filtering.md)、[Excel style filtering](excel_style_filtering.md)、および [Advanced filtering](advanced_filtering.md) の 3 つの異なるフィルタリング タイプを提供します。それらのフィルタリング タイプは指定された基準を満たすレコードのみを表示できるようにします。

#### 設定
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
>You can enable both the [`quickFilter`]({environment:angularApiUrl}/enums/filtermode.html#quickfilter)/[`excelStyleFilter`]({environment:angularApiUrl}/enums/filtermode.html#excelstylefilter) and the advanced filtering user interfaces in the @@igComponent. Both filtering user interfaces will work independently of one another. The final filtered result in the @@igComponent is the intersection between the results of the two filters.

### API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
