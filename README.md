# Explanations of some of the choices on this
* The user must make a public repo from this template so that the resulting ghcr.io image is also public. Otherwise the image will be private, and Section won't be able to access it until the user wanders through the settings to make the image public.
* "Use this template" is best, and fork doesn't work, because GitHub Actions are initially turned off for forks. It can be turned on, of course. But then we'd have to explain that step.

# TODO
* Containerport 80 is in the deployment, and is clearly wrong. Is it ignored and should be removed?
* Restart of node-express is in the deploy.sh.  Do I need that??
* The HTML I'm using is ugly and error-prone. Need to revisit.
