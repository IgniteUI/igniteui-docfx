---
title: Ignite UI for Angular Schematics を使用したステップ バイ ステップ ガイド | Ignite UI for Angular | インフラジスティックス
_description: ステップ バイ ステップ モードには、Ignite UI CLI オプションによるガイドが含まれます。
_keywords: angular cli, ignite ui for angular, infragistics
_language: ja
---

# Ignite UI for Angular Schematics を使用したステップ バイ ステップ ガイド

利用可能なオプションでガイドを取得する場合、ステップバイステップ モードを初期化して新しいアプリケーションの作成およびセットアップ、同様に [Ignite UI Angular Schematics](getting-started-with-angular-schematics.md) で以前作成したプロジェクトを更新できます。

Schematics コレクションを使用してガイドをアクティブにするには、以下のコマンドを実行します。

```cmd
ng new --collection="@igniteui/angular-schematics"
```

これにより、ステップバイステップ モードがアクティブになり、新しいプロジェクトの作成に役立つ一連の質問が表示されます。

<div style="display:inline-block;">
    <a style="background: url(../../../images/general/buildCLIapp.gif); display:flex; justify-content:center; width: 80vw; max-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../../images/general/play.svg" style="vertical-align: middle;" />
    </a>
</div>

> [!Note]
> ステップ バイ ステップ モードは `Inquirer.js` に依存しています。[サポートされている端末](https://github.com/SBoudrias/Inquirer.js#support-os-terminals)を参照してください。


## 新しいプロジェクトの作成

まず、アプリケーションをブートストラップする方法として、モジュールとスタンドアロン コンポーネントのどちらを使用するのかを選択するように求められます。

<img class="responsive-img"  src="../../../images/general/ig-step-by-step-project-type.png" />

次に、アプリケーションの名前を入力します。

<img class="responsive-img"  src="../../../images/general/ig-step-by-step-new-project-name.png" />

次に、利用可能なプロジェクト テンプレートのいずれかを選択します。空のプロジェクト、サイド ナビゲーションのあるプロジェクト、または基本認証モジュールのある[認証プロジェクト](auth-template.md)を作成できます。矢印キーを使用して使用可能なオプションをナビゲートし、ENTER を押して選択を確認します。

<img class="responsive-img"  src="../../../images/general/ig-step-by-step-new-project-template.png" />

次のステップでは、アプリケーションのテーマを選択します。デフォルトのオプションを選択すると、Ignite UI for Angular のデフォルト テーマの Ignite UI がプリコンパイルされた CSS ファイル (`igniteui-angular.css`) がプロジェクトの `angular.json` に含まれます。カスタムオプションは、`app/styles.scss` の [Theming API](../../themes.md) を使用して、カラーパレットとテーマのコードを生成します。

<img class="responsive-img"  src="../../../images/general/ig-step-by-step-new-project-theme.png" />

上記の手順を完了すると、ウィザードはプロジェクト構造を生成し、次に [AI コーディング アシスタントの設定](#ai-アシスタント統合)を促します。AI 設定が完了すると、Git リポジトリが初期化されて初期状態がコミットされます。次に、プロセスを完了するか、アプリケーションに新しいビューを追加するかのプロンプトが表示されます。

<img class="responsive-img"  src="../../../images/general/ig-step-by-step-new-project-action.png" />

## ビューの追加

Ignite UI CLI は、プロジェクトに追加できる複数のコンポーネント テンプレート、およびより詳細なシナリオ テンプレートをサポートしています。このモードは、プロジェクトの作成が完了した後、または以下のコマンドを使用して既存のプロジェクト内でアクティブにできます。

Schematics コレクションを使用してステップバイステップ モードをアクティブにするには、`component`(alias:`c`) schematic を実行します。

```bash
ng g @igniteui/angular-schematics:component
```

新しいコントロールを追加することを選択した場合、カテゴリにグループ化された[使用可能なテンプレート](component-templates.md#コンポーネント-テンプレート)のリストが提供されます。

<img class="responsive-img"  src="../../../images/general/ig-step-by-step-template-group.png" />

矢印キーを使用してオプションをナビゲートし、ENTER を使用して選択したオプションを選択します。

たとえば、カスタムグリッドなどの一部のテンプレートでは、有効にできるオプションのリストが提供されます。オプションは、スペース キーで切り替えることができます。

<img class="responsive-img"  src="../../../images/general/ig-step-by-step-component-features.png" />

アプリケーションにシナリオを追加することを選択した場合、使用可能な[シナリオ テンプレート](component-templates.md#シナリオ-テンプレート)のリストも取得できます。

<img class="responsive-img"  src="../../../images/general/ig-step-by-step-scenario-templates.png" />

アプリケーションにテンプレートを追加した後、プロセスを完了するかコントロールの追加を続行するかどうかを選択します。プロセスの完了を選択すると、必要なパッケージが (プロジェクト作成時に) インストールされ、アプリケーションがデフォルトのブラウザーで開かれます。

`ng g @igniteui/angular-schematics:c [template] [name]` コマンドを使用して、後からいつでも、Ignite UI for Angular ビューをアプリケーションに追加できます。

## AI アシスタント統合

プロジェクトのブートストラップ タイプ、名前、テンプレート、テーマを選択した後、ウィザードは AI コーディング アシスタント統合の設定を促します。このステップは `ng generate @igniteui/angular-schematics:ai-config` と同じロジックを実行しますが、プロジェクト作成フローに組み込まれています。

### コーディング アシスタントの選択

MCP サーバーを設定するコーディング アシスタントを選択するよう促されます。スペース キーで選択をトグルし、ENTER で確認します:

![ステップ バイ ステップ プロンプト: MCP 設定用コーディング アシスタントの選択](../../../images/general/ig-step-by-step-ai-config-assistants.png)

- **Generic** (Claude Code、VS Code など) - `.mcp.json` に書き込みます
- **VS Code** (GitHub Copilot) - `.vscode/mcp.json` に書き込みます
- **Cursor** - `.cursor/mcp.json` に書き込みます
- **Gemini** - `.gemini/settings.json` に書き込みます
- **JetBrains Junie** - `.junie/mcp/mcp.json` に書き込みます
- **None** - MCP 設定をスキップします

デフォルトの選択は **Generic** です。**None** を選択すると MCP サーバー設定が完全にスキップされます。

### AI エージェントの選択

次に、スキル ファイルとインストラクションを設定する AI エージェントを選択するよう促されます:

![ステップ バイ ステップ プロンプト: スキル ファイルとインストラクション用 AI エージェントの選択](../../../images/general/ig-step-by-step-ai-config-agents.png)

- **Generic** - `.agents/skills/` と `AGENTS.md`
- **Claude** - `.claude/skills/` と `.claude/CLAUDE.md`
- **Copilot** - `.github/skills/` と `.github/copilot-instructions.md`
- **Cursor** - `.cursor/skills/` と `.cursor/rules/cursor.mdc`
- **Codex** - `.codex/skills/` と `.codex/instructions.md`
- **Windsurf** - `.windsurf/skills/` と `.windsurf/rules/guidelines.md`
- **Gemini** - `.gemini/skills/` と `.gemini/GEMINI.md`
- **Junie** - `.junie/skills/` と `.junie/guidelines.md`
- **None** - スキル ファイルとインストラクションをスキップします

デフォルトの選択は **Generic** と **Claude** です。**None** を選択するとエージェント設定が完全にスキップされます。

Angular schematic 経由で実行すると、Ignite UI サーバーと並んで追加の `angular-cli` MCP サーバー エントリが自動的に含まれます。

> [!NOTE]
> 非対話形式のプロジェクト作成時に AI 設定プロンプトを完全にスキップするには、`ng new` に `--assistants none --agents none` を渡します。後から AI 設定を再実行するには、プロジェクト ルートから `ng generate @igniteui/angular-schematics:ai-config` を使用してください。

MCP クライアント設定と利用可能なツールの詳細については、[Ignite UI CLI MCP](../../ai/cli-mcp.md) を参照してください。
