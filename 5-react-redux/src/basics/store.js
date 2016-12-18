 class Store {
     constructor(reducer, state){
         this._state = state;
         this._reducer = reducer;
     }

     update(action){ 
         this._state = this._reducer(this._state, action);
     }

     getState() {
         return this._state;
     }
 }

 