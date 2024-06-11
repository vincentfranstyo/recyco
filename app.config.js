export default {
  "expo": {
    "name": "recyco",
    "slug": "recyco",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/logo.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splashLogo.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.vfranstyo.recyco"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/logo.png",
        "backgroundColor": "#ffffff",

      },
      "package": "com.vfranstyo.recyco",
      "googleServicesFile": './google-services.json',
      "config": {
        "googleSignIn": {
          "apiKey": "AIzaSyAItJeVK7kUKkYMNfQihEzU2FnZsUYiND0",
          "certificateHash": "05:9f:10:e4:c7:72:c9:75:b4:b5:94:31:c0:1a:66:55:d0:ed:43:d4",
        }
      },
      "scheme": "com.vfranstyo.recyco",
    },
    "web": {
      "favicon": "./assets/logo.png"
    },
    "extra": {
      "eas": {
        "projectId": "950196b4-d688-40cc-9564-63e73edc2899"
      },
      "router": {
        "origin": false
      }
    },
    "plugins": [
      "expo-font"
    ]
  }
}
