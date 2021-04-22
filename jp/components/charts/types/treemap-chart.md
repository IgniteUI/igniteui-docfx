---
title: Angular ツリーマップ | データ可視化ツール | 方向 | レイアウト | データ バインディング | インフラジスティックス
_description: インフラジスティックスの Angular ツリーマップ コントロールを使用して、複数のレベルをサポートするストリップ、長方形、およびスライスアンドダイス アルゴリズムのデータ ポイントの相対的なウェイトを表示します。Ignite UI for Angular ツリーマップについて説明します。
_keywords: Angular Tree Map, Treemap, layout, orientation, Ignite UI for Angular, Infragistics, Angular ツリーマップ, ツリーマップ, レイアウト, 方向, インフラジスティックス
mentionedTypes: ["Treemap", "TreemapOrientation", "TreemapLayoutType"]
_language: ja
---

# Angular ツリーマップ

Ignite UI for Angular ツリーマップ チャートは、ネストされた一連のノードとして階層 (ツリー構造) データを表示します。ツリーの各ブランチにはツリーマップ ノードが提供されて、サブマップを表す小さなノードでタイル化されます。各ノードの長方形には、データ上の指定されたディメンションに比例した領域があります。多くの場合、ノードは色分けされて、データの個別のディメンションを示します。

## Angular ツリーマップの例

次の例では、ツリーマップは世界の最大総面積の上位30 の国を示しています。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/tree-map-overview"
           alt="Angular ツリーマップの例"
           github-src="charts/tree-map/overview">
</code-view>

<div class="divider--half"></div>

## ツリーマップの推奨事項

### Angular ツリーマップはプロジェクトに適していますか?

色とサイズのディメンションが何らかの方法でツリー構造と関連付けられている場合、他の方法では見つけにくいパターンを簡単に識別できます。ツリーマップは、より効率的にスペースを使用します。このため、数千の項目を同時に画面に表示することが可能となります。

-   ツリーマップは、データ ポイントの分類とそれらの値の相対的な違いの伝達に苦手なときが多い円チャートや他の形式のエリア チャートよりも効果的です。
-   ツリーマップは、ドリルダウン シナリオ用に設計されています。より効率的なデータ分析のために、小さな長方形で表されるデータ セットに継続的にドリルダウンできます。
-   ツリーマップは、数値の表示ではなく相対的順位の表示に向いています。

他のデータの視覚化と同様に、ツリーマップ チャートの視覚化は特定のシナリオで使用する必要があります。棒チャートや折れ線チャートのような視覚化と同じ問題は解決されません。これは、より複雑で豊富なデータ表示を目的としています。

### ツリーマップのユース ケース

ツリーマップを選択するための一般的なユース ケースがいくつかあります:

-   階層データ (ブランチとサブブランチを持つツリーとして構成されたデータ) をドリルダウンする場合。
-   カテゴリ (ブランチ) とサブカテゴリ (サブブランチ) 間の相対的な重みと比較値の階層を説明したい場合。
-   コンパクトで効率の良い視覚化が必要な大規模なデータ セットを表示したい場合。
-   正確な値を使用せずに、一目で迅速なデータ分析を提供したい場合長方形の相対的なサイズは、パターンや外れ値を非常に迅速に識別するのに役立ちます。
-   スペースを有効に使用したい場合ツリーマップは、数千の項目を同時に画面に表示することが可能となります。

### 以下の場合にツリーマップを使用しないでください:

-   正確な値を必要とするデータ ストーリーを説明している場合。
-   負のデータ値がある場合。
-   フラットで非階層的なデータがある場合。
-   データのサイズが類似している場合。

### ツリーマップのデータ構造

-   データ ソースはデータ項目の配列またはリストである必要があります。
-   データ ソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はマップでノードがレンダリングされません。
-   すべてのデータ項目には、[`labelMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#labelmemberpath) プロパティにマッピングする必要があるデータ列 (文字列など) を少なくとも 1 列含める必要があります。
-   すべてのデータ項目には、[`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#valuememberpath) プロパティにマッピングする必要がある数値データ列を少なくとも 1 列含める必要があります。
-   データを整理されたタイルに分類するには、オプションで [`parentIdMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#parentidmemberpath) および [`idMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#idmemberpath) を使用できます。

## Angular ツリーマップの構成

次の例では、ツリーマップは、[`layoutType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layouttype) プロパティと [`layoutOrientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layoutorientation) プロパティを変更することにより、アルゴリズム構造を変更する機能を示しています。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/tree-map-layout"
           alt="Angular ツリーマップのレイアウト構成"
           github-src="charts/tree-map/layout">
</code-view>

<div class="divider--half"></div>

### レイアウトのタイプ

ツリーマップ チャートは、データの相対的な重みを表示します。さまざまなアルゴリズムを使用して、データ項目のレイアウトをどのように行うかを決定します。

-   [`SliceAndDice`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html#sliceanddice) - レイアウトのアルゴリズムは、縦横比を代わりに最初の順番を維持するようにします。
-   [`Squarified`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html#squarified) - レイアウトのタイリング アルゴリズムでは、SliceAndDice より縦横比がより正確で、Squarified より適切に並べ替えされます。
-   [`Stripped`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html#stripped) - タイプのアルゴリズムは、最適な縦横比を描画しますが、オブジェクトがサイズによって並べ替えられます。

ツリーマップを使用すると、要件に最適なアルゴリズムを選択できます。デフォルトでは、Squarified メソッドが使用されます。また、次の 2 つのメカニズムを使用してノードに色を付けることができる機能も含まれています。

-   項目を同じ値で色付けするグループ ベースのメカニズム。
-   階級区分図に似たスケール ベースのメカニズムで、ノードの色をその値に基づいてマップします。

### レイアウト方向:

[`layoutOrientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layoutorientation) プロパティによってユーザーは階層のノードが展開される方向を設定できます。

[`layoutOrientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layoutorientation) プロパティがレイアウト タイプ SliceAndDice および Strip と動作することに注意してください。

-   [`Horizontal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaporientation.html#horizontal) – 子ノードは水平に積み重ねられます (SliceAndDice)。
-   [`Vertical`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaporientation.html#vertical) – 子ノードは垂直に積み重ねられます (SliceAndDice)。

## Angular ツリーマップのスタイル設定

次の例では、ツリーマップは、`NodeStylingScript` イベントを介してスタイル設定することによって実現されるノードのルック アンド フィールを変更する機能を示しています。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/tree-map-styling"
           alt="Angular ツリーマップのスタイル設定"
           github-src="charts/tree-map/styling">
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

-   [エリア チャート](area-chart.md)
-   [シェイプ チャート](shape-chart.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

-   [`IgxTreemapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html)
-   [`layoutOrientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layoutorientation)
-   [`layoutType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layouttype)
