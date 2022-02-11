---
id: build
description: Build a optic branch to a PDF
---

# `optic build`

To turn your branch file into a PDF simply run `optic build` in your optic project's root directory. By default the branch built is the one last updated. To use a different branch just provide a path to that branch as the first argument to `optic build` like so:

```bash
optic build "docs/AP Physics/Note/Light Quanta.tex"
```

See the file created in the `pdf/` folder inside the root directory of your optic project. There ya go, all done!
