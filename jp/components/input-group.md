---
title: Input Groups コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Input Groups は、データ入力のための使いやすいフォーム、さらに検証およびエラー処理などの機能も提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Label コンポーネント, Angular Label コントロール, Angular Input Group コンポーネント, Angular Input Group コントロール, Angular Input コンポーネント, Angular Input コントロール, Input コンポーネント, Input コントロール, Label コンポーネント, Label コントロール, Angular Input ディレクティブ, Angular Label ディレクティブ, Angular Forms, Angular リアクティブ フォーム, Angular フォームの検証
_language: ja
---

# Input Group
<p class="highlight">`IgxInputGroup` を使用すると、テキスト、アイコン、またはボタンを両側に追加して、入力と選択を拡張できます。</p>
<div class="divider--half"></div>

## Angular Input Group の例

<code-view style="height:100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-1" alt="Angular Input Group の例">
</code-view>

<div class="divider--half"></div>

## 使用方法
Input Group コンポーネントを初期化にするには、まず `IgxInputGroupModule` を `igniteui-angular` ツールキットにインポートします。

`IgxInputGroup` はテンプレート駆動フォームを使用するために **FormsModule** にも依存します。

```typescript
// app.module.ts

...
import { IgxInputGroupModule } from 'igniteui-angular';
// import { IgxInputGroupModule } from '@infragistics/igniteui-angular'; for licensed package
import { FormsModule } from '@angular/forms';

@NgModule({
    ...
    imports: [..., IgxInputGroupModule, FormsModule],
    ...
})
export class AppModule {}
```

> [!NOTE]
> `igxInput`、`igxLabel`、`igx-preix`、`igx-suffix` または `igx-hint` ディレクティブを使用するには、`<igx-input-group>` コンテナーでラップする必要があります。

## 例

