---
title: "Use scp to copy files to and from a remote machine"
date: "2014-05-04"
---
A quick one today, use `scp` to copy files to and from a remote machine. `scp` uses SSH to securely transfer files from one computer to another. As long as you're able to SSH into a machine, you should be able to use `scp`.

The general structure of `scp` is:

```bash
scp user@host:file user@host:file
```

If you're transferring to or from your local computer, you can just use a path instead.

To copy a remote file to your local machine:

```bash
scp user@example.com:backup-2014-05-04.zip ~/backups/
```

Or, copy a local file to the remote machine:

```bash
scp ~/cats.jpg user@example.com:~/
```

You can specify and source and target directories that you have permissions to write or read from.

`scp` is a simple and useful tool that should be part of any developers toolkit.
