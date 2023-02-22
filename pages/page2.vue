<template>
  <div class="page _2">
    <div class="page-header _2">
      <h1 class="text-cap">{{ weekDay }}</h1>
      <h2>{{ date }}</h2>
      <!-- <div class="gmt-time">
        <i class="fa-solid fa-earth-asia"></i>
        <a-form-item label="GMT">
          <a-select @change="handleChange">
            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
              Moscow time
            </a-select-option>
          </a-select>
        </a-form-item>
      </div> -->
    </div>
    <div class="page-body 2">
      <div class="page-body-time">
        <div class="page-body-time-header">
          <h2>Выберите время</h2>
          <span>Продолжительность: 30 мин</span>
        </div>
        <div class="page-body-time-body">
          <ul>
            <li v-for="(item, index) in times" :key="index">
              <span @click="onClickTime(index)" v-if="!item.isActive">
                {{ item.time }}
              </span>
              <a-row :gutter="[12, 0]" v-else>
                <a-col span="12">
                  <a-button
                    type="primary"
                    class="grey"
                    @click="item.isActive = !item.isActive"
                  >
                    {{ item.time }}
                  </a-button>
                </a-col>
                <a-col span="12">
                  <a-button
                    type="primary"
                    class="blue"
                    @click="clickTime(item)"
                  >
                    Подтвердить
                  </a-button>
                </a-col>
              </a-row>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      times: [],
      weekDay: null,
      date: null,
    };
  },
  mounted() {
    const selectDate = new Date(
      this.$moment(this.$route.query.date, "DD-MM-YYYY")._d
    ).getDate();

    const dates = this.getVariables.slots.filter((e) => {
      return new Date(e).getDate() == selectDate;
    });

    dates.forEach((i) => {
      this.times.push({
        isActive: false,
        time: this.$moment(i).utcOffset("+0300").format("HH:mm"),
      });
    });
    this.weekDay = this.$moment(this.$route.query.date, "DD-MM-YYYY").format(
      "dddd"
    );
    this.date = this.$moment(this.$route.query.date, "DD-MM-YYYY").format(
      "Do MMM YYYY"
    );
  },
  methods: {
    onClickTime(index) {
      this.times.forEach((el) => {
        el.isActive = false;
      });
      this.times[index].isActive = true;
    },
    handleChange(e) {
      console.log(e);
    },
    clickTime(item) {
      const { date } = this.$route.query;
      console.log(date);
      this.$router.push({ name: "page3", query: { date, time: item.time } });
    },
  },
  computed: {
    ...mapGetters("home", ["getClient", "getVariables"]),
  },
};
</script>

<style>
.text-cap {
  text-transform: capitalize;
}
</style>
