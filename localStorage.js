/* 

	Author: Cristian Mari
	Derechos: Libre!
	Pago: Usarlo todo lo que quieran!
	Version: 1.0v
	Idioma: es-AR
	localStorage => Storage
	
		*metods
			.set(key[string],value[string,object,number]);
			.get(key[string],json[boolean]);
			.remove(key[string]);
			.clear();

*/

Storage = (function(){

	var _self   = this;
	
	// JsonStorage
	object = {};
	
	object.get = function(key,index){
					
		try{
			
			// Lo parseamos y retornamos en caso de exito
			var data = JSON.parse(localStorage.getItem(key));

			if(!index)
				return data;
			else
				return data[index];
				
		}catch(e){
			
			// Devolvemos falso en caso de fallo
			return false;
			
			// Mostramos en consola el error
			console.log(e);
	
		}
		
	
	};
	
	object.set = function(key,value){
	
		var result = false;
	
		try{
	
			result = JSON.stringify(value);
	
			localStorage.setItem(key,result);
		
		}catch(e){
	
			// Retornamos falso en caso de que falle
			return result;
	
			// Mostramos en consola el error
			console.log(e);
	
		}
	
	};

	return {
		
		set : function(key,value){
		
			if(typeof value == 'object')
				object.set(key,value);
			else
				localStorage.setItem(key,value);
		
		},
	
		get : function(key,json){
		
			/*  En caso de que sea nulo y no se haya establecido que es
				es un objeto */
			if(localStorage.getItem(key) == null && !json)
				return false;
		
			/*  En caso de que no sea nulo y se haya establecido
				que es un objeto */
			else if(localStorage.getItem(key) !== null && json)
				return object.get(key);
		
			/*  En caso de que no sea nulo y que no sea un objeto */
			else 
				return localStorage.getItem(key);
		
		},
	
		remove : function(key){
		
			if(localStorage.removeItem(key))
				return true;
			else
				return false;
		
		},
	
		clear : function(){
		
			localStorage.clear();
		
		}
	
	}
	
	
})(window);
