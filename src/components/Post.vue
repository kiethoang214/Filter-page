<template>
    <v-card outlined class="py-2 px-4 card-container">
        <v-row no-gutters>
            <v-col cols="3">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                ></v-img>
            </v-col>
            <v-col class="mx-2">
                <v-card-title class="text-uppercase card-title">
                    <h2>{{post.title}}</h2>
                </v-card-title>
                <v-card-subtitle >
                    <v-row>
                        <v-col>
                            <v-row no-gutters>
                                <h2 class="font-weight-black post-price">{{price}} triệu/tháng</h2>
                            </v-row>
                            <v-row no-gutters class="py-2">
                                <v-col cols="3">
                                    <h3 class="font-weight-regular">Diện tích: <span class="font-weight-medium">{{post.area}}<span> m<sup>2</sup></span></span> </h3>
                                </v-col>
                                <v-col>
                                    <h3 class="font-weight-regular">Khu vực: <span class="post-district">{{district}}</span></h3>
                                </v-col>
                            </v-row>
                            <v-row no-gutters>
                                <h3 class="font-weight-regular">{{post.content}}...</h3>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-subtitle>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import { get } from 'vuex-pathify';
export default {
    name: 'Post',
    props: {
        post: Object,
    },
    computed: {
        ...get(['districtListShow', 'districtList']),
        price() {
            return this.post.price / 1000000;
        }, 

        district(){
            return this.districtList.filter(district => district.code === this.post.district)[0].path_with_type;
        }
    }
}
</script>
<style scoped>
.card-container {
    border: 1px solid red;
}
.card-title {
    color: red;
}
.post-price {
    color: green;
}
.post-content {
    word-break: normal !important;
}
.post-district {
    color: blue;
}
</style>