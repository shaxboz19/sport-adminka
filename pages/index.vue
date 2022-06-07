<template>
  <div class="page _1">
    <div class="page-header _1">
      <span>Slobodskoj Oleg</span>
      <h1>Установка Решения из Каталога</h1>
      <ul>
        <li>
          <i class="fa-regular fa-clock"></i>
          <span>30 min</span>
        </li>
        <li>
          <i class="fa-solid fa-video"></i>
          <span>
            Web conferencing details provided upon
            confirmation.
          </span>
        </li>
        <li>
          <span>
            В рамках звонка в Zoom наш специалисть сможет ответить на все вопросы
          </span>
          <ul>
            <li>
              <span>Установить готовое решение на <small>аккаунт клиента</small></span>
            </li>
          </ul>

        </li>
      </ul>
      <nuxt-link to="/">
        Show more
      </nuxt-link>
    </div>
    <div class="page-body_1">
      <div class="page-body-calendar">
        <!-- <a-calendar :fullscreen="false" :locale="ru" @panelChange="onPanelChange" /> -->
        <vc-calendar v-model="selectDate" locale="ru" is-expanded></vc-calendar>
      </div>
      <div class="gmt-time">
        <i class="fa-solid fa-earth-asia"></i>
        <a-form-item label="GMT">
          <a-select   style="width: 75px"  @change="handleChange">
            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </div>
    </div>


  </div>

</template>

<script>
import {en, ru} from '~/utils/calendarLocale.js'
export default {
  name: "IndexPage",
  data() {
    return {
      en,
      ru,
      selectDate: null
    }
  },

  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
    handleChange(e) {
      console.log(e)
    }
  },

}


</script>
<style >
  .gmt-select{
    width: 75px;
  }
</style>