<template>
  <section id="opinions">
    <div id="advice">
      <div class="content-box-md">
        <div id="services-tabs">
          <div id="service-tab-1" class="service-tab">
            <div class="container">
              <div class="row">
                <div class="col-md-6 image-tab image-tab-01"></div>
                <div class="col-md-6">
                  <div class="tab-bg">
                    <h2>01</h2>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit delectus dignissimos ex aut, nihil iure
                      beatae consequuntur fuga distinctio aspernatur odio magni
                      maiores maiores aperiam ut quisquam nesciunt numquam
                      repellendus amet!
                    </p>
                    <div id="services-02-btn-01">
                      <a
                        class="btn btn-general btn-blue smooth-scroll"
                        href="#contact"
                        title="get in touch"
                        >Get in touch</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AdviceEnd',
  props: {
    msg: String,
  },
}
</script>
<style scoped>
.content-box-lg {
  padding: 120px 0;
}
.content-box-md {
  padding: 100px 0;
}
.btn {
  outline: 0 !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.btn-general {
  position: relative;
  font-size: 13px;
  background: 0;
  color: #55b9a6 !important;
  line-height: 1 !important;
  padding: 13px 46px;
  border: 2px solid;
  overflow: hidden;
  z-index: 1;
}
.btn-general:before {
  content: ' ';
  position: absolute;
  background: #55b9a6;
  width: 0;
  height: 100%;
  left: -50%;
  top: 0;
  -webkit-transform: skew(50deg);
  -ms-transform: skew(50deg);
  transform: skew(50deg);
  -webkit-transform-origin: top left;
  -ms-transform-origin: top left;
  transform-origin: top left;
  z-index: -1;
}
.btn-general:hover:before {
  width: 150%;
}
.btn-blue {
  border-color: #55b9a6;
}
.btn-blue:hover {
  color: #fff !important;
}
#advice {
  position: relative;
  overflow-y: visible;
}
.service-tab .col-md-6 {
  padding: 0;
}
.service-tab .image-tab-01 {
  height: 520px;
}
.service-tab .image-tab-01 {
  background: url(../assets/image/services/img_tab_01.webp) center no-repeat;
  background-size: cover;
  -webkit-filter: saturate(1.5) hue-rotate(345deg);
  filter: saturate(1.5) hue-rotate(345deg);
}
.service-tab .tab-bg {
  padding: 50px 30px;
  height: 520px;
}
.row.no-gutters [class*='col-'] {
  padding: 0;
}
#contact {
  background: url(../assets/image/bg/pattern.jpg) center no-repeat fixed;
  background-size: cover;
}
#contact-left p {
  margin: 35px 0 20px;
}
#contact-left ul.social-list li a {
  border: 1px solid #212226;
  text-align: center;
}
#contact-left ul.social-list li a:hover {
  border-color: transparent;
}
</style>
