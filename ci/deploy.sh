#!/bin/bash
test -z "${DEBUG}" || set -o xtrace
set -o errexit

cd "$(dirname "$0")"

cert=/etc/ssl/certs/ca-certificates.crt

main() {
  setCluster

  kubectl apply -f ../k8s

  #kubectl rollout restart deployment node-express
}

setCluster() {
  # Configure kubectl to talk to Section
  
  # change the cert path depending on OS.
  if [[ "$OSTYPE" == "darwin"* ]]; then
    cert=/usr/local/etc/ca-certificates/cert.pem
  fi

  kubectl config set-cluster section \
  --server=$KEI_URL \
  --certificate-authority=$cert

  kubectl config set-credentials section-user --token=$SECTION_API_TOKEN

  kubectl config set-context my-section-application --cluster=section --user=section-user --namespace=default

  kubectl config use-context my-section-application

  kubectl version
}

"$@"