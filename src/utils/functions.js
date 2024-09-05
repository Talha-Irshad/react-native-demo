/**
 * Misc. functions
 */
// language translation

import { Alert, Dimensions, Linking, Platform } from "react-native";
import { FlashMessage } from "../components";
import appleAuth from '@invertase/react-native-apple-authentication'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import ImagePicker from 'react-native-image-crop-picker';
// import { PERMISSIONS, request } from "react-native-permissions";
// import GetLocation from "react-native-get-location";
// import {
//   CLOUDINARY_URL,
//   CLOUDINARY_PRESET,
//   CLOUDINARY_CLOUD_NAME
// } from "@env"

// first letter capitalize
export const capitalize = (str) => str?.charAt(0).toUpperCase() + str?.slice(1);

export const getGoogleToken = async () => {
  GoogleSignin.configure({
    scopes: ['profile', 'email'], // what API you want to access on behalf of the user, default is email and profile
    webClientId:
      '448474334405-08e3l597bgju08i84rinuqi00a6hhsjq.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true,
  });

  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true, });
  const { user, idToken } = await GoogleSignin.signIn();
  if (user) return { user, idToken }
  return null

}

export const getAppleToken = async () => {
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
  })
  const credentialState = await appleAuth.getCredentialStateForUser(
    appleAuthRequestResponse.user,
  )
  if (credentialState === appleAuth.State.AUTHORIZED) {
    const user = appleAuthRequestResponse
    return user
  }
}

// export const openImagePicker = (onDone, multiple = false) => {
//   ImagePicker.openPicker({
//     mediaType: "photo",
//     width: 300,
//     height: 400,
//     multiple
//   }).then(image => {
//     let name = image?.path?.split("/")
//     let obj = {
//       uri: Platform.OS === "android" ? "file://" + image.path : image.path,
//       type: image.mime,
//       name: name?.[name?.length - 1]
//     }
//     onDone(multiple ? image : obj)
//   }).catch(err => {
//     if (err?.toString() === "Error: User did not grant library permission.") {
//       Alert.alert('Permission', 'To select an image, please allow permissions from settings', [
//         {
//           text: 'Cancel',
//           onPress: () => { },
//           style: 'cancel',
//         },
//         { text: 'Settings', onPress: () => Linking.openSettings() },
//       ])

//     }
//   });
// };
// export const openCamera = (onDone) => {
//   ImagePicker.openCamera({
//     mediaType: "photo",
//     width: 300,
//     height: 400,
//   }).then(image => {
//     let name = image?.path?.split("/")
//     let obj = {
//       uri: Platform.OS === "android" ? "file://" + image.path : image.path,
//       type: image.mime,
//       name: name?.[name?.length - 1]
//     }
//     onDone(obj)
//   }).catch(err => {
//     if (err?.toString() === "Error: User did not grant camera permission.") {
//       Alert.alert('Permission', 'To capture an image, please allow permissions from settings', [
//         {
//           text: 'Cancel',
//           onPress: () => { },
//           style: 'cancel',
//         },
//         { text: 'Settings', onPress: () => Linking.openSettings() },
//       ])

//     }
//   });
// };

// export const uploadImageToCloudnary = async (image) => {
//   let url;
//   const data = new FormData();
//   data.append("file", image);
//   data.append("filename", image.name);
//   data.append("upload_preset", CLOUDINARY_PRESET);
//   data.append("cloud_name", CLOUDINARY_CLOUD_NAME);
//   await fetch(`${CLOUDINARY_URL}image/upload`, {
//     method: "POST",
//     body: data,
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       url = data.secure_url;
//     })
//     .catch((err) => {
//       dispatch({ type: UPDATE_PROFILE + ERROR });
//       err = err;
//     });
//   return url;
// };

// export const getPlaceName = async (latitude, longitude) => {
//   try {
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAJD3kGnIKd1O5o6EOfZwUSeJl2c3sl4IM`,
//     );
//     const data = await response.json();
//     if (data.results && data.results.length > 0) {
//       return data.results[0].formatted_address;
//     }
//   } catch (error) {
//   }
//   return null; // Return null if geocoding fails
// };

// export const getCurrentLocation = (onDone, onError) => {
//   GetLocation.getCurrentPosition({
//     enableHighAccuracy: true,
//     timeout: 30000,
//   }).then(location => {
//     onDone && onDone(location)
//   }).catch(error => {
//     onError && onError(error)
//   })
// }

// export const askForPermission = (onDone, onError) => {
//   request(Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(async (result) => {
//     onDone && onDone(result)
//   }).catch((error) => {
//     onError && onError(error)
//   })
// }
export const getUniqueId = () => {
  var arr = [];
  while (arr.length < 3) {
    var r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr?.join();
}
export const getDates = () => {
  let curr = new Date()
  let week = []
  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i
    let day = new Date(curr.setDate(first))
    week.push(day)
  }
  return week
}

// Get searchedArray according to given keyword
export const searchArray = (data, keyword) => {
  const result = [];
  data?.forEach((item) => {
    let matched = false;
    Object.keys(item).forEach((key) => {
      if (
        item &&
        typeof item[key] === 'string' &&
        item[key]?.toLowerCase().match(keyword.toLowerCase())
      ) {
        return (matched = true);
      } else if (item && typeof item[key] === 'object') {
        if (item[key]) {
          Object.keys(item[key]).forEach((val) => {
            if (
              item[key][val] &&
              typeof item[key][val] === 'string' &&
              item[key][val]?.toLowerCase().match(keyword.toLowerCase())
            ) {
              return (matched = true);
            }
          });
        }
      } else if (item && typeof item[key] === 'number' && item[key]?.toString()?.toLowerCase().match(keyword.toLowerCase())) {
        return (matched = true);
      }
    });
    if (matched) {
      result.push(item);
    }
  });
  return result;
};


export const flashErrorMessage = (message, top = 2) => {
  return FlashMessage({
    type: 'danger',
    message,
    top
  })
}

export const flashSuccessMessage = (message) => {
  return FlashMessage({
    type: 'success',
    message
  })
}





export const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const urlReg =
  /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g;

export const numberReg = /^\+|0{1,}(?:[0-9] ?){6,14}[0-9]$/;

const { width, height } = Dimensions.get("window");
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export function scale(size) {
  return Math.floor((width / guidelineBaseWidth) * size);
}

export function verticalScale(size) {
  return Math.floor((height / guidelineBaseHeight) * size);
}

export function moderateScale(size, factor = 0.5) {
  return Math.floor(size + (scale(size) - size) * factor);
}
