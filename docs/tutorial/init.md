---
id: initialize
description: Initialize a new optic project
---

# Initialize a optic project

First, you need to create a folder for your optic project. Once you have done that run the terminal command below in that directory. It will ask you a few questions and create a few files and folders.

```bash
mkdir school && cd school && optic setup
```

## What did we just get?

Here are the folders and files that optic just created for you:

| **File/Folder** | **Description**                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| `optic.toml`    | The configuration file for optic                                                                                 |
| `README.md`     | Basic README file                                                                                                |
| `templates/`    | A folder where templates are stored. We will learn more about templates in the [templates section](templates.md) |
| `.git`          | A new repository was automatically created for you                                                               |
| `.gitignore`    | Ignore file for git                                                                                              |
