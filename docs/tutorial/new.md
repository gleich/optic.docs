---
id: new
description: Create your first branch file!
---

# `kiwi new`

Let's create your very first kiwi branch! To get started open your terminal and run `kiwi new` in your kiwi project's root directory. It will then ask you the following questions:

| **Question**                         | **Example Value** |
| ------------------------------------ | ----------------- |
| What is the name of the branch?      | Light Quanta Quiz |
| What class is this for?              | AP Physics        |
| What is the document type?           | Assessment        |
| What branch template should be used? | default.md.hbs    |
| What root template should be used?   | default.tex.hbs   |

By default, all branches are in the format `Markdown`. To change it to LaTeX use the `--format` flag with the value `LaTeX` like so:

```bash
kiwi new --format LaTeX
```

## Flags

Instead of having to answer all the questions manually, you can just pass them in via flags. Run `kiwi new --help` to see all the flags available. Below is an example of how to use them:

```bash
kiwi new --class "AP Physics" --name "Light Quanta Quiz"
```
