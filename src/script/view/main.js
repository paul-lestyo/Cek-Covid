import '../component/search-bar.js';
import '../component/modal-result.js';
import '../component/card-lokal-result.js';
import '../component/card-global-result.js';
import DataSource from '../data/data-source.js';


const getGlobal = async () => {
       const CardGlobalResult = document.querySelector("card-global-result");
       try{
           const result = await DataSource.searchClub('global');
           CardGlobalResult.data = result;
       } catch (message) {
           CardGlobalResult.renderError(message);
       }
    };

const getLokal = async () => {
      const CardLokalResult = document.querySelector("card-lokal-result");
       try{
           const result = await DataSource.searchClub('Indonesia');
           CardLokalResult.data = result;
       } catch (message) {
           CardLokalResult.renderError(message);
       }
    };

const main = () => {
   const searchElement = document.querySelector("search-bar");
   const ModalResultElement = document.querySelector("modal-result");
 
    const onButtonSearchClicked = async () => {
       try{
           const result = await DataSource.searchClub(searchElement.value);
           renderResult(result);
       } catch (message) {
           fallbackResult(message)
       }
    };
    const renderResult = results => {
         ModalResultElement.data = results;
    };

    const fallbackResult = message => {
           ModalResultElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};
export {main,getGlobal,getLokal};