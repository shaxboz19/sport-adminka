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
                    <i class="fa-regular fa-calendar"></i>
                    <span>
                        13:30 - 14:00, Tuesday, May 24, 2022
                    </span>
                </li>
                <li>
                    <i class="fa-solid fa-earth-asia"></i>

                    <span>
                        Moscow time
                    </span>
                </li>

            </ul>

        </div>
        <div class="page-body _1">
            <div class="page-body-form">
                <h2>Enter Details</h2>
                <a-row :gutter="[0, 16]">
                    <a-col span="24">
                        <a-form-item label="Name"> 
                            <a-input >

                            </a-input>
                        </a-form-item>
                    </a-col>
                    <a-col span="24">
                        <a-form-item label="Email"> 
                            <a-input >

                            </a-input>
                        </a-form-item>
                    </a-col>
                    <a-col span="24">
                        <a-button type="primary" class="blue">Add uests</a-button>
                    </a-col>
                    <a-col span="24">
                        <a-form-item label="Phone"> 
                            <a-input >

                            </a-input>
                        </a-form-item>
                    </a-col>
                    <a-col span="24">
                        <a-form-item label="Please share anything that will help prepare for our meeting."> 
                            <a-textarea >

                            </a-textarea>
                        </a-form-item>
                    </a-col>
                </a-row>
            </div>


        </div>


    </div>

</template>

<script>
export default {
    name: "IndexPage",

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
