Path.map("#home").to(function(){
    requirejs.config({
        baseUrl: 'assets/js',
        paths: {handlebars: 'handlebars'}
    });
    requirejs(['handlebars'], function( hd ) {

        axios.post(base_api+'/api/popular/pop/', {media: 'all', datalimit: 10})
        .then(function (response) {
            (response.data).forEach(function(element, index){
                var popularnews = `
                    <div class="d-flex align-items-center py-2 border-bottom">
                        <span class="badge badge-danger">#${index+1}</span>
                        <div class="ml-3">
                            <a href="#" class="text-decoration-none text-dark" onclick="newsdetil('${element.link}');">
                                <h6 class="mb-1">
                                     ${element.title}
                                </h6>
                            </a>
                        </div>
                    </div>
                `
                $("#popularnewskanan").append(popularnews);
            }); 
        })
        .catch(function(error){
            console.log(error); 
        });




        html = `
            <div class="row">
                <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-hearder">{{ home_title }}</h4>
                        {{ result_berita }}
                      </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div class="card fixed">
                        <div class="card-header bg-primary text-white" style="border-radius:20px 20px 0px 0px;">
                            <h4 class="m-2">{{ trending_title }}</h4>
                        </div>
                        <div class="card-body">
                            <div id="popularnewskanan" class="mb-3"></div>

                            <button type="button" class="btn btn-primary btn-block"><i class="ti-loop"></i>&nbsp;Load More</button>
                        </div>

                    </div>
                </div>
            </div>
        `;
        var template = hd.compile(html);
        var context = { trending_title: "Trending News", home_title: "Manajemen Berita" };
        $("#contextx").html(template(context));
    });
});

function brnews(str) { 
   return str.replace(/(\n\n\n\n\n\n\n\n|\n\n\n\n\n\n\n\n)/g, '<br/><br/>');
}

function newsdetil(links){
    $('.aside').asidebar('open');
    axios.post(base_api+'/api/detilmedia/t/', {link: links})
    .then(function (response) {

    console.log(response.data);

    if(response.data == ""){ 
        var detailnewspopular = `
          Detail data is being process. Please wait few minutes 
          <div><button onclick="closenews();"><< Back to News Feed</button></div>`
          $("#showdetail").html(detailnewspopular); 
        } 

        (response.data).forEach(function(element, index){ 
          var detailnewspopular = `
          <div class="judul-detailnews">
          <br>
          <h2><b>${element.title}</b></h2> 
          </div>   
          <hr class="my-4" />
          <div class="mb-2">${element.date_news}</div>   
          <div style="color:grey;" class="mb-2">Author by: ${element.author}</div>
          <img src="${element.image_link}" title="${element.title}" alt="${element.title}" class="img-thumbnail img-fluid rounded mx-auto d-block" alt="...">
          <hr/>
          <p class="mb-4" style="font-size:16px;  font-family: 'Arial', sans-serif;font-weight: 400;line-height: 20px;">
             ${brnews(element.article_ori)}
             <br><br><a href="${element.link}"" target="_blank" class="mt-4">Source click here</a>
          </p>` 
          $("#showdetail").html(detailnewspopular);
    });
    })
    .catch(function (error) {
    // console.log(error);
    });
}

