---
title: アニメーション
_description: Ignite UI for Angular には、ユーザー エクスペリエンスを向上させるために特別に設計された 100 以上のビルド済みアニメーションが含まれています。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, アニメーション
_language: ja
---

# アニメーション

<p class="highlight">Ignite UI for Angular には、ユーザー エクスペリエンスを向上させるために特別に設計された 100 以上のビルド済みアニメーションが含まれています。</p>

## Angular アニメーション

<div class="sample-container loading" style="height: 470px">
    <iframe id="animations-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/theming/animations-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0; padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="animations-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="animations-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI for Angular アニメーションは、`フェード`、`フリップ`、`成長`、`その他`、`回転`、`スケール`、`スライド`、`スウィング`などの視覚効果に基づいて 8 つのカテゴリに分類されます。各グループは異なるパラメーター セットを受け取り、含まれるアニメーションの動作を変更できます。各アニメーションは、Angular が提供する [`animation`](https://angular.io/api/animations/animation) 関数によって生成される [`AnimationReferenceMetadata`](https://angular.io/api/animations/AnimationReferenceMetadata) オブジェクトです。

パラメーターがアタッチされている場合、デフォルト値として機能します。アニメーションが [`useAnimation`](https://angular.io/api/animations/useAnimation) 関数によって呼び出された場合、パラメーター値を直接渡すことができます。渡されたパラメーター値のいずれかがない場合、デフォルト値が使用されます。

``` typescript
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from "igniteui-angular/animations/main";

animations: [
    trigger('fadeInOut', [
            transition('void => *', [
                useAnimation(fadeIn, {
                    params: {
                        duration: '.35s',
                        easing: 'ease-out'
                    }
                })
            ]),
            transition('* => void', [
                useAnimation(fadeOut, {
                    params: {
                        duration: '.2s',
                        easing: 'ease-out'
                    }
                })
            ])
        ])
]
```

### タイミング関数

Ignite UI for Angular には、アニメーションをイーズ イン/アウトするために使用できるタイミング関数のセットが含まれています。[EaseIn]({environment:angularApiUrl}/enums/easein.html)、[EaseOut]({environment:angularApiUrl}/enums/easeout.html)、[EaseInOut]({environment:angularApiUrl}/enums/easeinout.html) の 3 つの主要なタイミング関数グループがあり、それぞれ以下のタイミングを含みます。
  - quad
  - cubic
  - quart
  - quint
  - sine
  - expo
  - circ
  - back

特定のタイミング関数を使用するには、まずそれはインポートします。

``` typescript 
import { EaseOut } from "igniteui-angular/animations/easings";
```
アニメーションの easing パラメーターの値として使用します。

``` typescript
useAnimation(fadeIn, {
    params: {
        easing: EaseOut.back
    }
});
```
## SCSS アニメーション

### キーフレーム Mixin

Ignite UI for Angular [keyframes]({environment:sassApiUrl}/index.html#mixin-keyframes) mixin は、新しいキーフレーム アニメーションを登録するために使用されます。Mixin はパラメーターとしてキーフレーム アニメーションの名前を取得し、グローバル キーフレーム レジスタ リストに追加します。同じキーフレーム アニメーションを複数回含む場合、エクスポートされた CSS でキーフレームは複製されません。

例えば、以下を実行する場合、

```scss
@include fade-in();
@include fade-in();
```

生成される CSS に追加される `@keyframes` ルールは 1 つのみです。

```css
@keyframes fade-in { ... }
```

アニメーション ステップのキーフレーム セレクターおよびキーフレームの CSS スタイルは、mixin の本体内で定義されます。 

```scss
@include keyframes(fade-in-bottom) {
    0% {
        transform: translateY(50px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
```


### アニメーション Mixin

[аnimation]({environment:sassApiUrl}/index.html#mixin-animation) mixin は、パラメーターとして渡されたアニメーション プロパティのリストを使用して要素をアニメーション化するための機能を果たします。ユーザーは、`名前`、`期間`、`遅延`、`方向`、`繰り返し回数`などのアニメーション プロパティを指定できます。複数のキーフレーム アニメーションを `animation` mixin に渡すことができます。

```scss
//include the 'fade-in-top' keyframes animation mixin
@include fade-in-top();

//include the animation mixin with parameters
.my-class {
    @include animation('fade-in-top' 3s $ease-out-quad infinite);
}
```

<div class="sample-container loading" style="height: 270px">
    <iframe id="animations-sample-2-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/theming/animations-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="animations-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="animations-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

## API リファレンス
<div class="divider"></div>

* [Animations]({environment:sassApiUrl}/index.html)
* [AnimationSettings]({environment:angularApiUrl}/interfaces/animationsettings.html)
* [IAnimationParams]({environment:angularApiUrl}/interfaces/ianimationparams.html)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
