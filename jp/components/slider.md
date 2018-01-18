---
title: Slider コンポーネント
_description: Ignite UI for Angular Slider コントロールは、ブラウザー間で統一したエクスペリエンスおよび値選択の入力機能を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Slider コンポーネント, Angular Slider コントロール
---

## Slider
<p class="highlight">Ignite UI for Angular Slider コントロールでスライダーや範囲スライダーを構成します。ユーザーが指定した範囲内の値、または値の範囲を選択できます。範囲は連続またはステップ付きとして定義できます。</p>
<div class="divider"></div>

### Slider デモ
<div class="sample-container" style="height: 530px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/slider"></iframe>
</div>
<div class="divider--half"></div>


### 使用方法
##### ベーシック スライダー
<div class="divider--half"></div>

```html
<igx-slider [minValue]="0" [maxValue]="50" [lowerBound]="20" [value]="30">
</igx-slider>
```

#### 範囲スライダー
<div class="divider--half"></div>

```html
<igx-slider [type]="sliderType" [value]="{ lower: 5, upper: 50 }"
            [minValue]="0" [maxValue]="100">
</igx-slider>
```
<div class="divider--half"></div>

### はじめに

#### 依存関係
IgxSlider を使用するには、IgxSlider をインポートします。

```typescript
import { IgxSlider } from "igniteui-angular/IgxSliderModule";
```
<div class="divider"></div>

## API

### SliderType

| 名前 | 説明 |
| :--- | :---------- |
| `SLIDER` | 単一のつまみを持つスライダー。 |
| `RANGE` | 範囲を定義する複数のつまみを持つ範囲スライダー。 |
<div class="divider--half"></div>

### IRangeSliderValue

| 名前 | 型 | 説明 |
| :--- | :--- | :---------- |
| `lower` | number | 範囲スライダーの低値。 |
| `upper` | number | 範囲スライダーの高値。 |
<div class="divider--half"></div>

### 入力

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `disabled` | boolean | UI 操作を無効にするか、有効にします。 |
| `isContinuous` | boolean | スライダーを連続にします。スライダーはデフォルトで不連続です。不連続スライダーには目盛がなく、値にバブル ラベルを表示しません。 |
| `lowerBound` | number | スライダー値の下方境界。設定しない場合は、最小値と同じです。 |
| `maxValue` | number | スライダーの最大値。 |
| `minValue` | number | スライダーの最小値。 |
| `step` | number | つまみのドラッグ時の値を増加/減少する手順。デフォルト手順は 1 です。ステップを 0 以下に設定しないでください。 |
| `thumbLabelVisibilityDuration` | number | つまみラベルの表示期間。デフォルト値は 750 ミリ秒です。 |
| `type` | [SliderType](#slidertype) | つまみのタイプ。 |
| `upperBound` | number | スライダー値の上方境界。設定しない場合は、最大値と同じです。 |
| `value` | number\|[IRangeSliderValue](#irangeslidervalue) | スライダー値。スライダーのタイプが SLIDER の場合、引数は数値です。値が設定されない場合、デフォルト値は下限と同じです。スライダーのタイプが RANGE の場合、引数は値の lower および upper プロパティを含むオブジェクトです。値が設定されない場合、最小値のデフォルト値は下限と同じで、最大値が上限と同じです。
<div class="divider--half"></div>

### 出力

| 名前 | 説明 |
| :--- | :--- |
| `onValueChange`  | このイベントは、ユーザーがつまみ操作を中止して値が変更されたときに発生されます。  |
<div class="divider--half"></div>
