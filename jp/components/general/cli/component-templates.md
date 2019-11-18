---
title: コンポーネントおよびシナリオ CLI テンプレート
_description: Ignite UI for Angularで利用可能なすべての CLI テンプレート一覧
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
_language: ja
---

## コンポーネント テンプレート

以下の表に、Ignite UI CLI を使用して生成できる [Ignite UI CLI](../cli-overview.md) コンポーネントを示します。さらに、本ドキュメントには利用可能なデモへのリンクが含まれますが、CLI によって生成されたデモと完全にく同じではないことに注意してください。

| テンプレート          |  コードと説明                                                                         | デモ              |
| ----------------- | --------------------------------------------------------------------------------------------  |------------------- |
|<b>グリッドとリスト</b>|                                                                                              |                    |
|grid               |<code>ig add grid newGrid</code><details>IgxGrid のベーシック テンプレート。</details>                  |自動生成列を含む [IgxGrid](../../grid/grid.md) コンポーネント。 |
|grid-batch-editing |<code>ig add grid-batch-editing newGridBatchEditing</code><details>一括編集を含むサンプル IgxGrid。</details>             |[batch editing](../../grid/batch_editing.md) にトランザクション サービスを使用する [IgxGrid](../../grid/grid.md)。|
|custom-grid        |<code>ig add custom-grid newCustomGrid</code><details>ソート、フィルタリング、編集などのオプション機能を含む IgxGrid。</details>| [IgxGrid](../../grid/grid.md) には、オプション機能 [ソート](../../grid/sorting.md)、[フィルタリング](../../grid/filtering.md)、[セル編集](../../grid/editing.md)、[行編集](../../grid/row_editing.md)、[グループ化](../../grid/groupby.md)、[サイズ変更](../../grid/column_resizing.md)、[選択](../../grid/selection.md)、[ページング](../../grid/paging.md)、[列ピン固定](../../grid/column_pinning.md)、[列移動](../../grid/column_moving.md)、[列の非表示](../../grid/column_hiding.md) などが含まれます。|
|grid-summaries     |<code>ig add grid-summaries newGridSummaries</code><details>集計機能を含む IgxGrid。</details>| [集計](../../grid/summaries.md) を含む [IgxGrid](../../grid/grid.md)。|
|grid-multi-column-headers|<code>ig add grid-multi-column-headers newGridMultiColumnHeaders</code><details>複数のヘッダー列を含む IgxGrid。</details> | [multi-column headers](../../grid/multi_column_headers.md) を含む [IgxGrid](../../grid/grid.md)。  |
|tree grid          |<code>ig add custom-tree-grid newCustomTreeGrid</code><details>ソート、フィルタリング、行編集などのオプション機能を含む IgxTreeGrid。</details> |[IgxTreeGrid](../../treegrid/tree_grid.md) には、オプション機能 [ソーティング](../../treegrid/sorting.md)、[フィルタリング](../../treegrid/filtering.md)、[セル編集](../../treegrid/editing.md)、[行編集](../../treegrid/row_editing.md)、[サイズ変更](../../treegrid/column_resizing.md)、[行選択](../../treegrid/selection.md)、[ページング](../../treegrid/paging.md)、[列ピン固定](../../treegrid/column_pinning.md)、[列移動](../../treegrid/column_moving.md)、[列の非表示](../../treegrid/column_hiding.md) などが含まれます。|
|list               |<code>ig add list newList</code><details>ベーシック  IgxList。</details>                               |検索とフィルタリング ロジックを含む [IgxList](../../list.md)。|
|combo              |<code>ig add combo newCombo</code><details>テンプレートを含むベーシック  IgxCombo。</details>            |カスタム [templating](../../combo_templates.md)を含む |[IgxCombo](../../combo.md)。|
|<b>チャート</b>      |                                                                                               |
|category chart     | <code>ig add category-chart newCategoryChart</code><details>チャート タイプ セレクターを備えたベーシック カテゴリチャート。</details>| チャート タイプ セレクターを含むベーシック [category chart](../../category-chart.md)。|
|financial chart    | <code>ig add financial-chart newFinancialChart</code><details>自動ツールバーとタイプ選択を含むベーシック ファイナンシャル チャート。</details>| 自動ツールバーとタイプ選択を含むベーシック [financial chart](../../financial-chart.md)。|
|<b>ゲージ</b>|                                                                                                     |
|bullet graph       |<code>ig add bullet-graph newBulletGraph</code><details>さまざまなアニメーションを含む IgxBulletGraph。</details>| さまざまなアニメーションを含む [IgxBulletGraph](../../bullet-graph.md)。|
|linear gauge       |<code>ig add linear-gauge newLinearGauge</code><details>さまざまなアニメーションを含む IgxLinearGauge</details>| さまざまなアニメーションを含む  [IgxLinearGauge](../../linear-gauge.md)。|
|radial gauge       |<code>ig add radial-gauge newRadialGauge</code><details>さまざまなアニメーションを含む IgxRadialGauge。</details>| さまざまなアニメーションを含む [IgxRadialGauge](../../radial-gauge.md)。|
|<b>レイアウト</b>     |                                                                                               |
|carousel           | <code>ig add carousel newCarousel</code><details>ベーシック IgxCarousel.</details>                 | 一連の画像を循環する [IgxCarousel](../../carousel.md)。                 |
|tabs               | <code>ig add tabs newTabs</code><details>基本 IgxTabs.</details>                             | 3 つのカスタマイズされたタブグループを含む [IgxTabs](../../tabs.md) コンポーネント。                             |
|bottom-nav         | <code>ig add bottom-nav newBottomNav</code><details>3 項目の下部ナビゲーション テンプレート。</details> | 3 項目の下部 [navbar](../../navbar.md) テンプレート。|
|<b>データ入力と表示</b>|
|chip               | <code>ig add chip newChip</code><details>ベーシック IgxChip。</details>                             | igx-chips-area 内の [IgxChip](../../chip.md) コンポーネント。                             |
|dropdown           | <code>ig add dropdown newDropDown</code><details>ベーシック IgxDropDown。</details>                 | 項目のリストを表示するベーシック [IgxDropDown](../../drop_down.md)。                 |
|select (v4.1.0)    | <code>ig add select newSelect</code><details>ベーシック IgxSelect.</details>| 項目のリストを表示するベーシック [IgxSelect](../../select.md)。|
|select (v4.1.0)    | <code>ig add select-groups newGroupsSelect</code><details>グループ選択。</details>       | グループ項目を表示する [IgxSelect](../../select.md)。       |
|select (v4.1.0)    | <code>ig add select-in-form newFormSelect</code><details>フォームの IgxSelect。</details>       | フォームで使用する [IgxSelect](../../select.md) コンポーネント。       |
|input group        | <code>ig add input-group newInputGroup</code><details>ベーシック IgxInputGroup フォーム ビュー。</details>| [IgxInputGroup](../../input_group.md) で作成したフォーム。|
|<b>インタラクション</b>|
|dialog             | <code>ig add dialog newDialog</code><details>ベーシック IgxDialog.</details>                       | 標準の確認ダイアログとして使用される [IgxDialog](../../dialog.md)。                       |
|tooltip            | <code>ig add tooltip newTooltip</code><details>フルカスタマイズ可能なツールチップ。</details>        | [IgxTooltip](../../tooltip.md) で作成されるベーシック ツールチップ。        |
|<b>スケジュール</b>  |                                                                                               |
|date-picker        | <code>ig add date-picker newDatePicker</code><details>ベーシック IgxDatePicker.</details>          | 一方向データ バインディングを含むベーシック [IgxDatePicker](../../date_picker.md)。          |
|time-picker        | <code>ig add time-picker newTimePicker</code><details>ベーシック IgxTimePicker.</details>          | 初期値設定と一方向データ バインディングを含むベーシック [IgxTimePicker](../../time_picker.md)。           |
|calendar           | <code>ig add calendar newCalendar</code><details>単一選択を含む IgxCalendar。</details> | 一方向データ バインディングを含むベーシック [IgxDatePicker](../../date_picker.md)。          |


