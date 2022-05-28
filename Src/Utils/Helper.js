import * as React from 'react';
// import Toast from 'react-native-root-toast';
import { Alert, Platform, Keyboard } from 'react-native';
import Config from "../Utils/Config";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Helper extends React.Component {
    url = "";
    static appNav;
    static mainApp;
    static toast;
    static user = {};
    static navigationRef;
    static Loader;
    static device_type = Platform.OS == 'android' ? 'Android' : 'IOS';
    static device_token = '';
    static country_list = '';
    static globalLoader;
    static security_token = '';
    static verify_token = "";
    static isLogin = false;
    static userIdForgot = ""

    static getFormData(obj) {
        let formData = new FormData();
        for (let i in obj) {
            formData.append(i, obj[i]);
        }
        return formData;
    }

    static registerLoader(mainApp) {
        Helper.globalLoader = mainApp;
    }

    // static registerNavigator(ref) {
    //     Helper.navigationRef = ref;
    // }

    static registerLoged(mainApp) {
        Helper.mainApp = mainApp;
    }

    static showLoader() {
        // Keyboard.dismiss();
        Helper.globalLoader.setState({ loader: true })
    }

    static hideLoader() {
        Helper.globalLoader.setState({ loader: false })
    }

    static registerToast(toast) {
        Helper.toast = toast;
    }

    // static showToast(msg) {
    //     Toast.show(msg, {
    //         duration: Toast.durations.SHORT,
    //         position: Toast.positions.BOTTOM,
    //         shadow: true,
    //         animation: true,
    //         hideOnPress: true,
    //         textColor:"#000",
    //         containerStyle: { backgroundColor: '#fff', width: '70%', }
    //     });
    // }


    static alert(alertMessage, cb) {
        Alert.alert(
            Config.app_name,
            alertMessage,
            [
                { text: 'OK', onPress: () => { if (cb) cb(true); console.log('OK Pressed') } },
            ],
            { cancelable: false }
        )
    }

    static confirm(alertMessage, cb) {
        Alert.alert(
            Config.app_name,
            alertMessage,
            [
                { text: 'OK', onPress: () => { if (cb) cb(true); console.log('OK Pressed') } },
                { text: 'Cancel', onPress: () => { if (cb) cb(false); }, style: 'cancel' },
            ],
            { cancelable: false }
        )
    }

    static confirmPopUp(alertMessage, cb) {
        Alert.alert(
            Config.app_name,
            alertMessage,
            [
                { text: 'YES', onPress: () => { if (cb) cb(true); console.log('OK Pressed') } },
                { text: 'NO', onPress: () => { if (cb) cb(false); }, style: 'cancel' },
            ],
            { cancelable: false }
        )
    }

    static permissionConfirm(alertMessage, cb) {
        Alert.alert(
            Config.app_name,
            alertMessage,
            [
                { text: 'NOT NOW', onPress: () => { if (cb) cb(false); }, style: 'cancel' },
                { text: 'SETTINGS', onPress: () => { if (cb) cb(true); console.log('OK Pressed') } },
            ],
            { cancelable: false }
        )
    }

    static cameraAlert(alertMessage, Camera, Gallery, Cancel, cbCamera, cbGallery) {
        Alert.alert(
            Config.app_name,
            alertMessage,
            [
                { text: Camera, onPress: () => { if (cbCamera) cbCamera(true); console.log('OK Pressed') } },
                { text: Gallery, onPress: () => { if (cbGallery) cbGallery(true); console.log('OK Pressed') } },
                { text: Cancel, onPress: () => { if (cbCamera) cbCamera(false); }, style: 'cancel' },
            ],
            { cancelable: false }
        )
    }

    static async setData(key, val) {
        try {
            let tempval = JSON.stringify(val);
            await AsyncStorage.setItem(key, tempval);
        } catch (error) {
            console.error(error, "AsyncStorage")
        }
    }

    static async getData(key) {
        try {
            let value = await AsyncStorage.getItem(key);
            if (value) {
                let newvalue = JSON.parse(value);
                return newvalue;
            } else {
                return value;
            }
        } catch (error) {
            console.error(error, "AsyncStorage")
        }
    }

    static async removeItemValue(key) {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (exception) {
            return false;
        }
    }

    static async makeRequest({ url, data, method = "POST" }) {
        // console.log('-----form Data ', data);
        let finalUrl = Config.baseurl + url;
        let form;
        let methodnew;
        // let token = Helper.security_token
        let token = await this.getData('token');
        let varheaders;
        console.log(finalUrl, "   ++++++++++++finalUrl")
        console.log(token, "   ++++++++++++tokentoken")
        if (method == "POSTUPLOAD") {
            methodnew = "POST";
            varheaders = {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data;',
                "Authorization": `Bearer ${token}`,
            }
            form = data;
        }

        else if (method == "POST") {
            methodnew = "POST";
            if (token) {
                varheaders = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                }
            } else {
                varheaders = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
            form = JSON.stringify(data);
            // form = data;
        }
        else {
            methodnew = "GET";
            if (token) {
                varheaders = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                }
            } else {
                varheaders = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        }
        return fetch(finalUrl, {
            body: form,
            method: methodnew,
            headers: varheaders,
        })
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                return JSON.stringify(responseJson);
                //     if (responseJson.hasOwnProperty('status')) {
                //         if (responseJson.error === 401) {
                //             AsyncStorage.removeItem('userdata');
                //             AsyncStorage.removeItem('token');
                //             Toast.show(responseJson.message);
                //         }
                //     } else
                //         return responseJson;
                // }
            })
            .catch((error) => {
                console.log('errorerror', error);
            });
    }

    // static getImageUrl(url) {
    //     return finalUrl = Config.imageUrl + '/' + url;
    // }
}