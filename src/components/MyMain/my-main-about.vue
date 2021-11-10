<template>
  <div class="my-main-about">
    <div class="my-main-about_title">Коротко о нас</div>
    <div class="my-main-about_row">
      <div class="my-main-about_info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          nostrum, incidunt explicabo corporis dolor dicta temporibus beatae
          velit. Sed, similique.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vel ex,
          modi quas beatae veritatis quis qui magni nam suscipit quidem numquam
          facere assumenda? Sit quis quaerat quae molestias totam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          cupiditate, repellendus perferendis repudiandae minus expedita tempora
          sed, suscipit consequuntur ipsum fuga quis commodi! Molestiae velit,
          quod quos consectetur incidunt vero expedita accusantium, architecto
          officia at quam excepturi mollitia aperiam recusandae, reiciendis
          fugit beatae. Et quas, quo deserunt officia cum minima impedit ipsa
          dolor laborum ex incidunt! Omnis, nesciunt quis quia exercitationem
          magnam molestiae voluptate! Numquam at recusandae officiis repellat
          aspernatur? Necessitatibus, maiores sapiente in repudiandae ullam
          vitae ipsa aut, tempora iusto tenetur quod quam rerum doloribus nam
          sunt ratione corrupti cupiditate repellendus. Quasi facere ullam quia
          accusamus architecto, earum nesciunt.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="my-main-about_img">
        <img src="@/assets/images/mainImg.jpg" alt="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-main-about",
};
</script>

<style lang="scss" scoped>
.my-main-about {
  padding: 4rem 0;
  &_title {
    text-align: center;
    font-size: 2.1rem;
    margin-bottom: 5rem;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -2rem;
      right: 50%;
      transform: translateX(50%);
      width: 8rem;
      height: 0.2rem;
      background: $orange;
    }
  }
  &_row {
    display: flex;
    justify-content: space-between;
  }

  &_img {
    flex-basis: 50%;
    img {
      box-shadow: 0px 0px 3px $orange;
      max-width: 100%;
      object-fit: cover;
    }
  }
  &_info {
    font-size: 1.4rem;
    line-height: 150%;
    flex-basis: 40%;
    text-shadow: 5px 5px 5px black;

    p {
      margin-bottom: 1rem;
    }
  }
}
</style>
