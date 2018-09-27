---
title: コンボ テンプレート
_description: igx-combo コンポーネントの異なる領域 (項目、ヘッダー、フッター、空リスト、ボタンの追加) にカスタム テンプレートを定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント,  Angular テンプレート, Angular Combo テンプレート
_language: ja
---

## コンボ テンプレート
<p class="highlight">
[igx-combo]({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/classes/igxcombocomponent.html) コンポーネントの異なる領域 (項目、ヘッダー、フッター、空リスト、ボタンの追加) にカスタム テンプレートを定義できます。
</p>
<div class="divider"></div>

### デモ

<div class="sample-container loading" style="height: 450px;">
    <iframe id="combo-templates-sample" frameborder="0" seamless width="700px" height="100%" src="{environment:demosBaseUrl}/combo-template" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-templates-sample" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>

### 使用方法
Ignite UI for Angular Combo を初期化する前に、[IgxComboModule]({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/classes/igxcombomodule.html) を **app.module.ts** ファイルにインポートします。

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

    <ng-template #itemTemplate let-display let-key="valueKey">
        <div class="item">
            <span class="state">{{ display[key] }} - </span>
            <span class="region">{{ display.region }}</span>
        </div>
    </ng-template>

    <ng-template #headerTemplate>
        <div class="header-class">State - Region</div>
    </ng-template>

    <ng-template #footerTemplate>
        <div class="footer-class">Infragistics 2018</div>
    </ng-template>

    <igx-combo>
        <ng-template #emptyTemplate>
            <span class="empty-class">No available states</span>
        </ng-template>
    </igx-combo>
</igx-combo>
```

## テンプレート タイプ
以下のいずれかのテンプレートを定義した場合、定義済みの名前を使用して参照してください。

### 項目テンプレート
参照名 **`itemTemplate`** の使用

```html
<igx-combo>
	<ng-template #itemTemplate let-display let-key="valueKey">
		<div class="item">
			<span class="state">State: {{ display[key] }}</span>
			<span class="region">Region: {{ display.region }}</span>
		</div>
	</ng-template>
</igx-combo>
```

### ヘッダー テンプレート
参照名 **`headerTemplate`** を使用

```html
<igx-combo>
    <ng-template #headerTemplate>
        <div class="header-class">Custom header</div>
        <img src=""/>
    </ng-template>
</igx-combo>
```

### フッター テンプレート
参照名 **`footerTemplate`** を使用

```html
<igx-combo>
    <ng-template #footerTemplate>
        <div class="footer-class">Custom footer</div>
        <img src=""/>
    </ng-template>
</igx-combo>
```

### 空のテンプレート
参照名 **`emptyTemplate`** を使用

```html
<igx-combo>
    <ng-template #emptyTemplate>
        <span>List is empty</div>
    </ng-template>
</igx-combo>
```

### テンプレートの追加
参照名 **`addItemTemplate`** を使用

```html
<igx-combo>
    <ng-template #addItemTemplate>
        <span>Add town</span>
    </ng-template>
</igx-combo>
```
<div class="divider--half"></div>

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
