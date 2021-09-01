---
id: kiwi.toml
description: Let's look at the configuration file you just got
---

# kiwi.toml

Configuration is stored in a [TOML](https://toml.io/en/) file called `kiwi.toml`. If did the last step of running `kiwi setup` you should already have one filled in with your responses to the CLI's questions. Below is a basic configuration file:

```toml title="kiwi.toml"
name = "Matt Gleich"

[school]
level = "Freshman"
type = "High School"

[[classes]]
name = "AP Physics"
teacher = "Mr. Feynman"

[[classes]]
name = "CS50"
teacher = "Mr. Malan"
```

This configuration file is very important to kiwi and is used all the time. One big user of this configuration file is the template system. To see more options you can add to the configuration file please see the full configuration documentation.
