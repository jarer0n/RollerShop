<template>
  <footer class="my-footer">
    <div class="container">
      <div class="my-footer_row">
        <div class="my-footer_title">
          Roller Skates STORE <img src="@/assets/images/tyre9.png" alt="" />
        </div>
        <div class="my-footer_social">
          <a href="#"
            ><img src="@/assets/images/instagram.png" alt="instagram"
          /></a>
          <a href="#"><img src="@/assets/images/vk.png" alt="vk"/></a>
          <a href="#"
            ><img src="@/assets/images/telegram.png" alt="telegram"
          /></a>
        </div>
        <div class="my-footer_phone">
          <div class="my-footer_phone_number">+7 (888) 888 88 88</div>
          <div class="my-footer_phone_time">с 12:00 до 21:00</div>
          <div class="my-footer_phone_weekends">Без выходных</div>
        </div>
      </div>
      <div class="my-footer_politics">
        <div class="my-footer_politics_cookie">Сайт использует cookie.</div>
        <div class="my-footer_politics_confidentiality">
          <a href="#">Политика конфиденциальности</a>
        </div>
        <div class="my-footer_rights">© 2021 Все права защищены.</div>
        <div class="my-footer_offer"><a href="#">Оферта</a></div>
        <div class="my-footer_agreement">
          <a href="#">Пользовательское соглашение</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "my-footer",
};
</script>

<style lang="scss" scoped>
.my-footer {
  padding: 2rem 0;
  background: rgba($color: $darkGrey, $alpha: 0.8);
  backdrop-filter: blur(2px);
  color: $grey;
  box-shadow: 0px -1px 8px black;
  font-size: 1.2rem;
  &_row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }
  &_title {
    color: $orange;
    font-size: 1.6rem;
    align-self: flex-start;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    img {
      width: 3.5rem;
      margin-left: 1rem;
    }
  }
  &_social {
    margin-right: 10rem;
    margin-bottom: 2rem;
    img {
      width: 4rem;
      margin: 0 1rem;
    }
  }
  &_phone {
    margin-bottom: 1rem;
    &_number {
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }
    &_time,
    &_weekends {
      color: rgba($color: $grey, $alpha: 0.3);
    }
    &_time {
      margin-bottom: 0.5rem;
    }
  }
  &_politics {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem 0;
    border-top: 1px solid rgba($color: $grey, $alpha: 0.3);
    font-weight: 400;
    font-size: 1rem;
    a {
      color: $grey;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 767px) {
    .my-footer_politics {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: 150%;
    }
  }
  @media (max-width: 640px) {
    .my-footer_social {
      margin-right: 0;
    }
  }
}
</style>
