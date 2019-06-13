# Project 2 - Movie Browser
This project will allow users to
search for movies included in the [Open Movie Database](http://www.omdbapi.com/)
and view additional information about any movies they select. Check out the
[snack](https://expo.io/@coldlinux/project2) for a working version.

## Requirements
- The Program imports the following libraries:
  - `expo`
  - `react`
  - `react-native`
  - `prop-types`
  - `react-navigation`
  - Any library for icons
- There is one `StackNavigator` and a `tabNavigator`(which is broken)
- a search screen that allows users to search for movies
  - more than 10 results are displayed if more than 10 results exist
- a screen that shows additional information about a selected movie

The aesthetics of the app are great!


## Getting Started
First, head to [this link](https://docs.expo.io/versions/latest/introduction/installation.html)
to install Expo. You'll need the XDE for your computer and the mobile client
(Expo app) on your phone. If you prefer, you can also install the iOS simulator
(Macs only) and/or the Android emulator.

You'll also need Node.js and NPM installed. You can check if you already have them
installed by opening a terminal and running `node --version` and `npm --version`.
If numbers are printed, you're good to go. If not, [install them](https://nodejs.org/en/).
You'll probably want the LTS version (v8.x.x). NPM will be installed automatically
when you install node.

After installing those software dependencies, you'll need to install your app's
"dependencies" (libraries that are required to run the app, such as `react`,
`react-native`, etc.). Fortunately, it's very easy to do! From a terminal, `cd`
into this directory and run the command `npm install`. NPM will look at the
[`package.json`](/package.json) file's `dependencies` key and install those
libraries, as well as all of those libraries' dependencies (and the dependencies'
dependencies and so on).

Now you have everything installed that you need to run the app! Open the Expo
XDE app and click the `Open existing project...` button. Select the folder that
contains this file (make sure you have the parent folder and not this file) and
press `Open`.

You should now see two panels with logs. The left will output some messeages,
hopefully including `Dependency graph loaded.`. If you see this message, then
your app is running (well technically the bundler that serves your app is running).

You can now open the app on your phone or simulator by clicking one of the buttons
in the top right. To open on your phone, click the `Share` button and scan the
QR code from the Expo app on your phone. To open in a simulator, click the `Device`
button and select the simulator into which you want to open your app.


Good luck!

## Solution
If you want to play with the implementation, you can view it using
Snack at [/@coldlinux/project2](https://expo.io/@coldlinux/project2).
