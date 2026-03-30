---
title: 丸み
_description: Ignite UI for Angular は、border-radius を変更してコンポーネントの形を変更できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# 丸み

Ignite UI for Angular では、丸みを 0 から 1 の間の値で調整することで、コンポーネントの形状をカスタマイズできます。

## 概要

多くの Ignite UI コンポーネントには、境界半径の最小値と最大値が事前定義されており、`--ig-radius-factor` CSS 変数を使用して調整できます。

`--ig-radius-factor` を 0 に設定すると、コンポーネントは最小の border-radius を使用し、角がシャープなブロック状に表示されます。1 に設定すると、最大の border-radius が適用され、より丸みを帯びた外観になります。

以下は、定義済みの最小および最大の境界半径値を持ち、`--ig-radius-factor` 変数を使用して変更できるコンポーネントのリストです。 <br>
• [Action Strip](../action-strip.md) • [Button](../button.md) • [Button Group](../button-group.md) • [Calendar](../calendar.md) • [Card](../card.md) • [Carousel](../carousel.md) • [Checkbox](../checkbox.md) • [Chip](../chip.md) • [Combo](../combo.md) • [Date Picker](../date-picker.md) • [Date Range Picker](../date-range-picker.md) • [Grid](../grid/grid.md) • [Input Group](../input-group.md) • [Linear Progress](../linear-progress.md) • [List](../list.md) • [Month Picker](../month-picker.md) • [Navigation Drawer](../navdrawer.md) • [Radio](../radio-button.md) • [Ripple](../ripple.md) • [Snackbar](../snackbar.md) • [Switch](../switch.md) • [Toast](../toast.md)

## 使用方法

コンポーネントの 2 つの border-radius 値を切り替えるには、要素セレクターをターゲットにして、`--ig-radius-factor` 変数を 0 または 1 に設定するだけです。

```css
igx-chip {
   --ig-radius-factor: 0;
}
```

これにより、事前定義された最小の border-radius が適用され、[Chip](../chip.md) コンポーネントの角が直線になります。

```css
igx-chip {
    --ig-radius-factor: 1;
}
```

値を 1 に設定すると、定義済みの最大の border-radius が適用され、[Chip](../chip.md) コンポーネントの角が丸くなります。

最小値と最大値の間にしたい場合は、`--ig-radius-factor` を 0 ～ 1 の小数値に設定できます。
たとえば、`0.5` に設定すると、コンポーネントの最大許容値の 50% の border-radius が適用されます。

```css
igx-chip {
    --ig-radius-factor: 0.5;
}
```

以下の例では、border-radius の最小値と最大値の違いがわかります。

<code-view style="height: 210px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/theming/roundness/" >
</code-view>

## その他のリソース

関連トピック:

- [Sass による丸み設定](./sass/roundness.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
