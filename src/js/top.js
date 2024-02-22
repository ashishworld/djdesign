pathis = location.pathname;
new_array = pathis.split("/");
var arrlen = new_array.length - 2
subdirectory = new_array[arrlen]; // 4 is a guess, try others
var arrlen = new_array.length - 1
file = new_array[arrlen]; // 4 is a guess, try others

document.write('<div class="fixed-top">');
document.write('        <nav class="navbar navbar-togglable bg-nav bg-white py-0 header-shadow" style="height: 150px;">');
document.write('            <div class="container position-relative align-items-center">');
document.write('                <!-- Brand -->');
document.write('                <div class="navbar-brand mb-0 logo-container w-100 text-center">');
document.write('                    <img src="../src/images/logo.png" class="img-fluid animated fadeInUp border border-white border-top-0" alt="adVaya | Practicing Pure Yoga" title="adVaya | Practicing Pure Yoga" />');
document.write('                </div>');
document.write('                <!-- Brand -->');
document.write('                <!-- Toggler -->');
document.write('                <div id="offcanvas-overlay"></div>');
document.write('                <button id="offcanvas-toggle" type="button" class="navbar-toggle collapsed offcanvas-toggle d-xl-none js-offcanvas-has-events" data-toggle="offcanvas" data-target="#navbar" aria-expanded="false" aria-controls="navbar" aria-hidden="true">');
document.write('                    <span class="icon-bar"></span>');
document.write('                    <span class="icon-bar"></span>');
document.write('                    <span class="icon-bar"></span>');
document.write('                </button>');
document.write('                <!-- Toggler -->');
document.write('                <!-- navbar-collapse -->');
document.write('                <div class="mt-n4 container bg-drkbrown px-5 rounded-lg header-shadow">');
document.write('                    <div class="navbar-offcanvas-left navbar-offcanvas m-auto text-lg-center" id="navbar">');
document.write('                        <ul class="navbar-nav navbar-expand-xl navbar-expand-xl">');
document.write('                            <li class="nav-item animated fadeInUp">');
document.write('                                <a class="nav-link" href="../index.html">Home</a>');
document.write('                            </li>');
if (subdirectory == "about-advaya-pure-yoga") {
    document.write('                            <li class="nav-item animated fadeInUp"><a class="nav-link focus" href="../about-advaya-pure-yoga/index.html">About Us</a></li>');
} else {
    document.write('                            <li class="nav-item animated fadeInUp"><a class="nav-link" href="../about-advaya-pure-yoga/index.html">About Us</a></li>');
}
if (subdirectory == "our-programes") {
    document.write('                            <li class="nav-item animated fadeInUp"><a class="nav-link focus" href="../our-programes/index.html">Our Programes</a></li>');
} else {
    document.write('                            <li class="nav-item animated fadeInUp"><a class="nav-link" href="../our-programes/index.html">Our Programes</a></li>');
}
if (subdirectory == "membership") {
    document.write('                            <li class="nav-item animated fadeInUp"><a class="nav-link focus" href="../membership/index.html">Membership</a></li>');
} else {
    document.write('                            <li class="nav-item animated fadeInUp"><a class="nav-link" href="../membership/index.html">Membership</a></li>');
}
if (subdirectory == "testimonials") {
    document.write('                            <li class="nav-item animated fadeInUp"><a class="nav-link focus" href="../testimonials/index.html">Testimonials</a></li>');
} else {
    document.write('                            <li class="nav-item animated fadeInUp"><a class="nav-link" href="../testimonials/index.html">Testimonials</a></li>');
}
// document.write('                            <li class="nav-item animated fadeInUp"><a class="nav-link" href="../work-with-us/index.html">Work With Us</a></li>');
if (subdirectory == "contactus") {
    document.write('                            <li class="nav-item animated fadeInUp"><a class="nav-link focus" href="../contactus/index.html">Contact Us</a></li>');
} else {
    document.write('                            <li class="nav-item animated fadeInUp"><a class="nav-link" href="../contactus/index.html">Contact Us</a></li>');
}
document.write('                        </ul>');
document.write('                    </div>');
document.write('                </div>');
document.write('                <!-- navbar-collapse -->');
document.write('            </div>');
document.write('        </nav>');
document.write('    </div>');