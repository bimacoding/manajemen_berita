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

        jalan();                  

        html = `
            <div class="row">
                <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-hearder mb-5">{{ home_title }}</h4>
                        {{ result_berita }}
                        <hr>
                          
                        
                         <select class="form-control mt-4 mb-5 pindah" style="width:240px;" id="listdatas"></select>     
                         <div id="newslist"></div>
                        <input type="hidden" id="paging" value="0">
                        <button type="button" id="loadmore" onclick="loadmore();" class="btn btn-primary btn-block tex-center" style="width:250px; margin-left:210px;"  ><i class="ti-loop"></i>&nbsp;Load More</button>
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

function jalan()
{
       var selc = selecteds;                        
       $(".pindah").html(selc);
        loadmore();
         $("#listdatas").on('change', function(){
          $("#newslist").html(""); 
          $("#paging").val(0);
          $("#loadmore").attr('disabled', false).html('Load More');
          loadmore();
        });
}

function loadmore(){ 
  $('#showload').show(100);
 
  var pageval = $("#paging").val();
  var vmedia  = $("#listdatas").val(); 
  axios.post(base_api+'/api/detilmedia/newsfeed/', {media: 'all', datalimit: 10, page: pageval})
  .then(function (response) { 
    $("#paging").val(response.data.nextpage); 
    // console.log(response.data);
    // console.log(response.data.nextpage);
    // console.log(response.data.datanews);
    if(response.data.datanews == ""){
      $("#loadmore").attr('disabled', true).html('Data has been empty'); 
    }  

    $("#newslist").html("");

    (response.data.datanews).forEach(function(element, index){  
    
    if(element.media == "merdeka.com"){
      var image_link = 'images/merdekacom.jpg';
    }else{
      var image_link = element.image_link;
    }

    switch (element.media) {
    case 'vivanews':
      var medianews = `<span class="badge badge-danger">viva.co.id</span>`;
      break;
    case 'detik.news':
      var medianews = `<span class="badge badge-primary">detik.com</span>`;
      break;
    case 'cnnindonesia':
       var medianews = `<span class="badge badge-danger">cnnindonesia.com</span>`;
      break;
    case 'kompas.news':
       var medianews = `<span class="badge badge-success">www.kompas.com</span>`;
      break; 
    case 'tribunnews':
       var medianews = `<span class="badge badge-warning">www.tribunnews.com</span>`;
      break;
    case 'merdeka.com':
       var medianews = `<span class="badge badge-warning">merdeka.com</span>`;
      break;
    case 'tempo.co':
       var medianews = `<span class="badge badge-info">tempo.co</span>`;
      break;
    case 'sindonews':
       var medianews = `<span class="badge badge-info">www.sindonews.com</span>`;
      break;
    case 'okezone.news':
       var medianews = `<span class="badge badge-info">www.okezone.com</span>`;
      break;
    case 'jpnn':
       var medianews = `<span class="badge badge-primary">jpnn.com</span>`;
      break;
    case 'liputan6.news':
       var medianews = `<span class="badge badge-success">liputan6.com</span>`;
      break;
    case 'suara.news':
       var medianews = `<span class="badge badge-danger">suara.com</span>`;
      break;
    case 'validnews':
       var medianews = `<span class="badge badge-warning">validnews.id</span>`;
      break;
    case 'harianjogja.news':
       var medianews = `<span class="badge badge-warning">harianjogja.com</span>`;
      break;
    case 'fajar':
       var medianews = `<span class="badge badge-success">fajar.id</span>`;
      break;
    case 'analisadaily.news':
       var medianews = `<span class="badge badge-primary">analisadaily.com</span>`;
      break;
    case 'tirto.id':
       var medianews = `<span class="badge badge-primary">tirto.id</span>`;
      break;
    case 'antaranews':
       var medianews = `<span class="badge badge-info">antaranews.com</span>`;
      break;
    case 'suaramerdeka.news':
       var medianews = `<span class="badge badge-warning">suaramerdeka.com</span>`;
      break;
    case 'republika.news':
       var medianews = `<span class="badge badge-info">republika.co.id</span>`;
      break;
    case 'idntimes.news':
       var medianews = `<span class="badge badge-success">idntimes.com</span>`;
      break;
    case 'inews.id':
       var medianews = `<span class="badge badge-warning">inews.id</span>`;
      break;
    case 'mediaindonesia':
       var medianews = `<span class="badge badge-success">mediaindonesia.com</span>`;
      break;
    case 'pikiranrakyat.news':
       var medianews = `<span class="badge badge-warning">pikiran-rakyat.com</span>`;
      break;
    case 'cnbcindonesia':
       var medianews = `<span class="badge badge-info">cnbcindonesia.com</span>`;
      break;
    case 'katadata':
       var medianews = `<span class="badge badge-warning">katadata.co.id</span>`;
      break;
    case 'poskota':
       var medianews = `<span class="badge badge-info">poskota.co.id</span>`;
      break;
    case 'law-justice':
       var medianews = `<span class="badge badge-success">law-justice.co</span>`;
      break;
    case 'beritajakarta':
       var medianews = `<span class="badge badge-warning">beritajakarta.id</span>`;
      break;
    case 'eramuslim':
       var medianews = `<span class="badge badge-danger">eramuslim.com</span>`;
      break;
    case 'covesia':
       var medianews = `<span class="badge badge-warning">coveisa.com</span>`;
      break;
    case 'inilah':
       var medianews = `<span class="badge badge-danger">inilah.com</span>`;
      break;
    case 'lintasterkini.com':
       var medianews = `<span class="badge badge-warning">lintasterkini.com</span>`;
      break;
    case 'jurnas':
       var medianews = `<span class="badge badge-danger">jurnas.com</span>`;
      break;
    case 'ntmcpolri':
       var medianews = `<span class="badge badge-warning">ntmc.idntmcpolri.info</span>`;
      break;
    case 'voi':
       var medianews = `<span class="badge badge-danger">voi.id</span>`;
      break;
    case 'pontikanakpost.news':
       var medianews = `<span class="badge badge-info">pontianakpost.co.id</span>`;
      break;
    case 'harianterbit.news':
       var medianews = `<span class="badge badge-primary">pontianakpost.co.id</span>`;
      break;
    case 'medcom':
       var medianews = `<span class="badge badge-info">medcom.com</span>`;
      break;
    case 'pakarberita':
       var medianews = `<span class="badge badge-success">pakarberita.com</span>`;
      break;


    ////////////////////////////////////////////////////////////////////// media internasional
     case 'thejakartapost':
             var medianews = `<span class="badge badge-success">thejakartapost.com</span>`;
            break;
          case 'voanews':
             var medianews = `<span class="badge badge-success">voanews.com</span>`;
            break;
          case 'foxnews':
             var medianews = `<span class="badge badge-success">foxnews.com</span>`;
            break;
          case 'bbc':
             var medianews = `<span class="badge badge-success">bbc.com</span>`;
            break;
          case 'aninews':
             var medianews = `<span class="badge badge-success">aninews</span>`;
            break;
          case 'cbsnews':
             var medianews = `<span class="badge badge-success">cbsnews.com</span>`;
            break;
          case 'theguardian':
             var medianews = `<span class="badge badge-success">theguardian.com</span>`;
            break;
         case 'aljazeera':
             var medianews = `<span class="badge badge-success">aljazeera.com</span>`;
            break;
          case 'vice':
             var medianews = `<span class="badge badge-success">vice.com</span>`;
            break;
          case 'channelnewsasia':
             var medianews = `<span class="badge badge-success">channelnewsasia.com</span>`;
            break;
          
  } 


      //var feednews = `<div>${element.title}<br/>${element.date_origin} - media: ${vmedia}</div><hr/>`  
      var feednews = `<div class="media">
                        <img class="mr-3 w-25 rounded" src="${element.image_link}" alt="sample image">
                        <div class="media-body">
                           <a href="#" class="text-decoration-none text-dark" onclick="newsdetil('${element.link}');">
                                <h4 class="mb-1">
                                     ${element.title}
                                </h4>
                            </a>
                           <div class="row mt-4">   
                             <div class="col-4">
                                <span><i class="fa fa-clock-o"></i><small>${element.date_news}</small></span> 
                             </div>
                              <div class="col-4">
                                  ${medianews}
                              </div>
                          </div>
                        </div>
                      </div>
                      <hr>`             
   
      $("#newslist").append(feednews);
          // console.log(element);
        if (response.data.datanews.length == index+1) { 
                 $('#showload').hide(100);
              }   
  });
     
  })
  .catch(function (error) { 
    console.log(error); 
  }); 
}
