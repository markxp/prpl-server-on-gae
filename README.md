# PRPL server on google app engine

The note for serving static files on app engine.

## PRPL

[PRPL pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) stands for push-render(first-print)-precache-lazy load.

## Notes

I tried [prpl-server-node](https://github.com/Polymer/prpl-server-node) from polymer team and a [prpl-server-go](https://github.com/CaptainCodeman/prpl-server-go) implemented by CaptainCodeman on GitHub.

Currently, nodejs could not run in standard environment. We tried prpl-server-node as binary, as well as library, in nodejs flexiable environment.
prpl-server-go can run in golang standard environment. But it needs to use special config.

Please `git branch -a` to learn more.
