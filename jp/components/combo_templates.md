---
title: コンボ テンプレート
_description: igx-combo コンポーネントの異なる領域 (項目、ヘッダー、フッター、空リスト、ボタンの追加) にカスタム テンプレートを定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント,  Angular テンプレート, Angular Combo テンプレート
_language: ja
---

## コンボ テンプレート
<p class="highlight">
[igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) コンポーネントの異なる領域 (項目、ヘッダー、フッター、空リスト、ボタンの追加) にカスタム テンプレートを定義できます。
</p>
<div class="divider"></div>

### デモ

<div class="sample-container loading" style="height: 450px;">
    <iframe id="combo-templates-sample" frameborder="0" seamless width="700px" height="100%" src="{environment:demosBaseUrl}/lists/combo-template" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-templates-sample" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### 使用方法
Ignite UI for Angular Combo を初期化する前に、`IgxComboModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxComboModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxComboModule],
    ...
})
export class AppModule {}
```

定義済みの参照名 (詳細については以下を参照) を使用して項目にテンプレート (項目、ヘッダー、フッター、空項目) を定義できます。

```html
<igx-combo #templateCombo [data]="lData" [valueKey]="'field'" >

    <ng-template igxComboItem let-display let-key="valueKey">
        <div class="item">
            <span class="state">{{ display[key] }} - </span>
            <span class="region">{{ display.region }}</span>
        </div>
    </ng-template>

    <ng-template igxComboHeader>
        <div class="header-class">State - Region</div>
    </ng-template>

    <ng-template igxComboFooter>
        <div class="footer-class">Infragistics 2018</div>
    </ng-template>

    <igx-combo>
        <ng-template igxComboEmpty>
            <span class="empty-class">No available states</span>
        </ng-template>
    </igx-combo>
</igx-combo>
```

## テンプレート タイプ
以下のいずれかのテンプレートを定義した場合、定義済みの名前を使用して参照してください。

### 項目テンプレート
セレクター `[igxComboItem]` の使用:

```html
<igx-combo>
	<ng-template igxComboItem let-display let-key="valueKey">
		<div class="item">
			<span class="state">State: {{ display[key] }}</span>
			<span class="region">Region: {{ display.region }}</span>
		</div>
	</ng-template>
</igx-combo>
```

### ヘッダー テンプレート
セレクター `[igxComboHeader]`の使用:

```html
<igx-combo>
    <ng-template igxComboHeader>
        <div class="header-class">Custom header</div>
        <img src=""/>
    </ng-template>
</igx-combo>
```

### フッター テンプレート
セレクター `[igxComboFooter]` の使用:

```html
<igx-combo>
    <ng-template igxComboFooter>
        <div class="footer-class">Custom footer</div>
        <img src=""/>
    </ng-template>
</igx-combo>
```

### 空のテンプレート
セレクター `[igxComboEmpty]` の使用:

```html
<igx-combo>
    <ng-template igxComboEmpty>
        <span>List is empty</div>
    </ng-template>
</igx-combo>
```

### テンプレートの追加
セレクター `[igxComboAddItem]` の使用:

```html
<igx-combo>
    <ng-template igxComboAddItem>
        <span>Add town</span>
    </ng-template>
</igx-combo>
```

### アイコン テンプレートの切り替え
セレクター `[igxComboToggleIcon]` の使用:

```html
<igx-combo>
    <ng-template igxComboToggleIcon let-collapsed>
        <igx-icon>{{ collapsed ? 'remove_circle' : 'remove_circle_outline'}}</igx-icon>
    </ng-template>
</igx-combo>
```

### アイコン テンプレートのクリア
セレクター `[igxComboClearIcon]` の使用:

```html
<igx-combo>
    <ng-template igxComboClearIcon>
        <igx-icon>music_off</igx-icon>
    </ng-template>
</igx-combo>
```

<div class="divider--half"></div>

### コンボ入力のテンプレート化
上記セレクターのテンプレートで使用される `[igxComboClearIcon]` と `[igxComboToggleIcon]` は、コンボ入力の各ボタンの表示を変更するために使用されます。`igx-combo` 内のコンテンツを渡すことにより、`igx-input-group` をテンプレート化する方法と同様のコンボ入力のテンプレート化も可能になります。 (`igx-prefix`、`igx-suffix`、`[igxLabel]`) が可能になります。以下のコード スニペットは、適切なラベルや `igx-prefix` をコンボに追加する方法、ボタン アイコンを変更する方法を示します。
```html
    <igx-combo [data]="myMusic">
        ...
        <label igxLabel>Genres</label>
        <igx-prefix><igx-icon>music_note</igx-icon></igx-prefix>
        <ng-template igxComboClearIcon>
            <igx-icon>music_off</igx-icon>
        </ng-template>
        ...
    </igx-combo>
```

## その他のリソース
<div class="divider--half"></div>

* [コンボ機能](combo_features.md)
* [コンボ リモート バインディング](combo_remote.md)
* [テンプレート駆動フォームの統合](input_group.md)
* [リアクティブ フォームの統合](input_group_reactive_forms.md)
* [カスケーディング](combo_cascading.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
