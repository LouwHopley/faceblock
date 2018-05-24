# Faceblock - a CLI tool

Regain focus by blocking Facebook access from your local machine. This tool adds or removes Facebook urls to your local hosts file to block access.

## Installation & Usage

Sudo is required to write to your `/etc/hosts` file.

```
sudo npm install faceblock -g
```

Blocking access to Facebook:
```
faceblock --on
```

Unblock access to Facebook:
```
faceblock --off
```

## How it works

Faceblock rewrites all hostname lookups for a list of Facebook urls back to your own computer. The following list is added to your `/etc/hosts` file when turning it on:

> 127.0.0.1 www.facebook.com
127.0.0.1 facebook.com
127.0.0.1 static.ak.fbcdn.net
127.0.0.1 www.static.ak.fbcdn.net
127.0.0.1 login.facebook.com
127.0.0.1 www.login.facebook.com
127.0.0.1 fbcdn.net
127.0.0.1 www.fbcdn.net
127.0.0.1 fbcdn.com
127.0.0.1 www.fbcdn.com
127.0.0.1 static.ak.connect.facebook.com
127.0.0.1 www.static.ak.connect.facebook.com
