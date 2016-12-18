 class Store {
     constructor(reducer, state){
         this._state = state;
         this._reducer = reducer;
     }

     update(action){ 
         this._state = this._reducer(this._state, action);
         return this;
     }

     getState() {
         return this._state;
     }
 }

 module.exports = Store;

 