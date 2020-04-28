import $ from "jquery";

class ModalResult extends HTMLElement {
   connectedCallback(){
       $(this).addClass('modal fade');
       $(this).attr("id", "myModal");
   }

   set data(data) {
       this._data = data;
       this.render();
   }
 
   render() {
       const country = $('search-bar').val().toUpperCase();
       this.innerHTML = `<div class="modal-dialog modal-lg">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1>${country}</h1>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                  <div class="col-md-4 mb-3">
                                    <div class="card">
                                      <div class="card-body">
                                        <p class="card-text text-center text-danger">  ${this._data.confirmed.value} <br> Positif</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-4 mb-3">
                                    <div class="card">
                                      <div class="card-body">
                                        <p class="card-text text-center text-success"> ${this._data.recovered.value} <br> Sembuh</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-4 mb-3">
                                    <div class="card">
                                      <div class="card-body">
                                        <p class="card-text text-center text-danger"> ${this._data.deaths.value} <br> Meninggal</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-12 text-center">
                                    <h6>Last Update : ${new Date(this._data.lastUpdate) }</h6>
                                  </div>
                                </div>

                            </div>
                            <div class="modal-footer">
                              <input class="btn btn-primary" data-dismiss='modal' value="Close">
                            </div>
                          </div>
                        </div>`;

    $('#myModal').modal('show');

   }

   renderError(message) {
       this.innerHTML = `<div class="modal-dialog modal-lg">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1>404</h1>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                  <div class="col-md-12 text-center">
                                    <h6>${message}</h6>
                                  </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                              <input class="btn btn-primary" data-dismiss='modal' value="Close">
                            </div>
                          </div>
                        </div>`;

    $('#myModal').modal('show');

   }
}
 
customElements.define("modal-result", ModalResult);