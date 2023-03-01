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
          <span> {{ startTime }} - {{ endTime }}, </span>
          <span class="text-cap"> {{ weekDay }} </span>
          <span>{{ date }} </span>
        </li>
        <!-- <li>
          <i class="fa-solid fa-earth-asia"></i>

          <span> Moscow time </span>
        </li> -->
      </ul>
    </div>
    <div class="page-body _1" v-if="inputs">
      <div class="page-body-form">
        <h2>Введите дополнительные данные</h2>
        <a-row :gutter="[0, 16]">
          <a-col span="24" v-if="inputs.name">
            <a-form-item label="Имя">
              <a-input
                v-model="form.name"
                :class="{
                  error: $v.form.name.$dirty && !$v.form.name.required,
                }"
              ></a-input>
            </a-form-item>
            <div
              class="error"
              v-if="$v.form.name.$dirty && !$v.form.name.required"
            >
              Обязательное поле
            </div>
          </a-col>
          <a-col span="24" v-if="inputs.email">
            <a-form-item label="Email">
              <a-input
                v-model="form.email"
                :class="{
                  error: $v.form.email.$dirty && !$v.form.email.required,
                }"
              >
              </a-input>
            </a-form-item>
            <div
              class="error"
              v-if="$v.form.email.$dirty && !$v.form.email.required"
            >
              Обязательное поле
            </div>
          </a-col>
          <a-col span="24" v-if="inputs.phone">
            <a-form-item label="Телефон">
              <a-input
                v-model="form.phone"
                :class="{
                  error: $v.form.phone.$dirty && !$v.form.phone.required,
                }"
              >
              </a-input>
            </a-form-item>
            <div
              class="error"
              v-if="$v.form.phone.$dirty && !$v.form.phone.required"
            >
              Обязательное поле
            </div>
          </a-col>
          <a-col span="24" v-if="inputs.comment">
            <a-form-item label="Комментарий">
              <a-textarea
                v-model="form.comment"
                :class="{
                  error: $v.form.comment.$dirty && !$v.form.comment.required,
                }"
              >
              </a-textarea>
            </a-form-item>
            <div
              class="error"
              v-if="$v.form.comment.$dirty && !$v.form.comment.required"
            >
              Обязательное поле
            </div>
          </a-col>
          <a-col span="24">
            <a-button type="primary" class="blue" @click="onSubmit"
              >Подтвердить</a-button
            >
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
  <div v-else class="error-message">Выполнено</div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  name: "IndexPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        comment: "",
      },
      endTime: null,
      startTime: null,
      date: null,
      isClose: false,
      inputs: null,
      weekDay: null,
    };
  },
  validations() {
    const form = {};

    for (const key in this.form) {
      if (this.getVariables.input[key]) {
        form[key] = { required };
      }
    }
    return {
      form,
    };
  },
  mounted() {
    this.inputs = this.getVariables.input;
    this.startTime = this.$route.query.time;
    this.date = this.$moment(this.$route.query.date, "DD-MM-YYYY").format("LL");
    this.weekDay = this.$moment(this.$route.query.date, "DD-MM-YYYY").format(
      "dddd"
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
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("2222");
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

<style>
.error {
  color: red;
  border-color: red;
}
.text-cap {
  text-transform: capitalize;
}
</style>