### Label および Input
[`igxLabel`]({environment:angularApiUrl}/classes/igxlabeldirective.html)、[`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) ディレクティブとその検証、データ バインディング、API については、[このトピック](label-input.md)を参照してください。

### Prefix および Suffix
`igx-prefix` / `igxPrefix` および `igx-suffix` / `igxSuffix` ディレクティブは、HTML 要素、文字列、アイコン、またはその他のコンポーネントを含むことができます。以下のサンプルでは、文字列 **prefix** とアイコン **suffix** を持つ新しい入力フィールドを作成します。

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="tel" />
    <igx-icon igxSuffix>phone</igx-icon>
</igx-input-group>
```

<div class="sample-container loading" style="height:100px">
<iframe class="lazyload" id="input-group-sample-3-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-3' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### Hint
[`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) ディレクティブは、入力の下に配置されるヘルパー テキストを提供します。[`position`]({environment:angularApiUrl}/classes/igxhintdirective.html#position) プロパティの値に応じて、入力の開始または終了の位置に配置できます。以下は、phone 入力にヒントを追加します。

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="tel" />
    <igx-suffix>
        <igx-icon>phone</igx-icon>
    </igx-suffix>
    <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
</igx-input-group>
```

ヒントを追加した phone フィールドは以下のようになります。
<div class="sample-container loading" style="height:110px">
<iframe class="lazyload" id="input-group-sample-4-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-4' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### Input タイプと Input グループ タイプ トークン
入力グループのスタイルは、[`igxInputGroup`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) コンポーネントの [`type`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#type) プロパティを使用して変更できます。サポートされている入力グループ コンポーネントは、`line` (タイプが指定されていない場合のデフォルト)、`border`、`box` および `search` です。`line`、`border` および `box` タイプは、マテリアル デザイン テーマ専用に作成されています。これらのタイプを他のテーマで設定しても、入力グループの外観には影響しません。

特定の型を宣言的に設定する例:
```html
<igx-input-group type="border">
```

[IGX_input-group_TYPE]({environment:angularApiUrl}/index.html#igx_input-group_type) インジェクション トークンを使用すると、すべての入力グループ インスタンスのタイプをアプリケーション レベルで指定できます。すべての関連コンポーネントを一度に簡単にスタイル設定できます。
タイプを設定するには、[IGX_input-group_TYPE]({environment:angularApiUrl}/index.html#igx_input-group_type) インジェクション トークンを使用して DI プロバイダーを作成します。

```typescript
providers: [{provide: IGX_input-group_TYPE, useValue: 'box' }]
```

>[!NOTE]
>[`type`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#type) プロパティは [IGX_INPUT_GROUP_TYPE]({environment:angularApiUrl}/index.html#igx_input_group_type) よりも優先されるため、type プロパティが明示的に設定されている場合トークン値をコンポーネントレベルでオーバーライドできます。
>`igniteui-angular` フォーム コントロールのほとんどは、内部で input-group コンポーネントを使用するか、カスタム テンプレートを使用します。グローバル トークンの設定は、これらのコンポーネントにも影響します。

Ignite UI for Angular は、`type="file"` の入力スタイルも提供し、すべての入力グループ タイプとテーマをサポートします。以下をテンプレートに追加するだけです:

```html
<igx-input-group>
    <input igxInput type="file" multiple />
</igx-input-group>
```

<code-view style="height:695px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-5" >
</code-view>

### Input Group テーマ

入力グループ コンポーネントは、`material`、`fluent`、`bootstrap`、`indigo-design` などの複数のテーマをサポートします。[`theme`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#theme) は、コンポーネントの初期化中に自動的に設定され、現在使用されているスタイルシートから推測されます。

```html
<igx-input-group theme="fluent">...</igx-input-group>
```

### 型指定されたフォーム
Ignite UI for Angular Input Group コンポーネントは、Angular 14 のデフォルトの厳密に型指定されたリアクティブ フォーム内で使用できます。型指定されたフォームの詳細については、[Angular 公式ドキュメント](https://angular.io/guide/typed-forms)をご覧ください。

<code-view style="height:770px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/typed-form" >
</code-view>

## 検証
次のサンプルは、[テンプレート駆動フォーム](https://angular.io/guide/forms)または[リアクティブ フォーム](https://angular.io/guide/reactive-forms)を使用する場合に入力検証を構成する方法を示しています。

### テンプレート駆動フォーム
テンプレート駆動のフォーム検証は、検証属性 (`required`、`minlength` など) を `input` 要素に追加することによって実現されます。

```html
<form>
    <igx-input-group>
        <label igxLabel for="username">Username</label>
        <input igxInput name="username" type="text" required />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" required email />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" type="password" required minlength="8" />
    </igx-input-group>

    <button igxButton="raised" igxRipple type="submit">Submit</button>
</form>
```

`required` 属性はラベルの横にアスタリスクを追加し、このフィールドに入力する必要があることを示します。さらに、`input` に `email` や `minlength` などの追加の検証が適用されている場合、これにより、[`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) ディレクティブを介して追加要件をエンド ユーザーに通知します。

次の例では、双方向データ バインディングを使用し、`ngModel` をローカル変数にエクスポートしてコントロールの状態を検査する方法を示します。

```html
<form>
    ...
    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" [(ngModel)]="user.email" #email="ngModel" required email />
        <igx-hint *ngIf="email.errors?.email">Please enter a valid email</igx-hint>
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" type="password"
            [(ngModel)]="user.password" #password="ngModel" required minlength="8" />
        <igx-hint *ngIf="password.errors?.minlength">Password should be at least 8 characters</igx-hint>
    </igx-input-group>

    <button igxButton="raised" igxRipple type="submit">Submit</button>
</form>
```

フォーム コントロールのいずれかが無効な場合、ユーザーはフォームを送信できないようにする必要があります。これは、フォームの状態に基づいて送信ボタンを有効/無効にすることで実現できます。

次の例は、`ngForm` をローカル変数にエクスポートしてフォームの状態を検査する方法を示しています。

```html
<form #registrationForm="ngForm">
    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" [(ngModel)]="user.email" #email="ngModel" required email />
        <igx-hint *ngIf="email.errors?.email">Please enter a valid email</igx-hint>
    </igx-input-group>
    ...

    <button igxButton="raised" igxRipple type="submit" [disabled]="!registrationForm.valid">Submit</button>
</form>
```

上記の構成の結果は、次のサンプルで確認できます。[Email] および [Password] フィールドに入力を開始すると、入力された値が無効な場合に [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) が表示されることがわかります。サンプルは、[`igx-icon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) および [`igx-suffix`](#prefix-および-suffix) ディレクティブを使用してパスワードの可視性を切り替える方法も示します。

<code-view style="height:480px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/template-driven-form-validation" >
</code-view>

### リアクティブ フォーム
コンポーネント クラスのフォーム コントロール モデルにバリデーター関数を直接追加することにより、リアクティブなフォーム検証が実現されます。コンポーネント クラスでコントロールを作成したら、テンプレートのフォーム コントロール要素に関連付ける必要があります。

```ts
public registrationForm: FormGroup<User>;

constructor(fb: FormBuilder) {
    this.registrationForm = fb.group({
        username: ['', { nonNullable: true, validators: [Validators.required] }],
        email: ['', { nonNullable: true, validators: [Validators.required, Validators.email] }],
        password: ['', { nonNullable: true, validators: [Validators.required, Validators.minLength(8)] }]
    });
}
```
```html
<form [formGroup]="registrationForm">
    <igx-input-group>
        <label igxLabel for="username">Username</label>
        <input igxInput name="username" type="text" formControlName="username" />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" formControlName="email" />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" type="password" formControlName="password" />
    </igx-input-group>

    <button igxButton="raised" igxRipple type="submit">Submit</button>
</form>
```

テンプレート駆動のフォーム サンプルと同様に、`email` や `minlength` などの追加の検証がある場合、[`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) ディレクティブを使用して、検証が失敗した場合にエンド ユーザーに通知できます。

次の例は、`get` メソッドを介してコントロールにアクセスし、その状態を検査する方法を示しています。また、`FormGroup` の状態を調べて、送信ボタンを有効/無効にする方法も示しています。

```ts
public get email() {
    return this.registrationForm.get('email');
}

public get password() {
    return this.registrationForm.get('password');
}
```
```html
<form [formGroup]="registrationForm">
    ...
    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" formControlName="email" />
        <igx-hint *ngIf="email.errors?.email">Please enter a valid email</igx-hint>
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" type="password" formControlName="password" />
        <igx-hint *ngIf="password.errors?.minlength">Password should be at least 8 characters</igx-hint>
    </igx-input-group>

    <button igxButton="raised" igxRipple type="submit" [disabled]="!registrationForm.valid">Submit</button>
</form>
```

上記の構成の結果は、次のサンプルで確認できます。テンプレート駆動のフォーム サンプルと同様に、[`igx-icon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) および [`igx-suffix`](#prefix-および-suffix) ディレクティブを使用してパスワードの可視性を切り替える方法も示します。

<code-view style="height:480px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/reactive-form-validation" >
</code-view>

### カスタム バリデータ
一部の入力フィールドではカスタム検証が必要な場合があり、これはカスタム バリデータを介して実現できます。値が無効な場合、バリデータは特定のエラー メッセージを表示するために使用できる一連のエラーを生成します。

以下は、入力されたメール アドレスに定義済みの値が含まれているかどうかを検証し、値が発生する場所に基づいてさまざまなエラーを生成する、単純なカスタム リアクティブ フォーム バリデータの例です。

```ts
public registrationForm: FormGroup<User>;

constructor(fb: FormBuilder) {
    this.registrationForm = fb.group({
        email: ['', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.email,
                this.emailValidator('infragistics')
            ]
        }],
        ...
    });
}

private emailValidator(val: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();
        const localPartRegex = new RegExp(`(?<=(${val})).*[@]`);
        const domainRegex = new RegExp(`(?<=[@])(?=.*(${val}))`);
        const returnObj: ValidatorErrors = {};

        if (value && localPartRegex.test(value)) {
            returnObj.localPart = true;
        }
        if (value && domainRegex.test(value)) {
            returnObj.domain = true;
        }

        return returnObj;
    }
}
```

### クロス フィールド検証
場合によっては、1 つのコントロールの検証が別のコントロールの値に依存することがあります。単一のカスタム バリデータで両方のコントロールを評価するには、共通の祖先コントロール (`FormGroup` など) で検証を実行する必要があります。バリデータは、`FormGroup` の `get` メソッドを呼び出して子コントロールを取得し、値を比較します。検証に失敗すると、`FormGroup` に対して一連のエラーを生成します。

これにより、フォームの状態のみが無効に設定されます。コントロールの状態を設定するには、[`setErrors`](https://angular.io/api/forms/AbstractControl#seterrors) メソッドを使用して、生成したエラーを手動で追加します。次に、検証が成功すると、[`setValue`](https://angular.io/api/forms/AbstractControl#setvalue) メソッドを使用してエラーを削除できます。このメソッドは、指定された値に対してコントロールの検証を再実行します。

以下の例は、[パスワード] に [メール アドレス] が含まれていてはならず、[パスワードの再入力] が [パスワード] と一致している必要があるクロスフィールドの検証を示しています。

```ts
private passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const email = control.get('email');
        const password = control.get('password');
        const repeatPassword = control.get('repeatPassword');
        const returnObj: ValidatorErrors = {};

        if (email.value
            && password.value
            && password.value.toLowerCase().includes(email.value)) {
            password.setErrors({ ...password.errors, containsEmail: true });
            returnObj.containsEmail = true;
        }

        if (password
            && repeatPassword
            && password.value !== repeatPassword.value) {
            repeatPassword.setErrors({ ...repeatPassword.errors, mismatch: true });
            returnObj.mismatch = true;
        }

        if (!returnObj.containsEmail && password.errors?.containsEmail) {
            password.setValue(password.value);
        }

        if (!returnObj.mismatch && repeatPassword.errors?.mismatch) {
            repeatPassword.setValue(repeatPassword.value);
        }

        return returnObj;
    }
}
```

カスタム バリデータを `FormGroup` に追加するには、フォームの作成時に 2 番目の引数として渡す必要があります。

```ts
public registrationForm: FormGroup<User>;

constructor(fb: FormBuilder) {
    this.registrationForm = fb.group({
        email: ['', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.email,
                this.emailValidator('infragistics')
            ]
        }],
        ...
    },
    {
        validators: [this.passwordValidator()]
    });
}
```

以下のサンプルは、組み込みのバリデータを、前の例のカスタム `emailValidator` およびクロスフィールド `passwordValidator` と組み合わせて使用する方法を示しています。

<code-view style="height:480px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/reactive-form-custom-validation" >
</code-view>

## スタイル設定

入力グループのスタイル設定を開始するには、`index` ファイルをスタイルファイルに含めます。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

次に、[`input-group-theme`]({environment:sassApiUrl}/index.html#function-input-group-theme) を拡張する新しいテーマを作成し、変更するパラメーターを渡します。

```scss
$custom-input-group: input-group-theme(
  $filled-text-color: #288a54,
  $focused-text-color: #174f30,
  $idle-text-color: #288a54,
  $idle-bottom-line-color: #288a54,
  $interim-bottom-line-color: #288a54,
  $hover-bottom-line-color: #288a54,
  $focused-secondary-color: #174f30,
  $box-background: #eeeeee
);
```

### CSS 変数の使用

最後に、新しく作成したテーマを含めます。

```scss
@include css-vars($custom-input-group);
```

### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、[input group mixin]({environment:sassApiUrl}/index.html#mixin-igx-input-group) を用いる必要があります。

ただし、先の手順に示すように、インクルード ステートメントをそのままにすると、スタイルは適切に適用されません。テキストの色が適切に変更された場合も、下の境界線と背景は同じままです。これは、コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用しているためです。`input` 要素と `label` 要素はビューの一部であるため、スタイルが正しく適用されます。下の境界線は `igx-input-group` コンポーネントによって生成され、コンポーネントのスタイルの**影響を受けません**。

境界線のスタイルを設定するには、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターでスタイルのスコープを設定する必要があります。

```scss
:host {
    ::ng-deep {
        @include input-group($custom-input-group);
    }
}
```

### デモ


<code-view style="height:120px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-style" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
* [IgxInputGroup タイプ]({environment:angularApiUrl}/index.html#IgxInputGroupType)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent スタイル]({environment:sassApiUrl}/index.html#function-input-group-theme)

## テーマの依存関係
* [IgxButton テーマ]({environment:sassApiUrl}/index.html#function-button-theme)
* [IgxIcon テーマ]({environment:sassApiUrl}/index.html#function-icon-theme)

## その他のリソース
<div class="divider--half"></div>

関連トピック:

* [Label および Input](label-input.md)
* [リアクティブ フォームの統合](angular-reactive-form-validation.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
