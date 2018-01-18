---
title: Carousel コンポーネント
_description: Ignite UI for Angular Carousel コンポーネントを使用すると、スライド、カード、またはページに基づいたインターフェイスのコレクション間を移動できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Carousel コンポーネント, Angular Carousel コントロール
---

## Carousel
<p class="highlight">Ignite UI for Angular Carousel コンポーネントを使用してギャラリー、カード、チュートリアル、またはページに基づくインターフェイスなどのスライドのコレクション間を移動します。カルーセルを全画面要素またはコンポーネントの子に設定できます。スライドショー モードでスライドを定義された間隔に変更するか、ユーザーによって手動的にスクロールします。コントロールはスライドの変更、追加、または削除でイベントを発生します。</p>
<div class="divider"></div>

### Carousel デモ
<div class="sample-container" style="height: 800px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/carousel"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法
```html
<igx-carousel [interval]="interval" [pause]="shouldPause" [loop]="shouldLoop">
    <igx-slide *ngFor="let slide of slides;" [active]="slide.active">
        <img [src]="slide.image">
    </igx-slide>
</igx-carousel>
```
<div class="divider--half"></div>

###API
<div class="divider--half"></div>

#### Carousel (igx-carousel)
<div class="divider--half"></div>

| 名前   |      型      |  説明 |
|:----------|:-------------:|:------|
| `loop` |  boolean | カルーセルが最後のスライドから最初のスライドに移動するかどうか。デフォルトは `true` です。|
| `pause` | boolean | カルーセルがユーザー操作の後に再生を中止するかどうか。デフォルトは `true` です。  |
| `interval` | number | スライド トランジション間の間隔 (ミリ秒)。 |
| `navigation` | boolean | カルーセルに左/右のナビゲーション ボタンを描画するかどうか。デフォルトは `true` です。 |
| `total` | number | カルーセルが持つスライドの数。  |
| `current` | number | 表示しているスライドのインデックス。 |
| `isPlaying` | boolean | カルーセルが一時停止されているか、再生しているかを返します。 |
| `isDestroyed` | boolean | カルーセルが破棄された (`ngOnDestroy` が呼び出された) かどうか。 |
| `onSlideChanged` | event | スライドの変更で発生します。 |
| `onSlideAdded` | event | スライドがカルーセルに追加される時に発生します。 |
| `onSlideRemoved`| event | スライドがカルーセルから削除される時に発生します。 |
| `onCarouselPaused` | event | カルーセルが一時停止されているときに発生します。 |
| `onCarouselPlaying`| event | カルーセルが再生されているときに発生します。 |
| `play()` | void | `onCarouselPlaying` イベントを発生し、スライド間のトランジションを開始します。 |
| `stop()` | void | `onCarouselPaused` イベントを発生し、スライド間のトランジションを中止します。 |
| `prev()` | void | 前のスライドに移動します。`onSlideChanged` イベントを発生します。 |
| `next()` | void | 次のスライドに移動します。`onSlideChanged` イベントを発生します。 |
| `add(slide: IgxSlide)` | void | カルーセルにスライドを追加します。`onSlideAdded` イベントを発生します。 |
| `remove(slide: IgxSlide)` | void | 既存のスライドをカルーセルから削除します。`onSlideRemoved` イベントを発生します。 |
| `get(index: Number)` | IgxSlide または void | 所定のインデックスのスライドまたは null を返します。 |
| `select(slide: IgxSlide, direction: Direction)`| void | スライドおよびトランジション方向を選択します。`onSlideChanged` イベントを発生します。 |

#### Slide (igx-slide)
<div class="divider--half"></div>

| 名前   |      型      |  説明 |
|:----------|:-------------:|:------|
| `index` |  number | カルーセル内のスライドのインデックス。 |
| `direction` |  Direction | スライドのトランジション方向。設定可能な値は `NONE`、`NEXT`、および `PREV` です。 |
| `active`| boolean | 現在のスライドがアクティブ、つまりカルーセルに表示されているかどうか。 |
