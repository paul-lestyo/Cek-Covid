import $ from "jquery";

class CardGlobalResult extends HTMLElement {
   connectedCallback(){
       $(this).addClass('col-md-5 mb-4');
   }

   set data(data) {
       this._data = data;
       this.render();
   }
 
   render() {
       this.innerHTML = `<div class="card">
                          <div class="card-header text-center">
                            Global
                          </div>
                          <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item text-danger">${this._data.confirmed.value} <br> Positif</li>
                            <li class="list-group-item text-success">${this._data.recovered.value} <br> Sembuh</li>
                            <li class="list-group-item text-danger">${this._data.deaths.value} <br> Meninggal</li>
                          </ul>
                        </div>`;

   }

   renderError(message) {
       this.innerHTML = `<div class="card">
                          <div class="card-header text-center">
                            Global
                          </div>
                          <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item text-danger">${message}</li>
                          </ul>
                        </div>`;


   }
}
 
customElements.define("card-global-result", CardGlobalResult);