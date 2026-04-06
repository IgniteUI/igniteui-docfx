---
title: "Build an App End-to-End with Ignite UI CLI MCP and Ignite UI Theming MCP - Ignite UI for Angular"
_description: "Follow an end-to-end Ignite UI for Angular workflow with Ignite UI CLI MCP and Ignite UI Theming MCP: start CLI-first, connect both MCP servers, create or extend the app through chat, ask documentation questions, and apply a custom theme."
_keywords: "Angular, Ignite UI for Angular, Infragistics, Ignite UI CLI MCP, Ignite UI Theming MCP, MCP, Model Context Protocol, AI, workflow, theming, prompt"
---

# Build an App End-to-End with Ignite UI CLI MCP and Ignite UI Theming MCP

<p class="highlight">Ignite UI CLI MCP and Ignite UI Theming MCP work together to let an AI assistant scaffold, extend, and theme a Ignite UI for Angular application through chat prompts. CLI MCP handles project creation, component work, and documentation questions. Theming MCP handles palettes, themes, tokens, and styling workflows. This topic shows the full process in one clear flow.</p>

<div class="divider"></div>

## Overview

This topic is the main end-to-end workflow topic for MCP.

It shows how the process works from start to finish:

- begin with a CLI-first project setup
- connect CLI MCP and Theming MCP
- continue in chat to build the app
- ask documentation and API questions during development
- apply and refine a custom theme

Neither server executes steps autonomously. The AI assistant invokes the MCP tools in response to your prompts. Both servers require MCP clients that support STDIO transport.

## What You Need

Before you start, make sure you have:

- **Node.js** installed so `npx` is available
- a supported AI client with MCP support
- internet access for `npx` package resolution on first use
- a folder for the project

This walkthrough works best with a **CLI-first** setup because Ignite UI CLI scaffolds the project and prepares the first MCP configuration for VS Code automatically.

If you still need the detailed setup reference for each client, see [Angular Schematics & Ignite UI CLI](~/components/general/cli-overview.md) and [Ignite UI Theming MCP](~/components/ai/theming-mcp.md).

## Step 1: Start with Ignite UI CLI

The recommended starting point is to create the project with Ignite UI CLI first.

You can run Ignite UI CLI in either of these ways:

### Global install

```bash
npm install -g igniteui-cli
```

This gives you the `ig` command in any terminal session.

### Without a global install

```bash
npx --package igniteui-cli igniteui new
```

This runs the CLI through `npx` instead of a global `ig` command.

You can use **guided mode** if you want the CLI to walk you through the options:

```bash
ig new
```

Matching `npx` form:

```bash
npx --package igniteui-cli igniteui new
```

You can also use a direct command when you already know the project settings.

For Angular:

```bash
ig new my-app --framework=angular
```

Matching `npx` form:

```bash
npx --package igniteui-cli igniteui new my-app --framework=angular
```

What happens next:

- Ignite UI CLI creates the project structure
- the required project packages are installed
- for the CLI-first path, VS Code also gets an initial `.vscode/mcp.json`

## Step 2: Connect CLI MCP and Theming MCP

After the project is created, make sure both MCP servers are available in your AI client.

### VS Code

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
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
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

After saving the configuration, reopen or restart the AI client and confirm that both `igniteui-cli` and `igniteui-theming` are available.

## Step 3: Let the Assistant Review the Project

Once both MCP servers are running, open a new chat and start by giving the assistant project-level context.

Useful prompts:

> _"Review this project and explain the current structure before we start adding features."_

> _"Tell me what was created, what the main entry points are, and where new pages should be added."_

What happens next:

- CLI MCP inspects the generated or existing project
- the assistant summarizes the structure
- you now have a shared starting point for the next steps

## Step 4: Add a Real Feature Through Chat

After the project structure is clear, ask for a concrete feature.

Example prompt:

> _"Add an Orders page with a Ignite UI for Angular grid. Include columns for Order ID, Customer Name, Order Date, and Total Amount, and bind the grid to sample data."_

Follow-up prompt:

> _"Enable filtering, sorting, and paging on the Orders grid, and keep the page layout consistent with the rest of the app."_

What happens next:

- CLI MCP adds or updates the right page
- the assistant creates or updates the component code
- the feature is integrated into the existing app structure

You can continue with smaller refinements:

> _"Add a simple toolbar above the grid and keep the layout compact."_

## Step 5: Ask Documentation Questions in the Same Session

You do not need to leave the conversation to look up component APIs.

Example prompts:

> _"What filtering options does the Angular grid support, and which ones are the best fit for a simple orders table?"_

> _"What events does the combo component expose, and which one should I use for selection changes?"_

> _"Which Ignite UI for Angular component is the best fit for a side navigation layout, and why?"_

What happens next:

- CLI MCP answers the question using documentation-aware tools
- you can immediately follow with an implementation request

For example:

> _"Apply the recommended filtering approach to the current Orders grid."_

## Step 6: Apply a Custom Theme

Once the app structure and main feature are in place, switch to Theming MCP in the same chat.

Example prompt:

> _"Apply a professional theme to the app. Use a deep blue primary color, a warm amber secondary color, and keep the spacing compact."_

What happens next:

- Theming MCP generates the palette and theme configuration
- the assistant updates the right theme or styles files
- the app styling stays aligned with the current structure

You can refine the theme further with more targeted prompts:

> _"Make the grid header use the primary color, increase the row height slightly, and keep the rest of the page visually clean."_

> _"Show me the generated primary and secondary palette shades before you refine the grid styling."_

## Step 7: Continue Iterating

The strongest part of this workflow is that you can keep moving between project work, documentation questions, and theming in one conversation.

Example prompts:

> _"Keep the current Orders page structure, but simplify the layout and make the filter area more compact."_

> _"Use the current theme, but make the dashboard cards and grid spacing more consistent with the rest of the app."_

> _"Review the generated files and explain the main project, component, and theme changes you made."_

What happens next:

- CLI MCP handles project and component refinements
- Theming MCP handles theme and token refinements
- the assistant keeps the whole workflow connected end to end

## Topic Takeaways

The main pattern in this workflow is simple:

- start with Ignite UI CLI first
- connect both MCP servers
- use CLI MCP to scaffold and extend the app
- use CLI MCP documentation queries when you need API clarity
- use Theming MCP to generate and refine the visual design

This keeps project creation, component work, documentation lookups, and theming in one chat session instead of splitting them across multiple tools.

## Related Topics

- [Angular Schematics & Ignite UI CLI](~/components/general/cli-overview.md)
- [Ignite UI Theming MCP](~/components/ai/theming-mcp.md)
- [Ignite UI for Angular Skills](~/components/ai/skills.md)

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
