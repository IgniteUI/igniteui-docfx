---
title: Chip コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Chip コンポーネントは入力、属性、または操作を表す小さい要素を提供します。
_keywords: ジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Chip, Chip コンポーネント, ChipArea, ChipArea コンポーネント
_language: ja
---

### Chip

[`IgxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) は情報を小さな楕円内に表示する視覚的なコンポーネントです。Chip は、テンプレート化、削除、選択が可能で複数の Chip の順序を変更して視覚的に接続することもできます。Chip は「チップ領域」と呼ばれるコンテナーに配置され、このコンテナーは Chip の間の操作を管理します。

#### デモ

<div class="sample-container loading" style="height:650px">
    <iframe id="chip-sample-iframe  " src='{environment:demosBaseUrl}/chip-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="chip-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

#### Chip の初期化

The [`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html) is the main class for a chip elemenent and the [`IgxChipsAreaComponent`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html) is the main class for a chip area. The chip area is used when handling more complex scenarios that require interaction between chips (dragging, selection, navigation and etc.). The [`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html) has an an [`id`]({environment:angularApiUrl}/classes/igxchipcomponent.html#id) input so that the different chips can be easily distinguished. If [`id`]({environment:angularApiUrl}/classes/igxchipcomponent.html#id) is not provided it will be automatically generated.

[`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) を [`igxChipArea`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html) と使用した例:

