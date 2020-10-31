import { toastAlert }  from "./toastAlert";

window.addEventListener('message', function (e) {
    try{
      if (e.data.message && e.data.message.action == "tabReply") {
        console.log("tabReply event", e.data.message)
        if (e.data.message.data.data.node.chain == '_'){
            console.log("tronLink currently selects the main chain")
        }else{
            console.log("tronLink currently selects the side chain")
        }
      }

      if (e.data.message && e.data.message.action == "setAccount") {
        
        var loginName = e.data.message.data.name;
        var getName = localStorage.getItem('qas4567d');
        var encodedString = window.btoa( loginName );
        var decodedString = window.atob( getName ); 

        if(getName && getName !=null){
          if(decodedString !=loginName){
            console.log('wallet connectionn')
            setTimeout(function() {
              toastAlert('success',"Wallet connected successfully",'tronwallet');
              localStorage.removeItem("qas4567d");
              localStorage.setItem('qas4567d', encodedString);
            },1000);
          }
        }else{
         localStorage.setItem('qas4567d', encodedString); 
        }
      }
      if (e.data.message && e.data.message.action == "setNode") {
          console.log("setNode event", e.data.message)
          if (e.data.message.data.node.chain == '_'){
              console.log("tronLink currently selects the main chain")
          }else{
              console.log("tronLink currently selects the side chain")
          }

      }
    }catch(e){
      console.log('wallet error',e)
    }
  });