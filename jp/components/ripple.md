---
title: Ripple ディレクティブ
_description: Ignite UI for Angular Ripple ディレクティブは、リップル アニメーション エフェクトが適用されている領域を定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Ripple コンポーネント, Angular Ripple コントロール
---

## Ripple
<p class="highlight">Ignite UI for Angular Ripple ディレクティブを使用すると、入力の受け取りが構成されていない領域にクリックまたはタッチした場合にリップル アニメーション エフェクトのフィードバックを作成できます。タッチまたはマウス クリックの応答としてアニメーションを再生する相対的な位置を持つ要素を定義します。</p>
<div class="divider"></div>

### Ripple デモ
<div class="sample-container" style="height: 1192px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="https://{environment:host}/angular-demos/buttons">
</div>
<div class="divider--half"></div>

### 使用方法
```html
<target-element igxRipple [...options]>クリック</target-element>
```
<div class="divider--half"></div>

### コード例
`igxRippleTarget` を使用して複雑な要素内の特定の要素にリップル エフェクトをアタッチします。
```html
<igx-list>
    <igx-list-item igxRipple igxRipplTarget=".igx-list__item" *ngFor="let item of navItems">
        {{ item.text }}
    </igx-list-item>
</igx-list>
```

カスタム色を使用する中央リップル エフェクトを設定します。
```html
<span igxButton="raised" igxRipple="#e41c77" igxRippleCentered="true">
    <i class="material-icons">edit</i>
</span>
```

`igxRipple` は Web Animation API を使用し、[サポートされるブラウザー](http://caniuse.com/#feat=web-animation)でネイティブに実行します。
その他のブラウザーのために `web-animations.min.js` [ポリフィル](https://github.com/web-animations/web-animations-js)を使用できます。
<div class="divider--half"></div>

### API
| 名前   |      型      |  説明 |
|:----------|:-------------:|:------|
| `igxRipple` |  string | リップル アニメーションの色。 |
| `igxRippleTarget` |    string   |   `igxRipple` の親で子要素にリップルをアクティブ化することを設定します。CSS セレクターを受け取ります。デフォルト値は `igxRipple` の親です。  |
| `igxRippleCentered` | boolean | true の場合、リップル アニメーションはクリック イベントの位置の代わりに要素の中央から再生します。 |
| `igxRippleDuration` | number | リップル アニメーションの期間。デフォルト値は 600 ミリ秒です。 |
<div class="divider--half"></div>
