<template>
  <div class="page _1">
    <div class="page-header _1">
      <span>{{ getClient && getClient.name }}</span>
      <h1>{{ getVariables && getVariables.title }}</h1>
      <ul>
        <li>
          <i class="fa-regular fa-clock"></i>
          <span>{{ getVariables && getVariables.duration }} min</span>
        </li>
        <li>
          <!-- <i class="fa-solid fa-video"></i> -->
          <span> {{ getVariables && getVariables.description }} </span>
        </li>
        <li>
          <!-- <span>
            {{ getVariables && getVariables.messageText }}
          </span> -->
          <!-- <ul>
            <li>
              <span
                >Установить готовое решение на
                <small>аккаунт клиента</small></span
              >
            </li>
          </ul> -->
        </li>
      </ul>
      <!-- <nuxt-link to="/"> Show more </nuxt-link> -->
    </div>
    <div class="page-body_1">
      <div class="page-body-calendar">
        <!-- <a-calendar :fullscreen="false" :locale="ru" @panelChange="onPanelChange" /> -->
        <client-only>
          <vc-date-picker
            v-model="selectDate"
            locale="ru"
            :attributes="attributes"
            :available-dates="availableDates"
            is-expanded
          ></vc-date-picker>
        </client-only>
      </div>
      <!-- <div class="gmt-time">
        <i class="fa-solid fa-earth-asia"></i>
        <a-form-item label="GMT">
          <a-select style="width: 75px" @change="handleChange">
            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </div> -->
    </div>
  </div>
</template>

<script>
import { en, ru } from "~/utils/calendarLocale.js";
import { mapGetters, mapState } from "vuex";
export default {
  name: "IndexPage",
  data() {
    return {
      en,
      ru,
      selectDate: null,
      attributes: [],
      availableDates: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.getVariables.slots.forEach((element, i) => {
        // this.attributes.push({
        //   key: i,
        //   highlight: true,
        //   dates: new Date(element),
        // });
        this.availableDates.push({
          start: new Date(element),
          end: new Date(element),
        });
        console.log(this.availableDates);
      });
    }, 300);
  },
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
    handleChange(e) {
      console.log(e);
    },
  },
  computed: {
    ...mapGetters("home", ["getClient", "getVariables"]),
    ...mapState(["client"]),
  },
  watch: {
    selectDate(val) {
      const date = this.$moment(val).format("DD-MM-YYYY");
      this.$router.push({ name: "page2", query: { date } });
    },
  },
};
</script>
<style>
.gmt-select {
  width: 75px;
}
</style>
