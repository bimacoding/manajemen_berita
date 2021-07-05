Path.map("#/twittrend/detiltwittrend(/:id)").to(function(){
requirejs.config({
    baseUrl: 'assets/js',
    paths: {handlebars: 'handlebars'}
});

requirejs(['handlebars'], function( hd ) {

	twitpopular('6h', 50, 'rightbar');

	var s = window.location.href;
	exp   = s.split('/');
	id    = exp[7];  
	gettweet(id);

    var template = hd.compile(`
      	<div class="row">
            <div class="col-lg-7">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-hearder mb-1">{{ home_title }}</h4>
                        {{ result_berita }}
                   <hr>
                   <div class="faq-section" id="listtweet">
                   </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="card">
                <div class="card-body">
                    <div class="card fixed">
                      <div class="card-header bg-primary text-white" style="border-radius:20px 20px 0px 0px;">
                        <h4 class="m-2">6 Hour Ago</h4>
                      </div>
                      <div class="card-body bg-body " style="border-radius:0px 0px 0px 0px;">
                        <div class="table-responsive">
						    <table class="table table-striped">
						   <thead> 
						  </thead>
						  <tbody id="rightbar"> 
						  </tbody> 
						  </table>
						</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `);
    var context = { home_title: "Detail Twitter Trending"};
    $("#contextx").html(template(context));
});

});


function gettweet(keyword){

			  axios.post(base_api+'/api/popular/gettweet', {keyword: keyword})
			  .then(function (response) { 
			    console.log(response.data); 
			   	// console.log(response.data.length); 
			   		(response.data).forEach(function(element, index){

			   	 
				     
				       var listtweet = `
						                    <div id="accordion-1" class="accordion">
						                      <div class="card">
						                        <div class="card-header" id="headingOne">
						                          <h5 class="mb-0">
						                          	<div class="card-body">
						                               <div style="display: flex;">
														    <img src="${element.user.profile_image_url}" class="img-thumbnail" width="55" height="55" style="margin:5px;"/>
															<h6 class="card-title" style="padding-top: 2%;">${element.user.name} <small>@${element.user.screen_name}</small></h6>
														</div>
														<b>${element.user.name}</b> ${element.text} 
						                            </div>
						                          </h5>
						                        </div>
						                      </div>
						                    </div>
						                  </div>`
				      $("#listtweet").append(listtweet);
				      // console.log(element);

			    	});


			  })
			  .catch(function (error) {

			    console.log(error);

			  });

			}


function twitpopular(rangetime, datalimit, restoid){

			  axios.post(base_api+'/api/issuepopular/twit', {rangetime: rangetime, datalimit: datalimit})
			  .then(function (response) {
			  
			    console.log(response.data);
			   	// console.log(response.data.length);
			   
			   	if(response.data.length !== 0){

			   		(response.data).forEach(function(element, index){

					      var tweets = `<tr>
										<td class="no text-center">${index+1}</td>
										<td class="keywords">
										<a href="#/twittrend/detiltwittrend/${element.keyword_wcloud}" target="_blank"><i class="ti-arrow-top-right" style="color: #3f9843;"></i></a>
										<a href="${element.link}" class="tag" target="_blank"><i class="ti-twitter-alt" style="color:#1da1f2;"></i></a>
										<span class="text-dark" >${decodeURIComponent(element.keyword_wcloud)}</span>
										</td> 
									</tr>`
					      $("#"+restoid).append(tweets);
					       

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
	   

	