
fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data').then((data)=>{
  //console.log(data);
  return data.json();
}).then((completedata)=>{
  let data1="";
  completedata.map((values)=>{
    data1+=`<div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="box"></div>
              <div class="box-text">
                <h3>${values.title}</h3>
                <h4>${values.genre}</h4>
                <div class="rating-download">
                  <div class="rating">
                    <i class='bx bxs-star'></i>
                    <span>${values.score}</span>
                  </div>
                  <div class="editor">
                    <i class='bx bxs-check-shield'></i>
                    <span>${values.editors_choice}</span>
                  </div>
                  <a href="#" class="box-btn"><i class="bx bx-down-arrow-alt"></i></a>
                </div>
              </div>
            </div>
            
      </div>

            
      </div>`
  });
  document.getElementById("trending-content swiper").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})