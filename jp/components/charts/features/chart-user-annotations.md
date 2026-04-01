---
title: Angular チャートのユーザー注釈 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular チャートのユーザー注釈
_keywords: Angular Charts, User Annotations, Infragistics, Angular チャート, ユーザー注釈, インフラジスティックス
mentionedTypes: ["DataChart", "UserAnnotationLayer", "UserStripAnnotation", "UserSliceAnnotation", "UserPointAnnotation", "Toolbar", "UserAnnotationInformation", "SeriesViewer"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular チャートのユーザー注釈レイヤー <label class="badge badge--preview">PREVIEW</label>

Ignite UI for Angular では、ユーザー注釈機能を使用して、実行時に [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) にスライス注釈、ストリップ注釈、ポイント注釈を追加できます。これにより、エンドユーザーは、スライス注釈を使用して会社の四半期レポートなどの単一の重要イベントを強調したり、ストリップ注釈を使用して期間を持つイベントを示したりするなど、プロットに詳細を追加できます。ポイント注釈またはこれら 3 つの任意の組み合わせを使用して、プロットされたシリーズ上の個々のポイントを呼び出すこともできます。

これは、[`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) のデフォルトのツールと統合されています。このトピックでは、[`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) を使用してチャートのプロット領域にユーザー注釈を追加する方法と、これらのユーザー注釈をプログラムから追加する方法を、例と共に解説します。

<code-view style="height: 500px" alt="Angular 近似曲線の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/user-annotation-layer"
                                                 github-src="charts/data-chart/user-annotation-layer">
</code-view>


> \[!Note]
> この機能は X 軸と Y 軸をサポートするように設計されており、現在、ラジアル軸やアンギュラー軸はサポートされていません。

## Toolbar でユーザー注釈を使用する

[`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) には、「Annotate Chart」 と 「Delete Note」 という 2 つのツールを含む Annotations メニュー項目が用意されています。このメニュー項目を表示するには、対象のチャートで [`isUserAnnotationsEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#isUserAnnotationsEnabled) プロパティを **true** に設定する必要があります。

開いた後に表示される 「Annotate Chart」 オプションを使用すると、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) のプロット領域に注釈を付けることができます。追加できる注釈はスライス注釈、ストリップ注釈、ポイント注釈です。X 軸または Y 軸のラベルをクリックすると、スライス注釈を追加できます。プロット領域をクリックしてドラッグすることで、ストリップ注釈を追加できます。また、チャートにプロットされたシリーズ内のポイントをクリックして、ポイント注釈を追加することもできます。

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-create.gif"
alt="Angular user-annotation-create"/>

以前に追加した注釈を削除するには、\[Delete Note] メニュー項目を選択した後、スライスまたは ストリップのユーザー注釈に対応する軸注釈、またはポイントのユーザー注釈に対応するデータ ポイントをクリックします。

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-delete.gif"
alt="Angular user-annotation-delete"/>

`XamToolbar` を使用してこれらのユーザー注釈を追加すると、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) は `UserAnnotationInformationRequested` イベントを発生させ、そこでユーザー注釈に関する追加情報を提供できます。このイベント引数には `AnnotationInfo` プロパティがあり、追加される注釈のさまざまな要素を構成可能な [`IgxUserAnnotationInformation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html) オブジェクトを返します。

以下の表は、[`IgxUserAnnotationInformation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html) で構成可能なさまざまなプロパティの詳細を示しています。

