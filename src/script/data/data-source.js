class DataSource {
    static searchClub(keyword) {
      const url = keyword == 'global' ? 'https://covid19.mathdro.id/api/' : `https://covid19.mathdro.id/api/countries/${keyword}`;
        return fetch(url)
        .then(response => {
           return response.json();
        })
        .then(responseJson => {
           if(responseJson.confirmed) {
               return Promise.resolve(responseJson);
           } else {
               return Promise.reject(`${keyword} is not found`);
           }
       })
    }
}

export default DataSource;