UrlExists = function (url, cb){
    jQuery.ajax({
        url:      url,
        dataType: 'text',
        type:     'GET',
        complete:  function(xhr){
            if(typeof cb === 'function')
               cb.apply(this, [xhr.status]);
            }
       });
    }


    window.CheckUrlExists = function() { 
    UrlExists('https://prysm.service.hmpo.ho/reports/browse/',function(status){
        if (status===200) {  console.log("Good")
            }else{               console.log("Bad")            
            }
      })
  } 