# PRPL server for go standard environment

- install tool/lib

`goapp get github.com/CaptainCodeman/prpl-server-go/...`

- copy your `build` folder from polymer project

- prepare app.yaml

`$(goapp env GOPATH)/bin/prpl-config --root build > app.yaml`

- local test

`dev_appserver.py app.yaml`

- deploy

`gcloud app deploy .`