```html
<igx-chips-area>
    <igx-chip *ngFor="let chip of chipList" [id]="chip.id">
        <span>{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

Chip states:

![Default](../images/chip/default_chip.jpg) ![Hover](../images/chip/hover_chip.jpg) ![Focus](../images/chip/focused_chip.jpg)

### 機能

#### 選択

![Default Selection](../images/chip/selecting_default.gif)

Selection can be enabled by setting an input called [`selectable`]({environment:angularApiUrl}/classes/igxchipcomponent.html#selectable). The selecting is done either by clicking on the chip itself or by using the `Tab` key to focus the chip and then pressing the `Space` key. If a chip is already selected it can be deselected by pressing the `Space` key again while the chip is focused or by clicking on it.

An event [`onSelection`]({environment:angularApiUrl}/classes/igxchipcomponent.html#onselection) is fired when the selection state of the [`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) changes. It provides the new [`selected`]({environment:angularApiUrl}/interfaces/ichipselecteventargs.html#selected) value so you can get the new state and the original event in [`originalEvent`]({environment:angularApiUrl}/interfaces/ichipselecteventargs.html#originalevent) that triggered this selection change. If this is not done through user interaction but instead is done by setting the [`selected`]({environment:angularApiUrl}/interfaces/ichipselecteventargs.html#selected) property programmatically the [`originalEvent`]({environment:angularApiUrl}/interfaces/ichipselecteventargs.html#originalevent) argument has value `null`.

Also by default an icon is shown indicating that the chip is being selected. It is fully customizable and can be done through the [`selectIcon`]({environment:angularApiUrl}/classes/igxchipcomponent.html#selecticon) input. It accepts values of type `TemplateRef` and overrides the default icon while retaining the same functionality.

Example of customizing the select icon:

![Custom Selection](../images/chip/selecting_custom.gif)

```html
<igx-chips-area #chipsArea>
    <igx-chip *ngFor="let chip of chipList" [selectable]="'true'" [selectIcon]="mySelectIcon">
        <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
        <span>{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
<ng-template #mySelectIcon>
    <igx-icon fontSet="fa-solid" name="fa-check-circle"></igx-icon>
</ng-template>
```

#### 削除

![Removing](../images/chip/removing_default.gif)

Removing can be enabled by setting the [`removable`]({environment:angularApiUrl}/classes/igxchipcomponent.html#removable) input to `true`. When enabled a remove button is rendered at the end of the chip. When the end-users performs any interaction like clicking on the remove button or pressing the `Delete` key while the chip is focused the [`onRemove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#onremove) event is emitted.

By default the chip does not remove itself from the template when the user wants to delete a chip. This needs to be handled manually using the [`onRemove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#onremove) event.

If you need to customize the remove icon you can use the [`removeIcon`]({environment:angularApiUrl}/classes/igxchipcomponent.html#removeicon) input. It takes a value of type `TemplateRef` and renders it instead of the default remove icon. This means that you can customize the remove button in any way while all the handling of it is still handled by the chip itself.

![Remove icons](../images/chip/remove_icons.jpg)

Example of handling chip removing and custom remove icon:

```html
<igx-chips-area #chipsArea>
    <igx-chip *ngFor="let chip of chipList" [id]="chip.id" [removable]="true" [removeIcon]="myRemoveIcon" (onRemove)="chipRemoved($event)">
        <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
        <span>{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
<ng-template #myRemoveIcon>
    <igx-icon fontSet="fa-solid" name="fa-trash-alt"></igx-icon>
</ng-template>
```

```typescript
public chipRemoved(event) {
    this.chipList = this.chipList.filter((item) => {
        return item.id !== event.owner.id;
    });
    this.changeDetectionRef.detectChanges();
}
```

#### 移動/ドラッグ

![Dragging](../images/chip/dragging.gif)

チップの位置を変更するためにユーザーによってドラッグできます。移動/ドラグ機能はデフォルトで無効ですが、[`draggable`]({environment:angularApiUrl}/classes/igxchipcomponent.html#draggable) オプションを使用して有効にできます。データソースでチップの移動を手動的に処理する必要があります。

```html
<igx-chips-area (onReorder)="chipsOrderChanged($event)">
    <igx-chip *ngFor="let chip of chipList" [draggable]="'true'">
        <igx-icon igxPrefix>{{chipElem.icon}}</igx-icon>
        {{chip.text}}
    </igx-chip>
</igx-chips-area>
```

```typescript
public chipsOrderChanged(event) {
    const newChipList = [];
    for (const chip of event.chipsArray) {
        const chipItem = this.chipList.filter((item) => {
            return item.id === chip.id;
        })[0];
        newChipList.push(chipItem);
    }
    this.chipList = newChipList;
}
```

#### Chip テンプレート

The [`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html)'s main structure consists of `select icon`, [`prefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html), `chip content`, [`suffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html) and `remove button`. All of those elements are templatable.

The content of the chip is taken by the content defined inside the chip template except elements that define the [`prefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html) and  [`suffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html) of the chip. You can define any type of content you need:

The [`prefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html) and [`suffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html) are also elements inside the actual chip area where they can be templated by your preference. The way they can be specified is by respectively using the [`IgxPrefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html) and [`IxgSuffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html) directives:

![Prefix and Suffix](../images/chip/prefix_suffix.jpg)

Example of using an icon for both [`prefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html) and [`suffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html) and a text for `content`:

```html
<igx-chip>
    <igx-icon igxPrefix>insert_emoticon</igx-icon>
    <igx-icon igxSuffix style="transform: rotate(180deg)">insert_emoticon</igx-icon>
    <span>Why not both?</span>
</igx-chip>
```

Chip rendering can be customized so its dimensions can be different using the [`displayDensity`]({environment:angularApiUrl}/classes/igxchipcomponent.html#displaydensity) input. By default it is set to `comfortable`. It can be set to `cosy` or `compact` while everything inside the chip retains its relative positioning:

![Density](../images/chip/density.jpg)

```html
<igx-chip>Hi! My name is Chip!</igx-chip>

<igx-chip displayDensity="cosy">
    I can be smaller!
</igx-chip>

<igx-chip displayDensity="compact">
    <igx-icon igxPrefix>child_care</igx-icon>
    Even tiny!
</igx-chip>
```

A few examples of how the chip can be even further customized:

![Advanced customizing](../images/chip/advanced_customizing.jpg)

#### キーボード ナビゲーション

チップをフォーカスするには `Tab` キーを押すか、それをクリックします。チップを順序変更するにはキーボード ナビゲーションを使用します。

- チップがフォーカスされた場合のキーボード コントロール:

  - <kbd>LEFT</kbd> - Moves the focus to the chip on the left.

    ![Left](../images/chip/arrow_left_key.gif)

  - <kbd>RIGHT</kbd> - Moves the focus to the chip on the right.

    ![Right](../images/chip/arrow_right_key.gif)

  - <kbd>SPACE</kbd> - Toggles chip selection if it is selectable

    ![Space](../images/chip/space_key.gif)
  - <kbd>DELETE</kbd> - Triggers the [`onRemove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#onremove) event for the [`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) so the chip deletion can be handled manually.
  - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - Triggers [`onReorder`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html#onreorder) event for the [`igxChipArea`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html) when the currently focused chip should move position to the left.
  - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - Triggers [`onReorder`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html#onreorder) event for the [`igxChipArea`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html) when the currently focused chip should move one position to the right

- 削除ボタンがフォーカスされた場合のキーボード コントロール:

  - <kbd>SPACE</kbd> または <kbd>ENTER</kbd> チップの削除を手動的に処理するために [`onRemove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#onremove) 出力を発生します。

### API

* [IgxChipComponent]({environment:angularApiUrl}/classes/igxchipcomponent.html)
* [IgxChipComponent Styles]({environment:sassApiUrl}/index.html#function-igx-chip-theme)
* [IgxChipsAreaComponent]({environment:angularApiUrl}/classes/igxchipsareacomponent.html)
* [IgxPrefixDirective]({environment:angularApiUrl}/classes/igxprefixdirective.html)
* [IgxSuffixDirective]({environment:angularApiUrl}/classes/igxsuffixdirective.html)

### 参照

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
