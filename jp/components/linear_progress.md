---
title: Linear Progress コンポーネント
_description: Ignite UI for Angular Linear Progress Bar コンポーネントを使用すると、プログレス バーを表示し、色またはストライプなどの外観をカスタマイズします。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Linear Progress コンポーネント, Angular Linear Progress コントロール
_language: ja
---

## Linear Progress

<p class="highlight">Ignite UI for Angular Linear Progress インジケーター コンポーネントは、変更でアプリケーションの進行状況を表す視覚的なインジケーターです。インジケーターは状態変更で外観を更新します。インジケーターがストライプまたは実線色でスタイル設定できます。</p>
<div class="divider"></div>

### Linear Progress デモ

<div class="sample-container" style="height:650px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/progressbar"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法

```html
<igx-linear-bar [striped]="false" [value]="currentValue" [max]="200">
</igx-linear-bar>
```

<div class="divider--half"></div>

### API

| 名前      |   型    | 説明                                                                                                       |
| :-------- | :-----: | :--------------------------------------------------------------------------------------------------------- |
| `max`     | number  | 渡すことができる最大値を設定します。                                                                       |
| `type`    | string  | リニア棒のタイプを設定します。オプションは `default`、`success`、`info`、`warning`、または `danger` です。 |
| `value`   | number  | 完了した位置を示す値を設定します。                                                                         |
| `striped` | boolean | 棒をストライプ スタイルに設定します。                                                                      |
| `animate` | boolean | 進行状況バーにアニメーションがあるかどうか。                                                               |

<div class="divider--half"></div>

### メソッド

| 名前                | 説明                                                              |
| :------------------ | :---------------------------------------------------------------- |
| `getValue()`        | 最小値 (0) および最大値の間の進行状況バーに渡された値を返します。 |
| `getPercentValue()` | 渡された値に基づいてパーセンテージを計算します。                  |
| `onProgressChanged` | 進行状況の変更をトラックするための公開イベント。                  |

<div class="divider--half"></div>
