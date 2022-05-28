import AsyncStorage from "@react-native-async-storage/async-storage";


const Helper = {
    // deviceid: DeviceInfo.getDeviceId(),
    // device_token: "12345678",

    async setData(key, val) {
        try {
            let tempval = JSON.stringify(val);
            await AsyncStorage.setItem(key, tempval);
        } catch (error) {
            console.error(error, "AsyncStorage")
        }
    },

    async getData(key) {
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
    },
}

export default Helper
