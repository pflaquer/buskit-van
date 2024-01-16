function Landing(){
return(`
<div class="container">
      <!-- Side infos -->
      <div class="side-info">
        <span>discover</span>
        <h1>live music in NYC</h1>
        <p>
          Find the latest, live performances in your city!
        </p>
        <hr />
        <center>
        <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple112/v4/61/72/98/61729802-4c9f-4c99-e775-ae7a252275d3/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" width="30%" height="30%" style="border-radius:10px; filter:drop-shadow(10px 5px 4px gray");"></img></center>
        <br>
        
        <center>
  <input type="text" placeholder="username"><br></input><br><input type="text" placeholder="password"><br></input><br>

        <a href="app.html">Sign In</a>
        <a href="#">join the list</a>
        <!--<a href="#">download</a>-->
      </div>
      </center>
      <!-- Swiper slider -->
      <div class="swiper">
        <div class="swiper-wrapper">
          <!-- Content 1 -->
          <div class="swiper-slide slide-one">
            <div>
              <h2>Wind and Brass</h2>
              <p>
                Discover and tune into live, smooth jazz!
              </p>
              <a href="#">Tune In</a>
            </div>
          </div>
          
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
</div>
}`
       )
}

const render = (x)=>{
  document.getElementById("root").innerHTML = x;
}



function App(){
render(Landing())
}


window.onload = App()

