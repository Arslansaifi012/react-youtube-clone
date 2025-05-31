

const ApiKey = 'AIzaSyApq_ebDIMMDF-RbIv_Vl1vAqrrWNiVZ1Q' ;

export default ApiKey ;


export const valueConverter =  (value) =>{

    if (value>=1000000) {
        return Math.floor(value/1000000 ) +"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000 )   +"K"
    }
    else{
        return value ;
    }

}