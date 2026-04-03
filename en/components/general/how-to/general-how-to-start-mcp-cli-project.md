---
title: Create an Angular Project with Ignite UI CLI, then Continue with Ignite UI CLI MCP | Ignite UI for Angular | Infragistics
_description: Scaffold an Angular project with Ignite UI CLI, review the generated MCP configuration, and use Ignite UI CLI MCP and Ignite UI Theming MCP in a supported AI client to continue building through chat.
_keywords: Angular, Ignite UI for Angular, Infragistics, Ignite UI CLI, MCP, Model Context Protocol, Ignite UI CLI MCP, Ignite UI Theming MCP, AI
---

# Create an Angular Project with Ignite UI CLI, then Continue with Ignite UI CLI MCP

The CLI-first setup for Ignite UI for Angular uses Ignite UI CLI to scaffold the Angular project first, then connects Ignite UI CLI MCP and Ignite UI Theming MCP to the generated project so an AI assistant can continue building through chat. Ignite UI CLI generates the project structure, installs dependencies, and writes the initial MCP configuration. After that, Ignite UI CLI MCP and Ignite UI Theming MCP are available to the AI client through the generated configuration.

Ignite UI CLI MCP and Ignite UI Theming MCP do not currently support Blazor — they cover Angular, React, and Web Components only. Neither server modifies project files autonomously; each exposes tools to the active AI agent session in a supported client. If you want the AI assistant to create the Angular project without running the CLI yourself, see [Start from an Empty Folder with Ignite UI CLI MCP for Angular](general-how-to-start-mcp.md) instead.

## Prerequisites

- Node.js installed so `npm` and `npx` are available in the terminal
- A supported AI client: VS Code with GitHub Copilot, Cursor, Claude Desktop, Claude Code, JetBrains IDEs with AI Assistant, or another MCP-compatible client with STDIO support
- Internet access for package installation and `npx` resolution
- An empty folder for the new Angular project

## Step 1: Choose How to Run Ignite UI CLI

Ignite UI CLI is available as a global install or through `npx` without a global install.

### Install globally

```cmd
npm install -g igniteui-cli
```

Use this when you want the `ig` command available in any terminal session. The examples in this guide use the global `ig` command.

### Run with `npx` without installing globally

```cmd
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=empty
```

Replace the direct `ig` command with the matching `npx --package igniteui-cli igniteui` form in any step below when using this option.

## Step 2: Create a New Empty Folder

Create a new empty folder for the Angular project and open a terminal in that folder.

## Step 3: Create the Angular Project

Create the project using guided mode or a direct command.

### Guided mode

```cmd
ig new
```

The CLI prompts for project name, framework, project type, template, and theme. After the last prompt, the CLI creates the project and installs all dependencies.

Matching `npx` form:

```cmd
npx --package igniteui-cli igniteui new
```

### Direct command

Use this form when you already know the project settings:

```cmd
ig new my-app --framework=angular --type=[project-type] --template=[template]
```

Examples:

```cmd
ig new my-app --framework=angular --type=igx-ts --template=base
ig new my-app --framework=angular --type=igx-ts --template=empty
ig new my-app --framework=angular --type=igx-ts --template=side-nav
ig new my-app --framework=angular --type=igx-ts --template=side-nav-auth
```

Matching `npx` examples:

```cmd
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=base
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=empty
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=side-nav
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=side-nav-auth
```

Template and type options:

- `--template=base` — project structure with routing
- `--template=empty` — empty project structure with routing and home page
- `--template=side-nav` — project with side navigation
- `--template=side-nav-auth` — side navigation project with authentication
- `--type=igx-ts` — Angular project using standalone components by default
- `--type=igx-ts-legacy` — Angular project using module-based bootstrapping

For the full list of templates and CLI command options, see the [Ignite UI CLI](../cli-overview.md) topic.

## Step 4: Complete the Guided CLI Prompts

This step applies only when using guided mode (`ig new` without arguments).

The CLI presents prompts in this order:

1. Project name
2. Framework
3. Project type
4. Template
5. Theme
6. Add a component or complete the setup

After the final prompt, the CLI creates the project folder and installs all required packages.

## Step 5: Review the Generated MCP Configuration

After the project is created, Ignite UI CLI writes an MCP configuration file to the project. Review the configuration and confirm it contains entries for both Ignite UI CLI MCP and Ignite UI Theming MCP.

