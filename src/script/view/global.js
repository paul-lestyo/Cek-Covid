import DataSource from '../data/data-source.js';


   // const searchElement = document.querySelector("search-bar");
   // console.log(searchElement.value);
   // const ModalResultElement = document.querySelector("modal-result");
 
    const getGlobal = async () => {
       try{
           const result = await DataSource.searchClub('global');
           console.log(result);
           // renderResult(result);
       } catch (message) {
          console.log(message);
           // fallbackResult(message)
       }
    };

    const x ='awkoaw';

export default {getGlobal,x};