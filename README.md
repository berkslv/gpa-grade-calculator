# Gpa Grade Calculator

This repo is very straightforward example and **guide** for **cordova mobile** app using it **create-react-app**

First of all, run `npx create-react-app client` who name is client. You can create whatever you desire inside this app, I was create a very simple GPA calculator, but make sure it's has responsive design. It may be better if it additionally has the PWA configurations.

After creating the client, follow instructions below and publish your app in play store!

You can visit [__Live Preview__](https://berkslv.github.io/gpa-grade-calculator)

## Client

To make sure your app works well serve your build app in `serve`

```
npm install
npm start
```

You need to add a few additions into react app for Cordova apps. If you are pass this step, you will see a white screen in `cordova run andorid` section

#### Before Cordova

- **Add some meta tags**

Update your public/index.html file to following codes

```
<!DOCTYPE html>
<html>
  <head>
    <!--
        Customize this policy to fit your own app's needs. For more guidance, see:
            https://github.com/apache/cordova-plugin-whitelist/blob/master/README.md#content-security-policy
        Some notes:
            * gap: is required only on iOS (when using UIWebView) and is needed for JS->native communication
            * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
            * Disables use of inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
                * Enable inline JS: add 'unsafe-inline' to default-src
        -->
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src * 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src * data: content:;"
    />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta
      name="viewport"
      content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"
    />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />

    <!-- Latest compiled and minified CSS -->
    <title>Ortalama Hesaplama</title>
  </head>

  <body>
    <div id="root"></div>
    <script type="text/javascript" src="cordova.js"></script>
  </body>
</html>
```


- **Update your index.js**
  
Update this,
```
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
```

to this,
```
const startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

if(!window.cordova) {
  startApp()
} else {
  document.addEventListener('deviceready', startApp, false)
}

```

- **Edit package.json**

Add the following line, before the `dependencies` section
  
```
...
"homepage": "./",
...

```

- **If you using react-router-dom use HashRouter instead of BrowserRouter**
   
Don't worry this component also works well, but using another tech base.

- **To clear the confusion add /index.html to your home routes**

Maybe you don't need this. But there is no harm from a small addition.

<br />

After this steps, maybe you need to return back to your react code base and edit some parts for debug. But after for every update create a new build and copy inside the cordova www folder.

in addition you can also use react src & public folder with together cordova, but for a small projects i suggest this method because is less confusing.

```
npm run build
sudo npm -g install serve
serve -s build # make sure your build works well.
```

<hr />

## Cordova App

You can read [cordova documentation](https://cordova.apache.org/) for detailed information. But this informations are enough to publish very basic react app to play store. 

gdp-calculator is my project name. You can name it whatever you want.

```
cordova create gdp-calculator com.berkslv.gdpcalculator gdpcalculator # cordova create <folder-name> <identifier> <project-name>
 
cd gdp-calculator/

```

Before making some developments make sure you satisfy cordova requirements

```
cordova requirements --verbose
```


To make sure your projects works well with cordova I suggest to run in the browser first for debug.

```
cordova platform add browser

cordova run browser

```

If your project works well then try with the android studio emulator. Before `cordova run android` make sure emulator is running and stable.

```
cordova platform add android

cordova run android
```

if everything goes well you can create release build for production. This gives you app-release-unsigned.apk file.

```
cordova build --release 
```

<hr />

## Signing the App

we dont dive deep in this section. If you curious about app signing you can read this [documentation](https://developer.android.com/studio/publish/app-signing). Don't forget your `-alias` and `-keystore` names.

```
keytool -genkey -v -keystore android.keystore -alias gdpcalculator-key -keyalg RSA -keysize 2048 -validity 10000

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore gdpcalculator.keystore app-release-unsigned.apk gdpcalculator-key

sudo apt install zipalign

zipalign -v 4 app-release-unsigned.apk app-release.apk
```
