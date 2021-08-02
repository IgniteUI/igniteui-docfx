---
title: Angular リアクティブ フォームの検証 – Ignite UI for Angular
_description: Angular フォームの検証は、ユーザーが Web フォームに入力した入力が正しいかどうかを検証するプロセスです。Ignite UI for Angular リアクティブ フォームでそれを行う方法を紹介します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント,  Angular リアクティブ フォーム, Angular フォーム
_language: ja
---

# Angular リアクティブ フォームの検証 

## Angular のリアクティブ フォームとは?

Angular のリアクティブ フォームは、基になるフォーム オブジェクト モデルへの直接アクセスを提供し、フォーム入力を処理するための不変で明示的なアプローチを提供します。これらの入力の値は時間とともに変化するため、フォームの状態は、固定または柔軟性のない方法に依存したリアクティブ フォームによって管理されます。 

つまり、データ モデルに変更がトリガーされるたびに、いわゆる監視可能な演算子は、既存のデータ モデルを何度も更新するのではなく、新しいデータ モデルを返します。そして、それはフォームの状態をきれいに保ちます。 

Angular リアクティブ フォームは、次の理由により、非常にスケール可能で、再利用可能で、堅牢であると見なされます。

**不変性**

Angular のリアクティブ フォームは、不変または固定のデータ構造を提供します。基になるモデルの状態が変更されると、この特定のモデルの新しい「バージョン」が取得され、更新されます。新しい値がありますが、いつでもすべての (UI) コントロールと整合したままです。

**より良いテスト容易性**

テストはリアクティブ フォームを使用すると非常に簡単で、セットアップも少なくて済みます。大規模なアプリケーションになると、これは非常に有益です。ここでは、入力ストリームへの同期アクセスと、UI を描画せずにフォーム モデルとデータ モデルをテストする可能性があります。

**予測可能性**

リアクティブ フォームは、フォーム内のすべての一意の変更を追跡し、適切に構造化されたデータ フローのおかげで、入力値に同期的にアクセスできるようにする監視可能なストリームを中心に構築されています。これにより、リアクティブ フォームが非常に予測可能になります。

**一貫性のある構造化されたデータ フロー**

フォーム ロジックはコンポーネント クラスによって主導されるため、Angular リアクティブ フォームのデータ フローは適切に構造化されています。これにより、コンポーネント クラスの FormControl インスタンスに検証関数を直接追加できます。変更が発生するたびに、Angular はこれらの関数を呼び出します。


## Angular フォーム検証とは? 
Angular フォーム検証は、ユーザーが Web フォームに入力した内容が正しく完全であるかどうかを検証する重要な技術プロセスです。テンプレート駆動型アプローチまたは Angular リアクティブ フォームを使用して検証を管理できます。入力内容に基づいて、フォームはユーザーが続行できるようにするか、特定のエラー メッセージを表示して、ユーザーがデータ入力のどこで問題が発生したかを知るのに役立ちます。 

どの検証が失敗したかに応じて、画面上のエラー メッセージはフィードバックを提供し、何が間違っているのか、何が正確にデータとして入力または再入力する必要があるのかを示します。一般に、アプリはフォームを使用して、ユーザーがサインアップ、ログイン、オンライン プロファイルの更新、機密情報の送信などのデータ入力タスクを実行できるようにします。  

Angular は、フォーム入力の値が変更されるたびにフォーム検証を実行し、ユーザーが Web フォームに入力したデータ入力が正確で完全であるかどうかを確認します。これを適切に行うために、Angular は、発生する変更ごとに実行される検証のリストを呼び出します。  

UI からのユーザー入力の検証は、テンプレート駆動型フォームまたは Angular リアクティブ フォームのいずれかを使用して実行できます。これらのフォームは両方とも、次の基本クラスに基づいて構築されています:
* FormControl
* FormGroup
* FormArray  
* ControlValueAccessor

## Angular リアクティブ フォームの検証
リアクティブ フォームは、フォーム入力を管理するためのモデル駆動型アプローチを提供します。フォーム入力の値は時間とともに変化します。リアクティブ フォームはコンポーネント クラスに基づいて構築されているため、Angular リアクティブ フォームの検証は、コンポーネント クラスのフォーム コントロール モデルに検証関数を直接追加することで行われます。  

値が有効な場合、検証は `null` を返します。値が無効な場合、検証は一連のエラーを生成し、画面に特定のエラー メッセージを表示できます。

`required`、`minlength`、`maxlength` などの組み込みの検証があります。ただし、独自の検証を作成することもできます。