For VS Code, the generated file is `.vscode/mcp.json`. For other clients, add the equivalent configuration manually in the correct location:

| Client                   | Configuration location                                                   |
| ------------------------ | ------------------------------------------------------------------------ |
| VS Code                  | `.vscode/mcp.json` (generated by CLI)                                    |
| Cursor                   | `.cursor/mcp.json`                                                       |
| Claude Desktop (macOS)   | `~/Library/Application Support/Claude/claude_desktop_config.json`        |
| Claude Desktop (Windows) | `%APPDATA%\Claude\claude_desktop_config.json`                            |
| Claude Code              | `.mcp.json`                                                              |
| JetBrains IDEs           | **Tools → AI Assistant → Model Context Protocol (MCP)**                  |
| Other MCP clients        | Use the same command and arguments through STDIO configuration            |

### VS Code — expected `.vscode/mcp.json` content

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli@next", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

### Cursor, Claude Desktop, Claude Code, JetBrains, and Other MCP Clients

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli@next", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

The `igniteui-cli` entry starts Ignite UI CLI MCP. The `igniteui-theming` entry starts Ignite UI Theming MCP.

## Step 6: Open the Project in Your AI Client

- If you are using an editor-based client, open the generated Angular project folder in that editor.
- If you are using a desktop or chat-first client, make the generated project available as the project context for the session.

The client detects the MCP configuration from the file location or settings configured in Step 5.

## Step 7: Confirm the MCP Tools Are Available

Open chat, agent mode, or the MCP tools view in your AI client and check the available tools. Both MCP servers and their tools should be listed:

- `igniteui-cli`
- `igniteui-theming`

If either server fails to appear, verify that the configuration content matches the examples in Step 5 exactly and that Node.js is installed in the terminal environment.

Client-specific verification steps:

- **VS Code with GitHub Copilot**: open Copilot Chat and switch to **Agent** mode
- **Cursor**: open a new chat session and check the available MCP tools
- **Claude Desktop**: restart the app and look for the MCP indicator in the chat input area
- **Claude Code**: use the `/mcp` command to confirm the server is connected
- **JetBrains IDEs**: review the MCP connection in **Tools → AI Assistant → Model Context Protocol (MCP)**

## Step 8: Continue Building Through Chat

With both MCP servers confirmed available, continue in chat to build on top of the scaffolded Angular application:

- Add or change pages and features
- Add Ignite UI for Angular components through prompts
- Update theme and styling with Ignite UI Theming MCP
- Ask documentation and API questions about Ignite UI for Angular components
- Refine the generated project code

## Troubleshooting

**`ig` is not recognized**
Ignite UI CLI is not installed globally or the global npm bin directory is not in the system PATH. Run `npm install -g igniteui-cli` and verify with `ig --version`.

**The project is created but MCP tools do not appear**
Reload the workspace, reopen the project folder, or restart the AI client. Some clients require a full restart to detect MCP configuration files.

**One server fails to start**
Verify that the configuration content matches the examples in Step 5 exactly, including key names (`igniteui-cli`, not `igniteui`) and argument order.

**The CLI-generated MCP configuration uses the wrong JSON structure for your client**
The CLI generates `.vscode/mcp.json` for VS Code. For other clients, copy the server entries into the `mcpServers` structure shown in Step 5 and place the file in the correct location for your client.

## Next Steps

With the Angular project scaffolded and both MCP servers running, continue in chat to expand the application:

- Add Ignite UI for Angular components through prompts
- Apply and customize themes with Ignite UI Theming MCP
- Ask documentation and API questions about Angular components in the same session

## Related Topics

For an overview of all available MCP setup paths for Angular, see [Angular Ignite UI CLI MCP Overview](general-how-to-mcp-overview.md).

If you want the AI assistant to create the Angular project without running the CLI yourself, see [Start from an Empty Folder with Ignite UI CLI MCP for Angular](general-how-to-start-mcp.md).

If you already have an Angular project, see [Use Ignite UI CLI MCP in an Existing Angular Project](general-how-to-use-mcp-existing-project.md).

For more information about AI skills and theming workflows, see [Angular Agent Skills](../../ai/skills.md) and [Ignite UI Theming MCP](../../ai/theming-mcp.md).
