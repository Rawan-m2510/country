<template>
  <section id="about">
    <div class="content-box-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="vertical-heading">
              <h5>Who am I ?</h5>
              <h2>
                Let me talk <br />
                <strong>about </strong>myself
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              sunt, nostrum impedit ut nihil neque molestiae consequuntur,
              expedita voluptate quisquam velit, quo nisi numquam quasi
              temporibus vero dolorem amet eius. Lorem ipsum dolor sit.
              <strong>
                <i style="letter-spacing: 1px">
                  <a href="#contact" class="smooth-scroll"
                    >cmaxime illo voluptate
                  </a>
                </i> </strong
              >ipsum, maxime illo voluptate consequuntur qui quaerat, quia ab et
              officiis dolorem autem nihil fuga optio quasi ipsa accusamus
              laudantium quod eligendi.
            </p>
          </div>
          <div class="col-md-6 text-center">
            <img src="C.\assets\image\profile\photo.webp" alt="John Doe" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>

<style scoped>
#about {
  background: url(../assets/image/bg/pattern.jpg) center no-repeat fixed;
  background-size: cover;
  overflow: visible;
}
#about p,
#progress-elements {
  margin: 50px 0;
}
#progress-elements .col-md-12 {
  padding: 0;
}
#about img {
  width: 400px;
  height: auto;
}
</style>
