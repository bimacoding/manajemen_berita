Path.map("#/twittrend").to(function(){
requirejs.config({
    baseUrl: 'assets/js',
    paths: {handlebars: 'handlebars'}
});

requirejs(['handlebars'], function( hd ) {
   
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	 today = yyyy + '-' + mm + '-' + dd;

	 twitpopular('1h', 25, 'onehour');
	 twitpopular('3h', 25, 'threehour');
	 twitpopular('6h', 25, 'sixhour');
	 twitpopular('12h', 25, 'twelvehour');
	 twitpopular('23h', 25, 'twothreehour');
	 newspopular(today, 25, 'newstoday');



    var template = hd.compile(`
      		<div class="card">
                   <div class="card-body">
                        <h4 class="card-hearder mb-5">{{ home_title }}</h4>
                        {{ result_berita }}
                        <hr>
                     <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card fixed">
                            <div class="card-header bg-primary text-white" style="border-radius:20px 20px 0px 0px;">
                                <h4 class="m-2">1 Hour Ago</h4>
                            </div>
                            <div class="card-body">
                              <div class="table-responsive">
								<table class="table table-striped">
								   <thead> 
								  </thead>
								  <tbody id="onehour"> 
								  </tbody> 
								</table>
							  </div>
                            </div>
                          </div>
                       </div>      

                       <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                         <div class="card fixed">
                            <div class="card-header bg-primary text-white" style="border-radius:20px 20px 0px 0px;">
                                <h4 class="m-2">3 Hour Ago</h4>
                            </div>
                            <div class="card-body">
                              <div class="table-responsive">
								<table class="table table-striped">
								   <thead> 
								  </thead>
								  <tbody id="threehour"> 
								  </tbody> 
								</table>
							  </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                         <div class="card fixed">
                            <div class="card-header bg-primary text-white" style="border-radius:20px 20px 0px 0px;">
                                <h4 class="m-2">6 Hour Ago</h4>
                            </div>
                            <div class="card-body bg-body " style="border-radius:0px 0px 0px 0px;">
                             <div class="table-responsive">
								<table class="table table-striped">
								   <thead> 
								  </thead>
								  <tbody id="sixhour"> 
								  </tbody> 
								</table>
							  </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card fixed">
                            <div class="card-header bg-primary text-white" style="border-radius:20px 20px 0px 0px;">
                                <h4 class="m-2">12 Hour Ago</h4>
                            </div>
                            <div class="card-body">
                              <div class="table-responsive">
								<table class="table table-striped">
								   <thead> 
								  </thead>
								  <tbody id="twelvehour"> 
								  </tbody> 
								</table>
							  </div>
                            </div>
                          </div>
                       </div>      

                       <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                         <div class="card fixed">
                            <div class="card-header bg-primary text-white" style="border-radius:20px 20px 0px 0px;">
                                <h4 class="m-2">23 Hour Ago</h4>
                            </div>
                            <div class="card-body">
                             <div class="table-responsive">
								<table class="table table-striped">
								   <thead> 
								  </thead>
								  <tbody id="twothreehour"> 
								  </tbody> 
								</table>
							  </div>     
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                         <div class="card fixed">
                            <div class="card-header bg-primary text-white" style="border-radius:20px 20px 0px 0px;">
                                <h4 class="m-2">Tag Refrences From News</h4>
                            </div>
                            <div class="card-body">
                           <div class="table-responsive">
								<table class="table table-striped">
								   <thead> 
								  </thead>
								  <tbody id="newstoday"> 
								  </tbody> 
								</table>
							  </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
    `);
    var context = { home_title: "VISUALISASI TRENDING STORY TWITTER"};
    $("#contextx").html(template(context));
});

});

	   

		function kFormat(num) {
		    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
	  }


	   

	function twitpopular(rangetime, datalimit, restoid){

			  axios.post(base_api+'/api/issuepopular/twit', {rangetime: rangetime, datalimit: datalimit})
			  .then(function (response) {
			  
			    console.log(response.data);
			   	// console.log(response.data.length);
			   
			   	if(response.data.length !== 0){

			   		(response.data).forEach(function(element, index){
			   			   var counted = element.counted == 0 ? "" : kFormat(element.counted);
			   			   if(rangetime == "1h"){
						    	var counttweet = `<small>${counted}</small>`;
						   }else{
						   		var counttweet = "";
						   }
					      var tweets = `<tr>
											<td class="no text-center">${index+1}</td>
											<td class="keywords">
											<a href="#/twittrend/detiltwittrend?search=${element.keyword_wcloud}" class="tag" target="_blank"><i class="ti-arrow-top-right" style="color: #3f9843;"></i></a>
											<a href="${element.link}" class="tag" target="_blank"><i class="ti-twitter-alt" style="color:#1da1f2;"></i></a>
											${decodeURIComponent(element.keyword_wcloud)} ${counttweet} 


											</td>
										</tr>`
					      $("#"+restoid).append(tweets);
			   				// http://localhost:8080/api_handi/twitterdetail.php?search=${element.keyword_wcloud}
				    });

			   	}else{
			   		var tweets = `<tr>
									<td class="keywords text-center" colspan="2">New data on progress...</td>
								  </tr>`
			   		$("#"+restoid).append(tweets);
			   	}

			  })
			  .catch(function (error) {

			    console.log(error);

		});
	}

	function newspopular(dates, datalimit, restoid){

			  axios.post(base_api+'/api/issuepopular/datelimit', {dates: dates, datalimit: datalimit, action: 0})
			  .then(function (response) {
			  
			    // console.log(response.data);
			   	// console.log(response.data.length);
			   
			   	if(response.data.length !== 0){

			   		(response.data).forEach(function(element, index){
				     
				      var popnews = `<tr>
										<td class="no text-center">${index+1}</td>
										<td class="keywords">
										<a href="#/twittrend/detiltwittrend?search=${element.keyword_wcloud}" class="tag" target="_blank"><i class="fa fa-external-link-square" style="color: #3f9843;"></i></a> ${element.keyword_wcloud}
										</td> 
									</tr>`
				      $("#"+restoid).append(popnews);

			    });

			   	}else{

			   		var popnews = `<tr>
										<td class="keywords text-center" colspan="2">New data on progress...</td>
									</tr>`
			   		$("#"+restoid).append(popnews);

			   	}

			    


			  })
			  .catch(function (error) {

			    console.log(error);

			  });

		}