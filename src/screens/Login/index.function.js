import { useDispatch, useSelector } from "react-redux"
import { login } from "@redux/actions/auth-action"
import {  getAppleToken, getGoogleToken } from "../../utils/functions"
import { googleLogin } from "../../redux/actions/auth-action"


export default () => {
    const dispatch = useDispatch()


    const { auth_loading } = useSelector(state => state.auth)


    // const onGoogleButtonPress = async () => {
    //     GoogleSignin.configure({
    //         scopes: ['profile', 'email'], // what API you want to access on behalf of the user, default is email and profile
    //         webClientId:
    //             '150943305570-kku3fjqv1vv3a5rvvf1g9h71o9u9d94e.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    //         offlineAccess: true,
    //     });

    //     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    //     const { user } = await GoogleSignin.signIn();

    //     const apiData = {
    //         provider: "google",
    //         email: user?.email,
    //         profileImg: user?.photo,
    //         location: {
    //             lat: location?.lat,
    //             long: location?.long
    //         },
    //         socialId: user?.id,
    //         fullname: user?.givenName + " " + (user?.familyName || "")
    //     }
    //     dispatch(login(apiData))

    // }

    // const onAppleButtonPress = async () => {
    //     const appleAuthRequestResponse = await appleAuth.performRequest({
    //         requestedOperation: appleAuth.Operation.LOGIN,
    //         requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    //     })
    //     const credentialState = await appleAuth.getCredentialStateForUser(
    //         appleAuthRequestResponse.user,
    //     )
    //     if (credentialState === appleAuth.State.AUTHORIZED) {
    //         const { fullName, email, identityToken, user, } = appleAuthRequestResponse

    //         const apiData = {
    //             email: email ? email : "",
    //             fullname: fullName?.givenName
    //                 ? fullName?.givenName + ' ' + fullName?.familyName
    //                 : '',
    //             socialId: user,
    //             location: {
    //                 lat: location?.lat,
    //                 long: location?.long
    //             },
    //             provider: "apple"
    //         }
    //         dispatch(login(apiData))
    //     }
    // }


    // const loginUser = (values) => {
    //     let apiData = {
    //         email: values?.email?.trim()?.toLowerCase(),
    //         password: values?.password

    //     }
    //     dispatch(login(apiData))
    // }



    const onSignin = (values) => {
        const apiData = {
            email: values?.email?.trim()?.toLowerCase(),
            password: values?.password
        }
        dispatch(login(apiData))
    }

    const onPressAppleLogin = async () => {
        const appleInfo = await getAppleToken()
        console.log("appleInfo", appleInfo)
        // dispatch()
    }

    const onPressGoogleLogin = async () => {
        const googleInfo = await getGoogleToken()
        console.log("googleInfo", googleInfo)
        const apiData = {
            id_token:googleInfo?.idToken
        }
        dispatch(googleLogin(apiData))
    }


    return {
        // loginUser,
        auth_loading,
        onSignin,
        onPressAppleLogin,
        onPressGoogleLogin
    }
}