単純なカスタム リアクティブ フォーム検証は次のようになります:
```typescript
import { Directive, OnInit } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[dateValueValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: DateValueValidatorDirective, multi: true }]
})
export class DateValueValidatorDirective implements Validator {
    public validate(control: AbstractControl): ValidationErrors | null {
        if (!this.isDate(control.value)) {
            return { value: true };
        }

        return null;
    }

    private isDate(value: unknown): value is Date {
        return value instanceof Date
            && !isNaN(value.getTime());
    }
}
```

また、検証は非同期にすることもできます:
```typescript
import { Directive, OnInit } from '@angular/core';
import { AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Directive({
    selector: '[dateValueAsyncValidator]',
    providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: DateValueAsyncValidatorDirective, multi: true }]
})
export class DateValueAsyncValidatorDirective implements AsyncValidator {
    public validate(control: AbstractControl): Observable<ValidationErrors | null> {
        if (!this.isDate(control.value)) {
            return of({ value: true });
        }

        return of(null);
    }

    private isDate(value: unknown): value is Date {
        return value instanceof Date
            && !isNaN(value.getTime());
    }
}
```

## Angular リアクティブ フォーム検証の例
この Angular フォーム検証の例を使用して、リアクティブ フォーム検証の実践を設定する方法を見てみましょう。

これは、映画の一般的な標準フォームの簡単なデモです。1 つまたは複数のフォーム入力が不完全な場合に何が起こるかを示し、特定のエラー メッセージがどのように視覚化されるかを確認できます。

Angular リアクティブ フォーム検証の例では、必要なフィールドには、映画、氏名、電子メール、およびジャンルが含まれます。すべて完了しない限り、予約を続行することはできず、`予約ボタン`は無効のままになります。

そのため、映画のタイトル、氏名、電話番号、メール アドレスの値を入力すると、緑色で強調表示されます。ただし、`お気に入りのジャンル`を選択するのを忘れた場合、このフィールドは赤で強調表示され、値の入力が不完全であることを示します。値がすべて正しく設定されると、フィールドは緑色で強調表示され、正しい値の入力を示します。`予約ボタン`がアクティブになり、フォームを後で正常に送信できます。

<code-view style="height: 850px;"
    data-demos-base-url="{environment:demosBaseUrl}"
    iframe-src="{environment:demosBaseUrl}/data-entries/reactive-forms"
    alt="Angular リアクティブ フォーム統合の例">
</code-view>

<div class="divider--half"></div>

## Angular フォーム グループの検証
フォーム グループは基本的に、カプセル化されたコントロールの状態にアクセスできるようにする複数の関連する `FormControlls` のグループです。Angular フォーム グループの検証は、グループ コントロールまたはフォームの値を追跡したり、フォーム コントロールの状態の検証を追跡したりするのに役立ちます。`FormGroup` は `FormControl` とともに使用されます。

## なぜ Angular フォームのカスタム検証が必要なのか?
カスタム検証を使用すると、さまざまな機能に対応し、フォームの値が特定の基準を満たしていることを確認できます。これは、組み込みの検証のみを使用している場合には実行できない場合があります。電話番号または特定のパスワード パターンを検証する場合は、カスタム検証を作成し、Angular フォーム カスタム検証に依存することをお勧めします。

リアクティブ フォームを使用すると、新しい関数を作成するのと同じくらい簡単にそのようなフォームを生成できます。また、モデル駆動型フォーム （Angular のリアクティブ フォームなど）の場合、カスタム検証関数を作成して `FormControl` コンストラクターに送信します。

以下に、リアクティブ フォームでカスタム フォーム検証を作成して実装する方法を示します。

```typescript
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({/* ... */})
export class MyComponent implements OnInit {
    public form: FormGroup;

    public ngOnInit(): void {
        this.form = new FormGroup({
            datePicker: new FormControl('', [Validators.required, this.dateValidator(new Date())])
        });
    }

    private dateValidator(val: Date): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (this.isDate(control.value)
                || this.valGreaterThanDate(control.value, val)) {
                return { value: true };
            }

            return null;
        }
    }

    private valGreaterThanDate(value: Date, date: Date): boolean {
        const value1 = new Date(value).setHours(0, 0, 0, 0);
        const value2 = new Date(date).setHours(0, 0, 0, 0);
        return value.getTime() > date.getTime();
    }

    private isDate(value: unknown): value is Date {
        return value instanceof Date
            && !isNaN(value.getTime());
    }
}
```

## その他のリソース
<div class="divider--half"></div>

関連トピック:
* [Combo](combo.md)
* [Select](select.md)
* [Input Group](input-group.md)
* [Date Picker](date-picker.md)
* [Time Picker](time-picker.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
