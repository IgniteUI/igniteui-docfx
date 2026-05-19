---
title: Ignite UI CLI を使用したステップ バイ ステップ ガイド| Ignite UI for Angular | インフラジスティックス
_description: ステップ バイ ステップ モードには、Ignite UI CLI オプションによるガイドが含まれます。
_keywords: angular cli, ignite ui for angular, infragistics
_language: ja
---

# Ignite UI CLI を使用したステップ バイ ステップ ガイド

利用可能なオプションでガイドを取得する場合、ステップバイステップ モードを初期化して新しいアプリケーションの作成およびセットアップ、同様に [Ignite UI CLI](getting-started-with-cli.md) で以前作成したプロジェクトを更新できます。

Ignite UI CLI を使用してガイドを開始するには、`ig` コマンドを実行します。

```bash
ig
```

または

```bash
ig new
```

これにより、ステップバイステップ モードがアクティブになり、新しいプロジェクトの作成に役立つ一連の質問が表示されます。

<div style="display:inline-block;">
    <a style="background: url(../../../images/general/buildCLIapp.gif); display:flex; justify-content:center; min-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../../images/general/play.svg" style="vertical-align: middle;" />
    </a>
</div>

> [!Note]
> ステップ バイ ステップ モードは `Inquirer.js` に依存しています。[サポートされている端末](https://github.com/SBoudrias/Inquirer.js#support-os-terminals)を参照してください。



## 新しいプロジェクトの作成

最初に、アプリケーションの名前を入力します。

![](../../../images/general/ig-step-by-step-new-project-name.png)

フレームワークとして `Angular` を選択すると、生成するプロジェクトのタイプを選択するように求められます。
<img class="responsive-img"  src="../../../images/general/ig-step-by-step-project-type-cli.png" />

次に、利用可能なプロジェクト テンプレートのいずれかを選択します。空のプロジェクト、サイド ナビゲーションのあるプロジェクト、または基本認証モジュールのある[認証プロジェクト](auth-template.md)を作成できます。矢印キーを使用して使用可能なオプションをナビゲートし、ENTER を押して選択を確認します。

![](../../../images/general/ig-step-by-step-new-project-template.png)

次のステップでは、アプリケーションのテーマを選択します。デフォルトのオプションを選択すると、Ignite UI for Angular のデフォルト テーマの Ignite UI がプリコンパイルされた CSS ファイル (`igniteui-angular.css`) がプロジェクトの `angular.json` に含まれます。カスタムオプションは、`app/styles.scss` の [Theming API](../../themes.md) を使用して、カラーパレットとテーマのコードを生成します。

![](../../../images/general/ig-step-by-step-new-project-theme.png)

上記の手順を完了すると、アプリケーション構造が生成されます。次に、ウィザードは [AI コーディング アシスタントの設定](#configure-ai-assistants)を促します。AI 設定が完了すると、Git リポジトリが初期化され、プロジェクトがコミットされ、プロセスを完了するかアプリケーションに新しいビューを追加するかを尋ねられます:

![](../../../images/general/ig-step-by-step-new-project-action.png)

## ビューの追加

Ignite UI CLI は、プロジェクトに追加できる複数のコンポーネント テンプレート、およびより詳細なシナリオ テンプレートをサポートしています。このモードは、プロジェクトの作成が完了した後、または以下のコマンドを使用して既存のプロジェクト内でアクティブにできます。

Ignite UI CLI を使用する場合、`add` コマンドを実行します。

```bash
ig add
```

新しいコントロールを追加することを選択した場合、カテゴリにグループ化された[使用可能なテンプレート](component-templates.md#コンポーネント-テンプレート)のリストが提供されます。

![](../../../images/general/ig-step-by-step-template-group.png)

矢印キーを使用してオプションをナビゲートし、ENTER を使用して選択したオプションを選択します。

たとえば、カスタムグリッドなどの一部のテンプレートでは、有効にできるオプションのリストが提供されます。オプションは、スペース キーで切り替えることができます。

![](../../../images/general/ig-step-by-step-component-features.png)

アプリケーションにシナリオを追加することを選択した場合、使用可能な[シナリオ テンプレート](component-templates.md#シナリオ-テンプレート)のリストも取得できます。

<img class="responsive-img"  src="../../../images/general/ig-step-by-step-scenario-templates.png" />

アプリケーションにテンプレートを追加した後、プロセスを完了するかコントロールの追加を続行するかどうかを選択します。プロセスの完了を選択すると、必要なパッケージが (プロジェクト作成時に) インストールされ、アプリケーションがデフォルトのブラウザーで開かれます。

以下の構文を使用して [`add`](getting-started-with-cli.md#add-template) コマンドを使用すると、後からいつでも、Ignite UI for Angular ビューをアプリケーションに追加できます。
`ig add [template] [name]`.

## AI アシスタントの設定 {#configure-ai-assistants}

フレームワーク、プロジェクト タイプ、テンプレート、テーマを選択した後、ウィザードは AI コーディング アシスタント統合の設定を促します。このステップは `ig ai-config` と同じロジックを実行しますが、プロジェクト作成フローに組み込まれています。

### コーディング アシスタントの選択

MCP サーバーを設定するコーディング アシスタントを選択するよう促されます。スペース キーで選択をトグルし、ENTER で確認します:

![ステップ バイ ステップ AI 設定 コーディング アシスタント プロンプト](../../../images/general/ig-step-by-step-ai-config-assistants.png)

- **Generic** (Claude Code、VS Code など) - `.mcp.json` に書き込みます
- **VS Code** (GitHub Copilot) - `.vscode/mcp.json` に書き込みます
- **Cursor** - `.cursor/mcp.json` に書き込みます
- **Gemini** - `.gemini/settings.json` に書き込みます
- **JetBrains Junie** - `.junie/mcp/mcp.json` に書き込みます
- **None** - MCP 設定をスキップします

デフォルトの選択は **Generic** です。**None** を選択すると MCP サーバー設定が完全にスキップされます。

### AI エージェントの選択

次に、スキル ファイルとインストラクションを設定する AI エージェントを選択するよう促されます:

![ステップ バイ ステップ AI 設定 エージェント プロンプト](../../../images/general/ig-step-by-step-ai-config-agents.png)

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

> [!NOTE]
> 非対話形式のプロジェクト作成時に AI 設定プロンプトを完全にスキップするには、`ig new` に `--assistants none --agents none` を渡します。後から AI 設定を再実行するには、プロジェクト ルートから `ig ai-config` を使用してください。
