function getCountry (){
  $.get("https://api.ipdata.co/en?api-key=16a041c3952a0f88802886404f930ecbf4d1ea722b6aaeb205edf4e3", function (response) {
      (JSON.stringify(response, null, 4));
      let countryName = response.country_name;
      if (countryName === "Canada"){
        $("#country-overlay").append("<div class=country-overlay-wrapper><div class='country-overlay'><h1 class='canadian'> We See You Are In Canada </h1> <p class='want-redirect'> Head Over To Our Canadian Store? </p> <button class='redirect-to-ca'>Cutshield.ca</button></div></div> ")
      }
  }, "jsonp");
}
  
export function getCountry;


// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
//   <script>
//     function getCountry (){
//   $.get("https://api.ipdata.co?api-key=test", function (response) {
//       (JSON.stringify(response, null, 4));
//       let countryName = response.country_name;
//       if (countryName === "Canada"){
//         $("#country-overlay").append("<div style="width: 50px; height: 50px; background-color: white; z-index: 1;" class=country-overlay-wrapper><div class='country-overlay'><h1 class='canadian'> We See You Are In Canada </h1> <p class='want-redirect'> Head Over To Our Canadian Store? </p> <button class='redirect-to-ca'>Cutshield.ca</button></div></div> ")
//       }
//   }, "jsonp");
// }
  
//   	$(document).ready(function(){
//     	getCountry()
//     })
//   </script>