## シナリオ テンプレート

| テンプレート          |  コードとテンプレート                                                                         | デモ               |
| ----------------- | --------------------------------------------------------------------------------------------  |------------------- |
|awesome-grid        | <code>ig add awesome-grid newAwesomeGrid</code><details>カスタムセルテンプレートを含む IgxGrid。</details>          | セル テンプレートを含み、コントロールをセルに埋め込める [IgxGrid](../../grid/grid.md)。          |
|crm-grid        | <code>ig add crm-grid newCrmGrid</code><details>カスタム検索実装を含む IgxGrid。</details>          | カスタム検索実装を含む [IgxGrid](../../grid/grid.md)。           |
|fintech-grid        | <code>ig add fintech-grid newFinTechGrid</code><details>毎秒数千のライブ更新が可能な IgxGrid。</details>          | [IgxGrid](../../grid/live_data.md) 1 秒あたり数千の更新を処理するライブ更新デモ。           |
|fintech-tree-grid        | <code>ig add fintech-tree-grid newFinTechTreeGrid</code><details>毎秒数千のライブ更新が可能な IgxGrid </details>          | [IgxTreeGrid](../../treegrid/live_data.md) 1 秒あたり数千の更新を処理するライブ更新デモ。          |
|login           | <code>ig add login newLogin</code><details>IgxInputGroup で作成された登録およびログインフォーム。</details> | [IgxInputGroup](../../input_group.md) で作成された登録およびログインフォーム。          |
|weather-forecast           | <code>ig add weather-forecast newWeatherForecast</code><details>テンプレートを含む igxExpansionPanel.</details> | テンプレートは [IgxExpansionPanel](../../expansion_panel.md) を使用して、毎日の天気予報の詳細を表示します。          |
