function loadNavbarDiv() {
     String navbar_code_str = <div class="wrapper">
    <div class="sidebar">
        <h2>Cardiac Attack Analysis</h2>
        <ul>
            <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
            <li><a href="#">Image Conversion</a></li>
            <li><a href="#">Filters</a></li>
            <li><a href="#">Segementation</a></li>
            <li><a href="#">Results</a></li>
            <li><a href="#"><i class="fas fa-address-book"></i>Contact</a></li>
        </ul> 
        <div class="social_media">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    
     $('body').append(navbar_code_str);
}