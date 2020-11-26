---
title: Angular ツリーマップ | データ可視化ツール | 方向 | レイアウト | データ バインディング | インフラジスティックス
_description: インフラジスティックスの Angular ツリーマップ コントロールを使用して、複数のレベルをサポートするストリップ、長方形、およびスライスアンドダイス アルゴリズムのデータ ポイントの相対的なウェイトを表示します。Ignite UI for Angular ツリーマップについて説明します。
_keywords: Angular Tree Map, Treemap, layout, orientation, Ignite UI for Angular, Infragistics, Angular ツリーマップ, ツリーマップ, レイアウト, 方向, インフラジスティックス
mentionedTypes: ['Treemap','TreemapOrientation','TreemapLayoutType']
---

# Angular ツリーマップの概要

Ignite UI for Angular ツリーマップは、ネストされた一連のノードとして階層 (ツリー構造) データを表示します。ツリーの各ブランチにはツリーマップ ノードが提供されて、サブマップを表す小さなノードでタイル化されます。各ノードの長方形には、データ上の指定されたディメンションに比例した領域があります。多くの場合、ノードは色分けされて、データの個別のディメンションを示します。

## Angular ツリーマップの例

<div class="sample-container loading" style="height: 600px">
    <iframe id="tree-map-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/tree-map-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular ツリーマップの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="tree-map-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

色とサイズのディメンションが何らかの方法でツリー構造と関連付けられている場合、他の方法では見つけにくいパターンを簡単に識別できます。ツリーマップは、より効率的にスペースを使用します。このため、数千の項目を同時に画面に表示することが可能となります。

ツリーマップは、数値の表示ではなく相対的順位の表示に向いています。ツリーマップは、データ ポイントを分類し、値の相対的な差異の表示が円チャートや他のエリア チャートよりも効果的です。

## データの要件

[`IgxTreemapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html) のバインドは以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はマップでノードがレンダリングされません。
-   すべてのデータ項目には、[`labelMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#labelmemberpath) プロパティにマッピングする必要があるデータ列 (文字列など) を少なくとも 1 列含める必要があります。
-   すべてのデータ項目には、[`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#valuememberpath) プロパティにマッピングする必要がある数値データ列を少なくとも 1 列含める必要があります。
-   データを整理されたタイルに分類するには、オプションで [`parentIdMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#parentidmemberpath) および [`idMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#idmemberpath) を使用できます。

## レイアウトのタイプ

Ignite UI for Angular ツリーマップ コンポーネントは、以下のタイプのアルゴリズムをサポートします。

-   [`SliceAndDice`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html#sliceanddice)
-   [`Squarified`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html#squarified)
-   [`Stripped`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html#stripped)

型は [`TreemapLayoutType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html) プロパティの設定により定義されます。[`TreemapLayoutType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html) プロパティが指定されていない場合は、既定では [`Stripped`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html#stripped) 型が表示されます。データを表示するようになる時にはさまざまなタイル アルゴリズムがあります。すべてのアルゴリズムには、ユーザーのニーズに基づいて利点があります。最適なアスペクト比を得ることを目的とするものもあります。ノードは可能な限り長方形に近くなります。その他のアルゴリズムは、要素の初期順序を保持することを目的としています。データソース内で互いに近いオブジェクトは、ツリーマップ上で互いに近くに配置されます。

-   [`Stripped`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html#stripped) タイプのアルゴリズムは、最適な縦横比を描画しますが、オブジェクトがサイズによってソートされます。

-   [`SliceAndDice`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html#sliceanddice) レイアウトのアルゴリズムは、縦横比を代わりに最初の順番を維持するようにします。

-   [`Squarified`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html#squarified) レイアウトのタイル アルゴリズムでは、SliceAndDice より縦横比がより正確で、Squarified より適切にソートされます。

## レイアウトの方向

[`layoutOrientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layoutorientation) プロパティによってユーザーは階層のノードが展開される方向を設定できます。

LayoutOrientation プロパティがレイアウト タイプ SliceAndDice および Strip と動作することに注意してください。

-   [`Horizontal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaporientation.html#horizontal) – 子ノードは水平に積み重ねられます (SliceAndDice)。

-   [`Vertical`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaporientation.html#vertical) – 子ノードは垂直に積み重ねられます (SliceAndDice)。

<!-- Angular, React, WebComponents -->

## 依存関係

chart コンポーネントをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
</pre>

<!-- end: Angular, React, WebComponents -->

## モジュールの要件

[`IgxTreemapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html) を作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

-   TreemapModule
    <!-- end: Blazor -->

```ts
import { IgxTreemapModule } from "igniteui-angular-charts";
import { IgxTreemapComponent } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxTreemapModule,
        // ...
    ]
})
export class AppModule {}
```

## コード スニペット

以下のコードは、Treemap を設定する方法を示します。

```html
<igx-treemap
    height="100%"
    width="100%"
    layoutType="stripped"
    layoutOrientation="horizontal"
    parentIdMemberPath="parent"
    idMemberPath="id"
    labelMemberPath="name"
    valueMemberPath="pop"
    transitionDuration="500"
    rootTitle="Countries"   >
</igx-treemap>
```

## 塗りつぶしスケール

以下のコードは、Treemap の塗りつぶしスケールを設定する方法を示します。

```ts
import { TreemapFillScaleMode } from 'igniteui-angular-charts';
// ...
this.treeMap = new IgxTreemapComponent()
this.treeMap.fillScaleMode = TreemapFillScaleMode.Value;
this.treeMap.fillScaleMinimumValue = 0;
this.treeMap.fillScaleMaximumValue = 1500000000; // 1.5B
this.treeMap.fillBrushes = "#4e62cf #8a58d6" as any;
this.treeMap.isFillScaleLogarithmic = false;
```

<div class="divider--half"></div>
