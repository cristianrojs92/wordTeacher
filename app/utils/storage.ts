import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Almacena un valor por clave en el store
 * @param key     Clave
 * @param value   Valor
 * @returns true - Si se alamaceno correctamente / false - No logro almacenar el valor
 */
const storeData = async (key : string, value : string) : Promise<boolean> => {
  let result = false;
  try {
    await AsyncStorage.setItem(key, value);
    result = true;
  } catch (e) {
    console.log(`(storeDate): Ocurrio un error ${e}`);
  }
  return result;
}

/**
 * Obtiene un valor del store
 * @param key     Clave
 * @returns       Valor almacenado
 */
const getData = async (key: string) : Promise<string|undefined> => {
  let data;
  try {
    
    const value = await AsyncStorage.getItem(key);
    if(value !== null) {
      data = value;
    }
  } catch(e) {
    console.log(`(getData): Ocurrio un error ${e}`);
  }
  return data;
}

export {
  storeData,
  getData
}