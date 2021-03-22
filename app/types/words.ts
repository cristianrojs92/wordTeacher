import  { storeData, getData } from '../utils/storage';

type word = {
  name : string,
  value: string
}

export default class Words {
  
  words : word[];
  
  constructor() {

    //Obtenemos las palabras almacenadas
    this.words = [];    
  }

  async getAll() : Promise<word[]> {

      // Obtiene las palabras almacenadas en el storage
      const getAllWords = async () : Promise<word[]> => {
        let words : word[] = [];
        
        try {

          //Consulta al storage
          const wordsValues = await getData('words');
          if (wordsValues !== undefined) {
            words = JSON.parse(wordsValues);
          }

        } catch (error) {
          console.log(`(getAllWords) Se produjo un error ${error}`);      
        }
        console.log(words);
        return words;
      }
    if(this.words.length === 0) {
      this.words = await getAllWords();
    }
    return this.words;
  }



}