<template>
    <div class="page _2">
        <div class="page-header _2">
            <h1>Tuesday</h1>
            <h2>May 24, 2022</h2>
            <div class="gmt-time">
                <i class="fa-solid fa-earth-asia"></i>
                <a-form-item label="GMT">
                    <a-select @change="handleChange">
                        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                           Moscow time
                        </a-select-option>
                    </a-select>
                </a-form-item>
            </div>

        </div>
        <div class="page-body _2">
            <div class="page-body-time">
                <div class="page-body-time-header">
                    <h2>Select a time</h2>
                    <span>Duration: 30 min</span>
                </div>
                <div class="page-body-time-body">
                    <ul>
                        <li v-for="(item, index) in times" :key="index">
                            <span @click="onClickTime(index)" v-if="!item.isActive">
                                {{ item.time }}
                            </span>
                            <a-row :gutter="[12, 0]" v-else>
                                <a-col span="12">
                                    <a-button type="primary" class="grey">
                                        {{ item.time }}
                                    </a-button>
                                </a-col>
                                <a-col span="12">
                                    <a-button type="primary" class="blue" @click="$router.push({
                                        path: '/page3'
                                    })">
                                        Confirm
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
export default {
    data() {
        return {
            times: [
                {
                    time: '12:00',
                    isActive: false
                },
                {
                    time: '12:00',
                    isActive: false
                },
                {
                    time: '12:00',
                    isActive: false
                },
                {
                    time: '12:00',
                    isActive: false
                },
                {
                    time: '12:00',
                    isActive: false
                }
            ]
        }
    },
    methods: {
        onClickTime(index) {
            this.times.forEach(el => {
                el.isActive = false
            })
            this.times[index].isActive = true
        },
        handleChange(e) {
            console.log(e)
        }
    }

}
</script>

<style>
</style>