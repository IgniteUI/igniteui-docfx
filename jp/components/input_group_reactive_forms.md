---
title: Reactive フォームの統合
_description: Ignite UI for Angular コントロールは簡単にリアクティブ フォームに統合できます。 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント,  Angular リアクティブ フォーム, Angular フォーム
_language: ja
---

## リアクティブ フォームの統合
<p class="highlight">
Ignite UI for Angular コントロールは簡単にリアクティブ フォームに統合できます。
</p>
<div class="divider"></div>

### デモ
以下のデモは、igx-input-group と igx-combo コントロールをリアクティブ フォームの一部に使用しています。

<div class="sample-container loading" style="height: 750px;">
    <iframe id="reactive-forms-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/reactive-forms" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="reactive-forms-sample" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

### 使用方法

リアクティブ フォームの使用方法、必要なモジュールについては、Angular [チュートリアル](https://angular.io/guide/reactive-forms) をご覧ください。

リアクティブ フォームを使用する前に Ignite UI コンポーネントのすべてのモジュールと **ReactiveFormsModule** をインポートします。

```typescript
// app.module.ts

...
import { IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule } from "igniteui-angular";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    ...
    imports: [..., IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule, ReactiveFormsModule],
    ...
})
export class AppModule {}
```


リアクティブ フォームに HTML `form` の `formGroup` を使用してモデルを設定し、各モデルのプロパティに対応する `formControlName` を各入力フィールドに設定します。

```html
<form class="input-group-form" [formGroup]="user" (ngSubmit)="onSubmit()">
    <h4 class="sample-title">Book your movie ticket</h4>
    <igx-input-group>
        <input igxInput name="fullName" type="text" formControlName="fullName"/>
        <label igxLabel for="fullName">Full Name</label>
        <igx-suffix>
            <igx-icon name="person"></igx-icon>
        </igx-suffix>
    </igx-input-group>
    ...
     <igx-combo #combo1 class="input-container" width="100%" [itemsMaxHeight]="130"
        [data]="dsGenres" type="line" formControlName="genres"
        placeholder="Select your favorite genres" searchPlaceholder="Search...">
    </igx-combo>
    ...
```
フォームの `formGroup` プロパティに設定したオブジェクトはフォーム モデルで `formGroup` タイプである必要があります。Angular のリアクティブ フォームのチュートリアルでは、デモのコンストラクターに `FormBuilder` を定義して異なるフォーム フィールドを定義する必要があります。

```typescript
export class ReactiveFormsSampleComponent {

    public user: FormGroup;
    constructor(fb: FormBuilder) {
        this.user = fb.group({
            date: [""],
            dateTime: [""],
            email: ["", Validators.required],
            fullName: new FormControl("", Validators.required),
            genres: ["", Validators.required],
            phone: [""]
        });
    }
}
```

その場合、姓名、メールアドレス、ジャンル フォームのフィールドが必要となり、値がない場合は送信されません。

## その他のリソース
<div class="divider--half"></div>

* [Combo](combo.md)
* [テンプレート駆動フォームの統合](input_group.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
