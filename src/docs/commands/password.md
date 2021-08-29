---
title: Password
---

Configure password to protect private keys.

Check status:

```sh
$ rsa password status
```

Enable password:

```sh
$ rsa password enable
```

Disable:

```sh
$ rsa password disable
```

Change:

```sh
$ rsa password change
```

For the commands which require a password, you can either enter the password when asking you to do so, or you can add a flag after your command:

```sh
$ rsa <command> --password [password]
# or:
$ rsa <command> -p [password]
```
