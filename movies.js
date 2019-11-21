//based on this chart: http://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555924622/shape/mentalfloss/640moviebinarytree.jpg

var isHomeworkDone = true;
var isHomeworkFakeable = true;
var isWeatherDealabe = true;
var haveParentsPermission = true;
var isSneaky = true;
var isWorthIt = true; 
var result;

function movieDesicsion (){
    if(isHomeworkDone){
        if(isWeatherDealabe){
            if(haveParentsPermission){
                result = "Go to Stars Wars 15";
            }else if(isSneaky){
                result = "Go to Stars Wars 15";
            }else if(isWorthIt){
                result = "Go to Stars Wars 15"
            }else{
                result = "Stay Home";
            }
        }else if(isWorthIt){
            result = "Go to Stars Wars 15";
        }else{
            result = "Stay Home";
        }
    }else if(isHomeworkFakeable){
        if(isWeatherDealabe){
            if(haveParentsPermission){
                result = "Go to Stars Wars 15";
            }else if(isSneaky){
                result = "Go to Stars Wars 15";
            }else if(isWorthIt){
                result = "Go to Stars Wars 15";
            }else{
                result = "Stay Home";
            }
        }else if(isWorthIt){
            result = "Go to Stars Wars 15";
        }else{
            result = "Stay Home";
        }
    }else if(isWorthIt){
        result = "Go to Stars Wars 15";
    }else{
        result = "Stay Home";
    }
    console.log(result);
}
movieDesicsion();