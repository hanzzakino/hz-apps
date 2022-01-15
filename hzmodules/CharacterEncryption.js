

function character_shift(char_input, key){

	const char_set = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	if(char_set.indexOf(char_input.toUpperCase())<0){
        return char_input;
    }
	try{
		var shft = ((char_set.indexOf(char_input.toUpperCase()))+key)%(char_set.length);
		while(shft<0){
			shft += 26;
		}
		return char_set[shft];
	}
	catch(err){
		console.log(err);
	}

}

function genRandomNum(_seed=-1){
	if(_seed == 0){
		return 0;
	}
	var seed_str = null, new_seed = null;
	if(_seed != -1){
        while(String(_seed).length < 16){
            seed_str = String(_seed);
            new_seed = '';

            for(let seed_i=0; seed_i<Math.ceil(seed_str.length/2); seed_i++){
                new_seed += String(parseInt(seed_str.charAt(seed_i))*3);
            }
                
            _seed *= parseInt(new_seed);
        }
	}
    else{
    	_seed = Math.floor(Math.random() * (99999999999999999 - 1111111111111111) ) + 1111111111111111;
    }

    var rnd_array = String(_seed).split('').map(Number).slice(0,16);
    var rnd_set = [];
    var _two_dgt_flag = false;


    for(let r_idx = 0; r_idx < rnd_array.length; r_idx++){
        if(_two_dgt_flag){
            _two_dgt_flag = false;
            continue;
        }

        if(parseInt(String(rnd_array[r_idx])+String(rnd_array[r_idx+1]))<=26){
            rnd_set.push(parseInt(String(rnd_array[r_idx])+String(rnd_array[r_idx+1])));
            _two_dgt_flag = true;
        }
        else{
            rnd_set.push(rnd_array[r_idx]);
        }
        if(rnd_set.length >= 8){
            break;
        }
    }

	return rnd_set;
}

function encryptString(str_input, key=''){

	var str_output = "";
	var key_list = null;

	if(key == ''){
        key_list = genRandomNum();
    }
    else{
    	if(key==0){
            return "";
    	}
        else{
        	 key = Math.abs(key);
        }
        key_list = genRandomNum(key);
    }
        
    var key_index = 0;

    for(let i = 0; i<str_input.length; i++){
        if(key_index >= 8){
            key_index = 0;
        }

        
        if (str_input[i] != ' '){
            str_output  += character_shift( str_input[i] , key_list[key_index]);
        }
        else{
            str_output  += ' ';
        }
            
        key_index += 1;
    }
    return str_output;
}


function decryptString(str_input, key=''){

	var str_output = "";
	var key_list = null;

	if(key == ''){
        key_list = genRandomNum();
    }
    else{
    	if(key==0){
            return "";
    	}
        else{
        	 key = Math.abs(key);
        }
        key_list = genRandomNum(key);
    }
        
    var key_index = 0;

    for(let i = 0; i<str_input.length; i++){
        if(key_index >= 8){
            key_index = 0;
        }

        
        if (str_input[i] != ' '){
            str_output  += character_shift( str_input[i] , -key_list[key_index]);
        }
        else{
            str_output  += ' ';
        }
            
        key_index += 1;
    }
    return str_output;
}


module.exports = {encryptString,decryptString};