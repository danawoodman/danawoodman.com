---
title: "Create a patch from a git commit"
date: "2014-03-10"
---
Sometimes you need to create a patch from a commit in your git repository. I've had to do this when moving some commits from an old repository over to a new one or for code review when a project isn't using a code review tool like Pull Requests.

Here's how you do it:

```bash
git format-patch -1 <sha> # for a specific commit SHA
git format-patch -1 HEAD  # shortcut for the commit at the branch's HEAD
```

The `-1` flag says to only create a patch from the last commit. If you passed in, say `-3`, it would create a patch that contains the last 3 commits from `<sha>` on back in the history.

Then to apply the patch, run:

```bash
patch -p1 file.patch
```

Where `file.patch` is the patch file created from the above command. This applies the patch with any sort of meta information like author, date, etc... so it appears almost like it was cherry picked. 
