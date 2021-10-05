# Toolkit - Contribution Guide

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of the Toolkit community. Here are a few guidelines that will help you along the way.

This project is open source and so, all PRs and issues are most welcome! However, please follow our contributing guide before any issue or PR. **So, any kind of PRs or Issues that does not follow the contributing guide will be closed. So, we request you to read till the very end.**

## First Pull Request

If you are reading this, you are probably very new to GitHub and so welcome! This section will tell you how to make your first pull request.

1. Fork the repository.

2. Clone the fork to your local machine and add upstream remote:

```sh
git clone https://github.com/<your username>/toolkit.git
cd toolkit
git remote add upstream https://github.com/AviralCoder/toolkit.git
```

<!-- #default-branch-switch -->

3. Synchronize your local `master` branch with the upstream one:

```sh
git checkout master
git pull upstream master
```

4. Install the dependencies with yarn (npm isn't supported):

```sh
yarn install
```

5. Create a new topic branch:

```sh
git checkout -b my-topic-branch
```

6. Make changes, commit and push to your fork:

```sh
git push -u origin HEAD
```

7. Go to [the repository](https://github.com/mui-org/material-ui) and make a Pull Request.

## Testing a change

Before making a Pull Request, please make sure that you have tested the changes. Since, this is an android app, testing it is a long process (unless you already have the required things)

-   Install Android Studio.
-   Click on the dropdown arrow and click on AVD manager.
-   Install an emulator with play store and latest Android version.
-   Add the android SDK to your path (follow instructions in the expo docs)
-   Install Expo CLI though this command -

```shell
# windows
npm install -g expo-cli

# mac os (if settings not configured properly)
sudo npm install -g expo-cli
```

-   Mac OS users need to install **Watchman**
-   After all of these, run - `adb` in your terminal. If an error as such comes out then you have not done the steps properly (please refer to the official expo docs then) -

```shell
ERROR adb command not found
```

-   Open the installed emulator.
-   Go to the folder of the cloned repository in your local system and run these commands -

```shell
yarn install # if you haven't already done it (if you have node_modules folder, no need to run this)

yarn start
# Metro Bundler will open in localhost on your web browser

# Come back to the terminal and press a
# These will be echoed in your terminal -

Opening Toolkit on Android Emulator..
Making Android Bundler...

# If error comes, if you haven't followed the steps properly.

# We recommend using the terminal to open the app on emulator and not the metro bundler on your browser, because the status is much more visible in the terminal (how much completed and stuff)

# The app will open on your emulator based on your RAM. Please have patience...

# When it opens, test your changed and submit the PR!
```

## How to make the PR such that that is has more chances of being accepted and merged?

Here are some points on how to make your PR more likely to be accepted and merged by me-

-   If you have followed the guidelines, make sure to write **I have followed the guidelines and I have read them before making the pull request** at the starting. This will make it easy for me to check. If you didn't write, your PR / issue will most probably be closed or will take time to accept.
-   Don't make a LOT of changes in a single PR. Like 5-6 commits in a single PR. Make a different PR for other commits.
-   Describe what you have changed in the PR chat. Like for example, "I changed some spellings from grammar".
-   As this is an android app, it is recommended to share a screenshot of the changed android screen in the PR chat to make it easy for me to merge it.

## First Issues

If you are reading this, then you are probably new to GitHub and you are welcome! Making an issue is very simple

-   Go to the issues tab in the repository.
-   Click on New Issue
-   Type the Title
-   Type the Body
-   Click on the _green button (create issue)_

Your issue has been created!

### New commer issue FAQs

> Question - What is closing an issue?
> Ans - Closing an issue means that the issue has been resolved and so it is being closed. This makes the maintainer understand that you have got the issue resolved.

> Question - When to close an isssue?
> Ans - Close an issue when you have got it resolved. If you got the issue resolved yourself, always better to write it inside the issue. If a non-maintainer resolves the issue, you can close it. It isn't necassary for a maintainer to only resolve an issue.

> Question - Best practises of writing an issue.
> Ans - Desribe an issue in great detail! It doesn't need to be like a stackoverflow question. But please do mention what you want, what it is coming, any bugs, etc.

## License

**By contributing your code to the [AviralCoder/toolkit](https://github.com/AviralCoder/toolkit) GitHub repository, you agree to license your contribution under the [MIT license](../LICENSE).**
