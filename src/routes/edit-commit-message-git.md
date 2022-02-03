---
title: Edit a commit message in git
published: 2014-05-01
tags: [git]
---

To amend a commit at the `HEAD` of the current branch, run:

```bash
git commit --amend -m "Amended message here..."
```

To rebase a commit that isn't at the `HEAD` of the current branch, you'll need to do an interactive rebase with the parent of the commit you want to update:

```bash
git rebase -i <PARENT_SHA>
```

So if your history was like this:

```txt
* ced26b3    HEAD, master Remove empty JavaScript files.
* e7fa3ea    Poorly worded commit here...
* 932d7b8    Update README
```

...and you want to update the message "Poorly worded commit here...", you'd type:

```bash
git rebase -i 932d7b8
```

Now change the text in front of the commit you want to change to be `reword` and you'll be prompted to update the commit message:

```txt
reword e7fa3ea    Poorly worded commit here...
pick   932d7b8    Update README
```

This can come in handy to when you committed something without relevant details like a case number or back story.
