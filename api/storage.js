import AsyncStorage from '@react-native-async-storage/async-storage';
const ACTIVEPATIENTSKEY = "activePatients";
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

export async function retrieveActivePatients() {
    return await getData(ACTIVEPATIENTSKEY);
}
export async function updateActivePatients(activePatients) {
    await storeData(activePatients, ACTIVEPATIENTSKEY);
}
export async function addActivePatient(newPatient) {
    const activePatients = await getData(ACTIVEPATIENTSKEY);
    console.log("activePatients", activePatients);
    if (activePatients === null || activePatients === undefined) {
        //no existing record
        await storeData([newPatient], ACTIVEPATIENTSKEY);
        return;
    }
    activePatients.push(newPatient);
    await storeData(activePatients, ACTIVEPATIENTSKEY);
}
const getStorageKey = (key) => {
    return `@${key}`;
}
//For development purposes only
//unsafe to have so maybe remove it for production
export async function __clear() {
    console.log("Clearing Active Patients List")
    try {
        await storeData(null, ACTIVEPATIENTSKEY);
        return;
    } catch (e) {
        // saving error
    }
}