| プロパティ | タイプ | 説明 |
|------------|---------|-------------|
|[`annotationData`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationData)|`string`|このプロパティは、ユーザー注釈に追加情報を提供するためのものです。このプロパティは、`UserAnnotationToolTipContentUpdating` イベントと組み合わせて使用され、注釈のツールチップに追加情報を表示するよう設計されています。|
|[`annotationId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationId)|`string`|この読み取り専用プロパティは、ユーザー注釈の一意の文字列 ID を返します。|
|[`badgeColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#badgeColor)|`string`|このプロパティは、ユーザー注釈のバッジに使用する色を取得または設定します。|
|[`badgeImageUri`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#badgeImageUri)|`string`|このプロパティは、ユーザー注釈のバッジに使用する画像へのパスを取得または設定します。|
|[`dialogSuggestedXLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#dialogSuggestedXLocation)|`double`|このプロパティは、ユーザー注釈が追加された位置に基づいて、ダイアログを表示する推奨 X 座標を取得します。|
|[`dialogSuggestedYLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#dialogSuggestedYLocation)|`double`|このプロパティは、ユーザー注釈が追加された位置に基づいて、ダイアログを表示する推奨 Y 座標を取得します。|
|[`label`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#label)|`string`|このプロパティは、ユーザー注釈に表示するラベルを取得または設定します。|
|[`mainColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#mainColor)|`string`|このプロパティは、ユーザー注釈の背景を塗りつぶすために使用する色を取得または設定します。|

`UserAnnotationInformationRequested` イベントで注釈情報を更新した後、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) の [`finishAnnotationFlow`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#finishAnnotationFlow) メソッドを呼び出して注釈の作成を完了し、変更を確定する必要があります。あるいは、[`cancelAnnotationFlow`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#cancelAnnotationFlow) を呼び出して注釈の [`annotationId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationId) を渡すことで注釈の作成をキャンセルすることもできます。注釈の [`annotationId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationId) は、前述のように、`UserAnnotationInformationRequested` イベントの引数の AnnotationInfo パラメーターから取得できます。これにより、プロット領域から注釈が削除されます。

## ユーザー注釈をプログラムで使用する

[`IgxUserAnnotationLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html) をプログラムで使用する場合、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) に対して 2 つのメソッドを呼び出し、ユーザー注釈の追加または削除を行えるモードに切り替えることができます。これらのメソッドは [`startCreatingAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startCreatingAnnotation) と [`startDeletingAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startDeletingAnnotation) です。

[`startCreatingAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startCreatingAnnotation) を呼び出した後は、X または Y 軸のラベルをクリックしてスライス注釈を追加したり、プロット領域をクリックしドラッグしてからマウスボタンを離してストリップ注釈を追加したり、チャート内のシリーズ上のデータ ポイントをクリックしてポイント注釈を追加したりできます。

これらのユーザー注釈のいずれかを追加すると、`UserAnnotationInformationRequested` イベントが発生し、ユーザー注釈に関する詳細情報を提供できます。このイベント引数には `AnnotationInfo` プロパティがあり、追加される注釈のさまざまな要素を構成可能な [`IgxUserAnnotationInformation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html) オブジェクトを返します。

`UserAnnotationInformationRequested` イベントで注釈情報を更新した後、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) の [`finishAnnotationFlow`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#finishAnnotationFlow) メソッドを呼び出して注釈の作成を完了し、変更を確定する必要があります。あるいは、[`cancelAnnotationFlow`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#cancelAnnotationFlow) を呼び出して注釈の [`annotationId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationId) を渡すことで注釈の作成をキャンセルすることもできます。注釈の [`annotationId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationId) は、前述のように、`UserAnnotationInformationRequested` イベントの引数の AnnotationInfo パラメーターから取得できます。これにより、プロット領域から注釈が削除されます。

ユーザー注釈がチャートに追加されると、[`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) コレクションに [`IgxUserAnnotationLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html) として表示されます。[`IgxUserAnnotationLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html) には、プロット領域に追加された注釈の種類に応じて [`IgxUserSliceAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxusersliceannotation.html)、[`IgxUserStripAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserstripannotation.html)、および [`IgxUserPointAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserpointannotation.html) 要素を保存できる [`annotations`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#annotations) コレクションがあります。

## UserAnnotationToolTip

各ユーザー注釈は、マウス ホバー時にツールチップを表示し、さらに詳細な情報を提供できます。

チャートは `UserAnnotationToolTipContentUpdating` イベントを公開しており、ツールチップが表示される際にその内容を更新できます。このイベント引数には `Content` と `AnnotationInfo` の 2 つのプロパティがあります。

ツールチップは `UserAnnotationInformationRequested` イベントと連動する設計になっており、そのイベントで [`annotationData`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserbaseannotation.html#annotationData) に設定した追加情報を、ツールチップ表示時にも利用できます。`UserAnnotationToolTipContentUpdating` イベントのイベント引数の `AnnotationInfo` プロパティは、そのイベントで変更できる `UserAnnotationInformationRequested` の `AnnotationInfo` プロパティと同じインスタンスになります。これにより、ユーザー注釈の作成時に提供された情報を活用し、ツールチップ内にさらに多くの情報を提供できるようになります。

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

- [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).[`isUserAnnotationsEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#isUserAnnotationsEnabled)
- [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).`SeriesViewer.UserAnnotationInformationRequested`
- [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).`SeriesViewer.userAnnotationToolTipContentUpdating`
- [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).[`cancelAnnotationFlow`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#cancelAnnotationFlow)
- [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).[`startCreatingAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startCreatingAnnotation)
- [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).[`startDeletingAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startDeletingAnnotation)
- [`IgxUserAnnotationInformation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html)
- [`IgxUserSliceAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxusersliceannotation.html)
- [`IgxUserStripAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserstripannotation.html)
- [`IgxUserPointAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserpointannotation.html)
- [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html)

## その他のリソース

関連するチャート機能の詳細については、次のトピックを参照してください。

- [チャートの注釈](chart-annotations.md)
- [チャートのデータ注釈](chart-data-annotations.md)
