# Contributing guidelines

Thanks for wanting to contribute to this project. Before proceeding, please
briefly go through the following:
* [Code Of Conduct](https://github.com/creative-tutorials/hashtag/blob/master/CODE_OF_CONDUCT.md)
* [Issues](#issues)
* [Requirements](#requirements)
* [Setup](#setup)
* [Pull Requests](#pull-requests)
* [Remarks](#remarks)

## Issues

- Before contributing to this repository, ensure that you propose the change(s)
you wish to make via an [issue](https://github.com/creative-tutorials/hashtag/issues/new/choose)
, email, or any other method with the maintainers.

- **DO NOT** create duplicate issues. Always confirm that the issue you want to
create does not exist before proceeding

- Always ensure that your Pull Requests are linked to their corresponding Issues.

## Requirements

- Node.js is installed.
- Familiarity with ReactJS
- Basic familiarity with Git and GitHub: If you are also new to these tools, visit
[GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners)
for a comprehensive introduction to them.

## Setup

Follow these instructions to setup the project and start making changes:

1. Fork this repo by clicking the fork button in the top-right corner.
2. Assuming your GitHub Username is jane, run the following in your terminal:

```sh
cd ~/Desktop
git clone git@github.com:jane/hashtag.git
```

3. Create a remote branch to keep your local clone as well as your fork
in sync with the remote branch.

```sh
git remote add hashtag git@github.com:creative-tutorials/hashtag.git
```

You can give any name to your remote. For convenience, we are using **hashtag** here.

4. Run `git branch` to confirm that you are on the `main` branch before proceeding.
Then, pull the latest changes from the remote branch and create a new branch to
begin making your **own** changes.

```sh
git checkout main
git pull hashtag main
git checkout -b name-of-your-branch
```

> **Note**: Give a descriptive name to your feature branch
(For example, **feat-featureName**, **bugFix-bugName** etc.).
This will help us to track it in the future if the need arises.

5. Run the following to start a preview of your changes:

```sh
# switch to a new terminal
npm install   /downloads and installs the dependencies of this project./
npm run dev
```
Your local preview will now be available at `http://localhost:3000/`

6. Make your desired changes to any of using your preferred editor.
If your changes are huge, break them into meanignful chunks and make
a separate PR for each chunk so that they can be reviewed in the appropriate context.

7. After completing your changes, **stage** and **commit** them to your branch, and then
**push** the branch to your fork.

```sh
cd ~/hashtag
git add .
git commit
git push -u origin name-of-your-branch
```
> **Note**: Do not commit the package files (package.json and/or package-lock.json)

8. Perform a merge to sync your current branch with the upstream branch.

```sh
git fetch upstream
git merge upstream/main
```
## Pull Requests

- Each pull request should contain a single logical change or related set of changes
that make sense to submit together. If a pull request becomes too large or contains
too many unrelated changes, it becomes too difficult to review.

- Link the issue you have resolved in the PR Template (e.g Closes/Fixes #392).

- Your commit messages should conform to the
[Conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/)
guidelines.

- You are responsible for resolving any conflicts that may arise in the process of creating
a PR (merge conflicts, workflow issues etc.)

- If fixing a bug:

- The name of your PR should be a summary of the changes you are making.
(For example fix: fix non-responsive navbar, feat: add prettier for code formatting)
Provide a detailed description of the bug in the PR. Screenshots are nice.

## Remarks

If you feel like there's something missing in this document or it isn't comprehensive enough, then
feel free to make a PR directly or
[create an issue](https://github.com/creative-tutorials/hashtag/issues/new/choose)
to improve it. Thank You.
