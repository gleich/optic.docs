---
id: build
description: Build a kiwi branch to a PDF
---

# `kiwi build`

To turn your branch file into a PDF simply run `kiwi build` in your kiwi project's root directory. By default the branch built is the one last updated. To use a different branch just provide a path to that branch as the first argument to `kiwi build` like so:

```bash
kiwi build "docs/AP Physics/Note/Light Quanta.tex"
```

See the file created in the `pdf/` folder inside the root directory of your kiwi project. There ya go, all done!
