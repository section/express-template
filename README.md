# Notes
* The user must make a public repo from this template so that the image is also public. Otherwise the image will be private, and Section won't be able to access it until the user figures out how to change access to the image.
* "Use this template" is best, and fork doesn't work, because GitHub Actions are initially turned off for forks.

# Things to check
* Containerport 80 is in the deployment, and is clearly wrong. Is it ignored and should be removed?
* Restart of node-express is in the deploy.sh.  Do I need that?
* The HTML I'm using is error-prone. Need to revisit.
