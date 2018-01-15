---
title: Circular Progress コンポーネント
_description: Ignite UI for Angular Circular Progress インジケーター コンポーネントは、丸形で進行状況を表示し、カスタマイズできるコンポーネントです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Circular Progress コンポーネント, Angular Circular Progress コントロール
---

## Circular Progress
<p class="highlight">Ignite UI for Angular Circular Progress インジケーター コンポーネントは、変更でアプリケーションの進行状況を表す視覚的なインジケーターです。丸形インジケーターは状態変更で外観を更新します。<p>
<div class="divider"></div>

### Circular Progress デモ
<div class="sample-container" style="height:650px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="https://{environment:demosBaseUrl}/progressbar"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法
```html
<igx-circular-bar (onProgressChanged)="f($event)" [value]="currentValue">
</igx-circular-bar>
```
<div class="divider--half"></div>

### API
| 名前   |       型      |  説明 |
|:----------|:-------------:|:------|
| `max` |  number | 渡すことができる最大値を設定します。デフォルト `max` 値は 100 です。 |
| `value` |  number | 完了した位置を示す値を設定します。|
| `animate` |  boolean | 進行状況バーにアニメーションがあるかどうか。 |
<div class="divider--half"></div>

### メソッド
| 名前   |  説明 |
|:----------|:------|
| `getValue()` | 最小値 (0) および最大値の間の進行状況バーに渡された値を返します。 |
| `getPercentValue()` | 渡された値に基づいてパーセンテージを計算します。 |
| `onProgressChanged` | 進行状況の変更をトラックするために処理可能な公開イベント。 |
<div class="divider--half"></div>
