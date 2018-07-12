---
title: Bullet Graph コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular の Bullet Graph コンポーネントはスケールに比較されるメジャーのリニア ビューを表示します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular ブレット グラフ コンポーネント, Angular ブレット グラフ
_language: ja
---
## Bullet Graph

Ignite UI for Angular の Bullet Graph コンポーネントは、目盛り上でリニアと簡潔なメジャーの比較を表示します。

### デモ

<div class="sample-container" style="height: 550px">
    <iframe id="bullet-graph-sample-iframe" src='{environment:demosBaseUrl}/bullet-graph-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="bullet-graph-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

ブレット グラフ コンポーネントは、きれいなデータ表現を作成するための多数の機能をサポートします。ダッシュボードで使用されるメーターやゲージをシンプルで直感的な棒チャートに置き換えます。ブレット グラフは、目標に対する進捗状況、評価の範囲、複数の測定比較を表現する際に最も効率的で効果的なグラフの 1 つです。

ブレット グラフの機能には構成可能な向きや方向の設定や視覚要素などがあり、アニメーション化されたトランジションのサポートも組み込まれています。

### 依存関係
gauges パッケージのインストール時に core パッケージもインストールする必要があります。

`npm install ignite-angular-gauges ignite-angular-core`

ブレット グラフが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に _IgxBulletGraphModule_ をインポートする必要があります。

```typescript
// app.module.ts
import { IgxBulletGraphModule } from 'igniteui-angular-gauges/ES5/igx-bullet-graph-module';

@NgModule({
    imports: [
        ...
        IgxBulletGraphModule,
        ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### 使用方法

以下のコードは、ブレット グラフ コンポーネントを作成し、パフォ―マンス バーと比較目盛マーカー、および 3 つの比較範囲をスケールに構成します。


```html
 <igx-bullet-graph height="100"
                   width="300"
                   minimumValue="5"
                   maximumValue="55"
                   value = "35"
                   targetValue = "43">
    <igx-linear-graph-range startValue="0"
                            endValue="15"
                            Brush="#828181"/>
    <igx-linear-graph-range StartValue="15"
                            EndValue="30"
                            Brush="#AAAAAA"/>
    <igx-linear-graph-range StartValue="30"
                            EndValue="55"
                            Brush="#D0D0D0"/>
 </igx-bullet-graph>
```

<div class="divider--half"></div>

## 論理領域

ブレット グラフの表示領域は、論理的に予約領域とグラフ領域に区別されます。

![](../images/Bullet_Graph_1.png)

各領域はブレット グラフ コンポーネントの一部の視覚要素に関連した異なる目的があります。

**予約領域** (1) - この領域は以下のように拡張します。

- スケールに沿った方向 - 予約領域はタイトル領域が存在しない場合に、コンポーネントの端または上の図に示すようにタイトル領域の端のいずれかより開始され、コンポーネントの端で終了します。

- スケール全域 - 
水平方向: 予約領域がコンポーネントの下端から開始され、ラベルのフォントのサイズなどの書式設定に従い、番号ラベルと同じ高さまで上に拡張します。
垂直方向: 予約領域がコンポーネントの左端から開始され、スケール測定番号の大きさおよびラベルのフォントのサイズなどの書式設定に従って番号ラベルと同じ幅まで右に拡張します。

**グラフ領域** (2) - ブレット グラフのパフォーマンス バー、目盛、範囲、オプションで番号ラベルを表示する領域です。ラベルを除く視覚要素の範囲関連のプロパティはすべてその端に対して測定されます。グラフ領域は、プレースホルダーではなくコントロール内部にスケールを配置する (正確にはスケールの視覚要素を配置) 参照フレームとして役割を果たします。

### 構成可能な視覚要素の概要

![](../images/Bullet_Graph_2.png)

**パフォーマンス バー** (3) - コンポーネントにより表示される主要なメジャーで、バーとして可視化されます。

**比較マーカー** (4) – パフォーマンス バー メジャーの比較評価。パフォーマンス バーの向きに対して直角に交わるマーカーとして表示されます。

**比較範囲** (5) - 範囲は、スケール上で指定した値の領域を強調表示する視覚的な要素です。その目的は、パフォーマンス バー メジャーの質的状態を視覚で伝えると同時に、その状態をレベルとして示すことにあります。

**目盛** (6) - 目盛は、ブレット グラフを読み取りやすくするために目盛の間隔でスケールを分割して見せる役割を果たします。
- 主目盛 - 主目盛は、スケールの主要な区切りとして使用されます。表示間隔、範囲、およびスタイルは、対応するプロパティを設定し制御できます。
- 補助目盛 - 補助目盛は主目盛を補助し、スケールの数値を読み取りやすくするために追加して使用します。主目盛と同じ方法でカスタマイズできます。

**スケール ラベル** (7) - スケールのメジャーを示します。

**境界線** (8) - コンポーネントのディメンションを視覚的に区切る線です。

**背景** (9) – 視覚要素が配置された背景のパターンおよび色を設定できます。
