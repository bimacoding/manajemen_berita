var base_api = "http://localhost:8008";
var base_url = "http://localhost:8008/manajemen_berita_pusadatin";
var selecteds = `<option value="all" selected>All Media</option>  
				   <option disabled></option>
	               <option disabled>Media Nasional</option>  
				   <option value="detik.news">&nbsp;&nbsp;&nbsp;detik.com</option>
				   <option value="vivanews">&nbsp;&nbsp;&nbsp;viva.com</option> 
				   <option value="cnnindonesia">&nbsp;&nbsp;&nbsp;cnnindonesia.com</option>
				   <option value="kompas.news">&nbsp;&nbsp;&nbsp;kompas.com</option>
				   <option value="tribunnews">&nbsp;&nbsp;&nbsp;tribunnews.com</option>
				   <option value="merdeka.com">&nbsp;&nbsp;&nbsp;merdeka.com</option>
				   <option value="tempo.co">&nbsp;&nbsp;&nbsp;Tempo</option>
				   <option value="sindonews">&nbsp;&nbsp;&nbsp;Sindo News</option>
				   <option value="okezone.news">&nbsp;&nbsp;&nbsp;Okezone</option>
				   <option value="jpnn">&nbsp;&nbsp;&nbsp;jpnn.com</option>
				   <option value="liputan6.news">&nbsp;&nbsp;&nbsp;liputan6.com</option>
				   <option value="suara.news">&nbsp;&nbsp;&nbsp;suara.com</option>
				   <option value="validnews">&nbsp;&nbsp;&nbsp;validnews.id</option>
				   <option value="harianjogja.news">&nbsp;&nbsp;&nbsp;harianjogja.com</option>
				   <option value="fajar">&nbsp;&nbsp;&nbsp;fajar.id</option>
				   <option value="analisadaily.news">&nbsp;&nbsp;&nbsp;analisadaily.com</option>
				   <option value="tirto.id">&nbsp;&nbsp;&nbsp;tirto.id</option>
				   <option value="antaranews">&nbsp;&nbsp;&nbsp;antaranews.com</option> 
				   <option value="suaramerdeka.news">&nbsp;&nbsp;&nbsp;suaramerdeka.com</option>
				   <option value="republika.news">&nbsp;&nbsp;&nbsp;republika.co.id</option>
				   <option value="idntimes.news">&nbsp;&nbsp;&nbsp;idntimes.com</option>
				   <option value="inews.id">&nbsp;&nbsp;&nbsp;inews.id</option>
				   <option value="mediaindonesia">&nbsp;&nbsp;&nbsp;mediaindonesia.com</option>
				   <option value="pikiranrakyat.news">&nbsp;&nbsp;&nbsp;pikiran-rakyat.com</option>
				   <option value="cnbcindonesia">&nbsp;&nbsp;&nbsp;cnbcindonesia.com</option>
				   <option value="katadata">&nbsp;&nbsp;&nbsp;katadata.co.id</option>
				   <option value="poskota">&nbsp;&nbsp;&nbsp;poskota.co.id</option>
				   <option value="law-justice">&nbsp;&nbsp;&nbsp;law-justice.co</option>
				   <option value="beritajakarta">&nbsp;&nbsp;&nbsp;beritajakarta.id</option>
				   <option value="eramuslim">&nbsp;&nbsp;&nbsp;eramuslim.com</option>
				   <option value="covesia">&nbsp;&nbsp;&nbsp;covesia.com</option>
				   <option value="inilah">&nbsp;&nbsp;&nbsp;inilah.com</option>
				   <option value="lintasterkini.com">&nbsp;&nbsp;&nbsp;lintasterkini.com</option>
				   <option value="jurnas">&nbsp;&nbsp;&nbsp;jurnas.com</option>
				   <option value="ntmcpolri">&nbsp;&nbsp;&nbsp;ntmc.idntmcpolri.info</option>
				   <option value="voi">&nbsp;&nbsp;&nbsp;voi.id</option>
				   <option value="pontianakpost.news">&nbsp;&nbsp;&nbsp;pontianakpost.co.id</option>
				   <option value="harianterbit">&nbsp;&nbsp;&nbsp;harianterbit.com</option>
				   <option value="medcom">&nbsp;&nbsp;&nbsp;medcom.id</option>
				   <option value="pakarberita">&nbsp;&nbsp;&nbsp;pakartberita.com</option>
				   <option disabled></option>
	               <option disabled>Media Internasional</option>
				   <option value="thejakartapost">&nbsp;&nbsp;&nbsp;thejakartapost.com</option> 
				   <option value="voanews">&nbsp;&nbsp;&nbsp;voanews.com</option>
				   <option value="foxnews">&nbsp;&nbsp;&nbsp;foxnews.com</option>
				   <option value="bbc">&nbsp;&nbsp;&nbsp;bbc.com</option>
				   <option value="aninews">&nbsp;&nbsp;&nbsp;aninews.com</option>
				   <option value="cbsnews">&nbsp;&nbsp;&nbsp;cbsnews.com</option>
				   <option value="theguardian">&nbsp;&nbsp;&nbsp;theguardian.com</option>
				   <option value="aljazeera">&nbsp;&nbsp;&nbsp;aljazeera.com</option>
				   <option value="vice">&nbsp;&nbsp;&nbsp;vice.com</option>
				   <option value="channelnewsasia">&nbsp;&nbsp;&nbsp;channelnewsasia.com</option>`;