<template>
  <div class="page _1" v-if="!isClose">
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
          <i class="fa-regular fa-calendar"></i>
          <span> {{ startTime }} - {{ endTime }}, {{ date }} </span>
        </li>
        <!-- <li>
          <i class="fa-solid fa-earth-asia"></i>

          <span> Moscow time </span>
        </li> -->
      </ul>
    </div>
    <div class="page-body _1">
      <div class="page-body-form">
        <h2>Введите дополнительные данные</h2>
        <a-row :gutter="[0, 16]">
          <!-- <a-col span="24">
            <a-form-item label="Name">
              <a-input> </a-input>
            </a-form-item>
          </a-col> -->
          <!-- <a-col span="24">
            <a-form-item label="Email">
              <a-input> </a-input>
            </a-form-item>
          </a-col>
          <a-col span="24">
            <a-button type="primary" class="blue">Add guests</a-button>
          </a-col>
          <a-col span="24">
            <a-form-item label="Phone">
              <a-input> </a-input>
            </a-form-item>
          </a-col> -->
          <a-col span="24">
            <a-form-item label="Комментарий">
              <a-textarea v-model="form.comment"> </a-textarea>
            </a-form-item>
          </a-col>
          <a-col span="24">
            <a-button type="primary" class="blue" @click="onSubmit"
              >Отправить</a-button
            >
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
  <div v-else class="error-message">Дата успешно перенесена</div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "IndexPage",
  data() {
    return {
      form: {
        comment: "",
      },
      endTime: null,
      startTime: null,
      date: null,
      isClose: false,
    };
  },
  mounted() {
    this.startTime = this.$route.query.time;
    this.date = this.$moment(this.$route.query.date, "DD-MM-YYYY").format(
      "dddd MMM Do YYYY"
    );
    const date = this.$route.query.date;
    const time = this.$route.query.time;
    const dateTime = date + " " + time;
    const endDateTime =
      new Date(this.$moment(dateTime, "DD-MM-YYYY HH:mm").format()).getTime() +
      1800000;
    this.endTime = this.$moment(endDateTime).format("HH:mm");
  },
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
    handleChange(e) {
      console.log(e);
    },
    async onSubmit() {
      try {
        console.log(this.$route.query.date);
        const date = this.$moment(
          this.$route.query.date + " " + this.$route.query.time,
          "DD-MM-YYYY HH-mm"
        ).format("DD-MM-YYYY HH:mm");
        const form = {
          targetDate: date,
          ...this.form,
        };
        const { data } = await this.$axios.post(`/${this.client}/request`, {
          code: "submit",
          params: {
            ...form,
          },
        });
        this.isClose = true;
      } catch (error) {
        const {
          data: { message },
        } = error.response;
        this.errorHandler(message);
      }
    },
  },
  computed: {
    ...mapGetters("home", ["getClient", "getVariables"]),
    ...mapState(["client"]),
    getTime() {},
  },
};
</script>
