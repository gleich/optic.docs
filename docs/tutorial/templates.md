---
id: templates
description: Learn the basics of templates in kiwi
---

# Templates

Understanding how kiwi templates work is very important if you want to use kiwi effectively. Let's get right into it! I highly suggest reading this page a few times until you understand it.

## Basics

- Stored in the `templates/` directory at the root of your kiwi project.
- Use the [handlebars template engine](https://handlebarsjs.com).
- LaTeX templates end with `.tex.hbs` and markdown templates end with `.md.hbs` (`.hbs` is the file extension for handlebars files).
- There are two types of templates: [branch](#branch-template) and [root](#root-templates). They work together like this:
  1. Run `kiwi new` to create a new branch file based on a branch template that you select.
  2. Write in the branch file.
  3. Run `kiwi build` to put the branch file in the root file and build a PDF off of that file. If the branch is markdown it will auto be converted to LaTeX code at this step.

## Branch Templates

You do the actual writing in-branch files. Branch templates are templates for branches that are then selected when you run `kiwi new`. These files are very simple so you can focus on writing. They can be either markdown or LaTeX. Below is an example of a basic branch template:

```txt title="example.md.hbs"
<!--
created > {{time.simple_date}}
root > {{root_filename}}
-->
```

When you run `kiwi new` a new branch file will be created in a folder according to the following folder structure:

```txt
.
└── docs/
    └── Class Name (e.g. AP Physics)
        └── Month Name (e.g. March)
            └── Document Type (e.g. Worksheet)
```

The template then looks like this when filled in:

```md
<!--
created > 2021-08-20
root > default.tex.hbs
-->
```

### Permeable

Off of this structure, we can get the class name and document type but we need to use have a permeable at the start of the file for some other information. This required information is the time that the file is created and what root file is being used. This permeable needs to be at the top of the file in a comment for the format you are using. Below is what the permeable in LaTeX and then in markdown:

```latex title="LaTeX permeable"
\iffalse
created > {{time.simple_date}}
root > {{root_filename}}
\fi
```

```md title="Markdown permeable"
<!--
created > {{time.simple_date}}
root > {{root_filename}}
-->
```

## Root Templates

When you run `kiwi build` the branch file you were writing gets put into a root template. Below is an example of a root template:

```latex
\documentclass{report}
\title{ {{name}} }
\author{ {{author}} }
\date{ {{time.date}} }

{{required_permeable}}

\begin{document}
	\maketitle
	{{branch.content}}
\end{document}
```

Template fields such as `{{name}}` need to have spaces next to them in the LaTeX so they can function properly.
