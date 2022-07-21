import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * 
 * @param {JSON} value data object to store
 * @param {string} key unique key to create/overwrite data. Usually the type of the data is used as key. Hence usually a collection of said data type is stored with the same key.
 */
export async function storeData(value, key) {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(getStorageKey(key), jsonValue);
    } catch (e) {
        // saving error
    }
}

/**
 * 
 * @param {string} key unique key to retrieve data. Usually the type of the data is used as key. Hence usually a collection of said data type is returned.
 */
export async function getData(key) {
    try {
        const value = await AsyncStorage.getItem(getStorageKey(key));
        if (value !== null) {
            const jsonValue = await AsyncStorage.getItem(getStorageKey(key));
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        }
    } catch (e) {
        // error reading value
    }
}

const getStorageKey = (key) => {
    return `@${key}`;
}