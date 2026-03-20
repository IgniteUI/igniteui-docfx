---
title: Ignite UI for Angular スキル | AI スキル | AI 支援開発 | Ignite UI for Angular | インフラジスティックス
_description: エージェントのスキルを使用して、Ignite UI for Angular コンポーネント、グリッド、データ操作、テーマ設定を使った AI 支援開発を強化する方法について説明します。
_keywords: ignite ui for angular, copilot skills, copilot スキル, ai assisted development, AI 支援開発, github copilot, cursor, windsurf, claude, jetbrains ai
_language: ja
---

# Ignite UI for Angular スキル

Ignite UI for Angular には**エージェントのスキル**が付属しています。これは、AI コーディング アシスタント (GitHub Copilot、Cursor、Windsurf、Claude、JetBrains AI など) に Ignite UI for Angular の使用方法を教える構造化されたナレッジ ファイルです。これらのスキル ファイルは、コンポーネント、グリッド、データ操作、テーマ設定に関するコンテキスト対応のガイダンスを提供し、AI アシスタントがベスト プラクティスに従った正確で慣用的なコードを生成できるようにします。

## 利用可能なスキル

スキル ファイルは、Ignite UI for Angular リポジトリの [`skills/`](https://github.com/IgniteUI/igniteui-angular/tree/master/skills) ディレクトリにあります:

| スキル | パス | 説明 |
|:------|:-----|:------------|
| コンポーネントとレイアウト | [`skills/igniteui-angular-components/SKILL.md`](https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-components/SKILL.md) | スタンドアロン コンポーネント、フォーム コントロール、オーバーレイ、レイアウト |
| データ グリッド | [`skills/igniteui-angular-grids/SKILL.md`](https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-grids/SKILL.md) | Grid、Tree Grid、Hierarchical Grid、Pivot Grid、ソート、フィルタリング、グループ化、ページング、リモート データ |
| テーマ設定とスタイル設定 | [`skills/igniteui-angular-theming/SKILL.md`](https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-theming/SKILL.md) | パレット、タイポグラフィ、エレベーション、コンポーネント テーマ、MCP サーバー |

> **注:** Ignite UI for Angular **21.1.0** 以降、これらのスキルはエージェントのスキル パス (例: `.claude/skills`、`.agents/skills`、`.cursor/rules/`) に配置すると自動的に検出されます。このリリースには、これらのスキルをプロジェクトに自動的に追加するオプションの移行が含まれています。

AI アシスタントでスキルを使用する方法は 2 つあります。常に自動的に適用される[永続的な IDE エージェントを作成する](#方法-1-永続的な-ide-エージェントを作成する)か、必要に応じて優先する IDE に[手動でダウンロードして読み込む](#手順-2-スキルを-ide-に読み込む)かです。

## 方法 1: 永続的な IDE エージェントを作成する

この方法では、スキルをプロジェクトに永続的に組み込むことで、すべての AI セッションが自動的に Ignite UI for Angular のガイドラインに従うようになります。ココピー＆ペースト は不要です。

### GitHub Copilot (VS Code)

GitHub Copilot は、リポジトリのルートにある `.github/copilot-instructions.md` ファイルからカスタム指示を読み取ります。永続的なエージェントを作成するには:

1. プロジェクト ルートに `.github/copilot-instructions.md` を作成 (または開く) します。
2. そのファイルに、該当するスキル内容への参照を追加するか、スキル内容を貼り付けます。例:

    ```markdown
    # Copilot Instructions

    This project uses Ignite UI for Angular. Follow the guidelines in the skill files below:

    - Components & Layout: https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-components/SKILL.md
    - Data Grids: https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-grids/SKILL.md
    - Theming & Styling: https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-theming/SKILL.md
    ```

3. あるいは、完全にオフラインで自己完結した指示にするために、関連する `SKILL.md` ファイルの完全なコンテンツを `copilot-instructions.md` に直接貼り付けます。
4. Copilot は、VS Code のすべてのチャットとインライン提案で、これらの指示を自動的に適用するようになります。

### Cursor

Cursor は、`.cursorrules` ファイルまたは `.cursor/rules/` ディレクトリを介して永続的なプロジェクト ルールをサポートします。

1. プロジェクト ルートに `.cursorrules` を作成します (または、名前付きルールの場合は `.cursor/rules/igniteui.md` を作成します)。
2. 目的の `SKILL.md` ファイルのコンテンツをそのファイルに貼り付けます。例:

    ```
    # Ignite UI for Angular Rules

    <paste contents of skills/igniteui-angular-components/SKILL.md here>
    <paste contents of skills/igniteui-angular-grids/SKILL.md here>
    ```

3. Cursor は、すべての AI リクエストにこれらのルールを自動的に含めるようになります。チャットで `@rules` メンションを使用して、必要に応じて特定のルールを参照することもできます。

### Windsurf

Windsurf は、プロジェクト ルートにある `.windsurfrules` ファイルから永続的なルールを読み取ります。

1. プロジェクト ルートに `.windsurfrules` を作成します。
2. 関連する `SKILL.md` ファイルの内容を貼り付けます。
3. Windsurf のすべての Cascade AI セッションに、これらが永続的な指示として含まれるようになります。

### JetBrains IDEs (WebStorm、IntelliJ)

JetBrains AI Assistant は、すべての AI インタラクションに適用されるプロジェクト レベルのプロンプトをサポートします。

1. **[設定]** (macOS では **[Preferences]**) → **[ツール]** → **[AI Assistant]** → **[プロジェクト レベルのプロンプト]** を開きます。
2. 関連する `SKILL.md` ファイルの内容をプロンプト フィールドに貼り付けます。
3. **[適用]** をクリックします。AI Assistant は、プロジェクト内のすべてのリクエストに対してこれらの指示に従うようになります。

### Claude Code

Claude Code は、プロジェクト レベルおよびユーザー レベルの `.claude/skills/` ディレクトリからスキルを検出します。

1. プロジェクト ルートに `.claude/skills/` ディレクトリを作成します。
2. `igniteui-angular/skills/` リポジトリからスキル ディレクトリを `.claude/skills/` にコピーします。

    ```
    .claude/
      skills/
        igniteui-angular-components/
          SKILL.md
        igniteui-angular-grids/
          SKILL.md
        igniteui-angular-theming/
          SKILL.md
    ```

3. Claude Code はコンテキストに基づいて、関連するスキルを自動的に検出して適用します。

> **ヒント:** `~/.claude/skills/` にスキルをグローバルにインストールすると、すべてのプロジェクトで利用可能になります。

### 一般的な AI エージェント

あるいは、一般的なエージェントのスキル設定を使用して、エージェントがオンデマンドでスキルを簡単に検出して自動的に読み込めるようにすることもできます。

1. プロジェクト ルートに `.agents/skills/` ディレクトリを作成します。
2. `igniteui-angular/skills/` リポジトリからスキル ディレクトリを `.agents/skills/` にコピーします。

    ```
    .agents/
      skills/
        igniteui-angular-components/
        igniteui-angular-grids/
        igniteui-angular-theming/
    ```

3. エージェントはこれらのスキルを検出し、リクエストのコンテキストに基づいて関連するスキルを自動的に読み込むようになります。

> **ヒント:** VS Code はデフォルトで `.github/skills/`、`.claude/skills/`、`.agents/skills/` でスキルを検索します。`chat.agentSkillsLocations` 設定を使用して、追加の場所を構成できます。

---

## 方法 2: スキルをダウンロードして読み込む

プロジェクトの設定ファイルを永続的に変更することなく、オンデマンドで特定のスキルを読み込みたい場合は、この方法を使用します。

### 手順 1: スキル ファイルを取得する

#### **オプション A - 個別のファイルをダウンロードする**

各スキル ファイルは GitHub から直接ダウンロードできます。まず、プロジェクト ルートに `.agents/skills/` ディレクトリを作成してから、そこにファイルをダウンロードします。

```bash

# Define the base target directory
BASE_DIR=".agents/skills"

# Components & Layout
curl --create-dirs -o $BASE_DIR/igniteui-angular-components/SKILL.md https://raw.githubusercontent.com/IgniteUI/igniteui-angular/master/skills/igniteui-angular-components/SKILL.md

# Data Grids
curl --create-dirs -o $BASE_DIR/igniteui-angular-grids/SKILL.md https://raw.githubusercontent.com/IgniteUI/igniteui-angular/master/skills/igniteui-angular-grids/SKILL.md

# Theming & Styling
curl --create-dirs -o $BASE_DIR/igniteui-angular-theming/SKILL.md https://raw.githubusercontent.com/IgniteUI/igniteui-angular/master/skills/igniteui-angular-theming/SKILL.md
```

スキル ファイルが `.agents/skills/` で利用できるようになり、互換性のある AI アシスタントによって自動的に検出されます。


#### **オプション B - `gemini skills` CLI を使用する**

`gemini skills install` コマンドは、Git リポジトリから直接スキルをインストールします。2 つのスコープをサポートします。

- **ユーザー スコープ** (デフォルト) - ユーザー アカウントにスキルをグローバルにインストールし、すべてのプロジェクトで利用できるようにします。スキルは `~/.gemini/skills/` または `~/.agents/skills/` に配置されます。
- **ワークスペース スコープ** - 現在のプロジェクト ディレクトリの `.agents/skills/` にスキルをローカルにインストールし、そのプロジェクトのみにスコープします。

**ユーザー スコープにインストールする (デフォルト):**

```bash
gemini skills install https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-components
gemini skills install https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-grids
gemini skills install https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-theming
```

**ワークスペース スコープにインストールする:**

```bash
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-components
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-grids
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-theming
```

インストールが完了すると、スキル ファイルはそれぞれの場所で利用できるようになり、互換性のある AI アシスタントによって自動的に検出されます。


#### **オプション C - インストールされた npm パッケージを使用する**

Ignite UI for Angular がプロジェクトに既にインストールされている場合、スキル ファイルは `node_modules` の下で利用できます。それらをプロジェクトにコピーする (例: `.agents/skills/` の下での一般的な AI エージェントでの使用) には、次のコマンドを実行します。

```bash
# macOS / Linux
cp -r node_modules/igniteui-angular/skills/. .agents/skills/
```

```powershell
# Windows (PowerShell)
Copy-Item -Recurse node_modules\igniteui-angular\skills .agents\skills
```

または、必要に応じて個別のスキル ディレクトリをコピーします。

**macOS / Linux**

```bash
cp -r node_modules/igniteui-angular/skills/igniteui-angular-components .agents/skills/
cp -r node_modules/igniteui-angular/skills/igniteui-angular-grids .agents/skills/
cp -r node_modules/igniteui-angular/skills/igniteui-angular-theming .agents/skills/
```

**Windows (PowerShell)**

```powershell
Copy-Item -Recurse node_modules\igniteui-angular\skills\igniteui-angular-components .agents\skills\igniteui-angular-components
Copy-Item -Recurse node_modules\igniteui-angular\skills\igniteui-angular-grids .agents\skills\igniteui-angular-grids
Copy-Item -Recurse node_modules\igniteui-angular\skills\igniteui-angular-theming .agents\skills\igniteui-angular-theming
```

**Windows (Command Prompt)**

```cmd
xcopy /E /I node_modules\igniteui-angular\skills\igniteui-angular-components .agents\skills\igniteui-angular-components
xcopy /E /I node_modules\igniteui-angular\skills\igniteui-angular-grids .agents\skills\igniteui-angular-grids
xcopy /E /I node_modules\igniteui-angular\skills\igniteui-angular-theming .agents\skills\igniteui-angular-theming
```

スキル ファイルは次の場所にあります:

```
node_modules/igniteui-angular/skills/igniteui-angular-components/SKILL.md
node_modules/igniteui-angular/skills/igniteui-angular-grids/SKILL.md
node_modules/igniteui-angular/skills/igniteui-angular-theming/SKILL.md
```

#### **オプション D - `npx skills` CLI を使用する**

`skills` CLI は、スキルをプロジェクトに直接ダウンロードしてインストールするインタラクティブなツールです。プロジェクト ルートで次のコマンドを実行します。

```bash
npx skills add IgniteUI/igniteui-angular
```

CLI は、一連のプロンプトをガイドします。

1. インストールするスキルを選択します (components、grids、theming)。
2. プロジェクト内のスキル ファイルのターゲット場所を選択します (例: `.agents/skills/`、`.github/skills/`)。
3. 選択したスキル ファイルを自動的にダウンロードして書き込みます。

完了すると、スキルはすぐに使用できます。手動でファイルをコピーする必要はありません。

> **注:** Node.js とインターネット接続が必要です。コマンドは、[IgniteUI/igniteui-angular](https://github.com/IgniteUI/igniteui-angular) リポジトリから最新のスキル ファイルを取得します。

### 手順 2: スキルを IDE に読み込む

ファイルを取得したら、それらを開いて AI アシスタントに読み込みます。

| IDE / ツール | 読み込み方法 |
|:-----------|:------------|
| **VS Code + GitHub Copilot** | Copilot Chat 入力で `#file:path/to/SKILL.md` を使用して、そのセッションのコンテキストとして添付します。 |
| **Cursor** | `SKILL.md` ファイルをチャット ウィンドウにドラッグするか、`@file` と入力して選択します。 |
| **Windsurf** | Cascade チャット パネルの **[+]** ボタンを使用してファイルを添付します。 |
| **JetBrains AI Assistant** | AI チャットのクリップ アイコンをクリックして、ファイルをコンテキストとして添付します。 |
| **Claude Desktop** | ファイルをチャットにドラッグするか、**[Project] → [Add Content]** を介してプロジェクト ナレッジ ベースに追加します。 |
| **その他のアシスタント** | `SKILL.md` ファイルを開き、その完全なコンテンツをコピーして、システム プロンプトまたは最初のメッセージの上部に貼り付けます。 |

---

## Theming MCP サーバー

**Theming スキル**には、`igniteui-theming` MCP サーバーのセットアップ手順が含まれています。これにより、AI アシスタントがパレット生成やコンポーネント テーマのひな形作成 などのライブ テーマ ツールにアクセスできます。VS Code、Cursor、Claude Desktop、JetBrains IDE の構成手順については、[Theming スキル ファイル](https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-theming/SKILL.md)を参照してください。

Theming MCP の詳細については、[Ignite UI Theming MCP](./theming-mcp.md)のドキュメントを参照してください。

## その他のリソース

<div class="divider--half"></div>

- [Ignite UI で作業を開始](../general/getting-started.md)
- [Angular Schematics & Ignite UI CLI](../general/cli-overview.md)
- [スタンドアロン コンポーネントの使用方法](../general/how-to/how-to-use-standalone-components.md)
- [コード分割と複数のエントリ ポイント](../general/code-splitting-and-multiple-entry-points.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
