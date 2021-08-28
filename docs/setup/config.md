---
id: configuration
description: Let's look at the configuration file you just got
---

# Configuration

Configuration is stored in a [TOML](https://toml.io/en/) file called `kiwi.toml`. If did the last step of running `kiwi setup` you should already have one filled in with your responses to the CLI's questions. Below is a basic configuration file:

```toml title="kiwi.toml"
name = "Matt Gleich" # Your name

[school] # School section
level = "Freshman" # School level
type = "High School" # Type of school

[[classes]] # Section in the list of classes
name = "AP Physics" # Name of class
teacher = "Mr. Feynman" # Name of the teacher

[[classes]] # Section in the list of classes
name = "CS50" # Name of the class
teacher = "Mr. Malan" # Name of the teacher
```

This configuration file is very important to kiwi and is used all the time. One big user of this configuration file is the template system. To see more options you can add to the configuration file please see the full configuration documentation.
