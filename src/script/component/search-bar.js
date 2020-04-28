class SearchBar extends HTMLElement {
   connectedCallback(){
   	   this.classList.add('row');

       this.render();
   }

   set clickEvent(event) {
       this._clickEvent = event;
       this.render();
   }

   get value() {
       return this.querySelector("#search").value;
   }
 
   render() {
       this.innerHTML = `<div class="col-12 col-sm pr-sm-2 mt-3">
		                    <input type="text" name="search" id="search" placeholder="Silahkan Masukan Salah Satu Ibukota" class="form-control">
		                </div>
		                <div class="col-12 col-sm-auto pl-sm-0 mt-3">
		                    <input type="button" name="commit" id="btn-search" value="Search" class="btn btn-primary btn-block">
		                </div>`;
		this.querySelector("#btn-search").addEventListener("click", this._clickEvent);		                
   }
}
 
customElements.define("search-bar", SearchBar);