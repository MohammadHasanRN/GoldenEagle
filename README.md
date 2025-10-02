# Codebase

## Export APK file for android

Open the terminal inside the root folder
Install the dependencies
> yarn

Generate the APK file
> yarn assemble:android

Then the APK file will be in "android/app/build/outputs/apk/release/app-release.apk"

## Run the project on IOS

Open the terminal inside the root folder
Install the dependencies
> yarn

Install the IOS native dependencies
> yarn pod

run the bundler to watch any changes
> yarn dev:mobile

Open the project in the xcode then install the app
> yarn xcode

## Run the project on Android

Open the terminal inside the root folder
Install the dependencies
> yarn

Run the bundler to watch any changes
> yarn dev:mobile

Install the app
> yarn dev:android