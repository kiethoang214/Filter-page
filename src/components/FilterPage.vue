<template>
    <v-card color="orange lighten-2">
        <v-row no-gutters class="pa-2">
            <v-col cols="2" class="px-1">
                <v-row no-gutters>
                    <h3>Tỉnh thành</h3>
                </v-row>
                <v-row no-gutters>
                    <v-select
                        v-model="province"
                        :items="provinceList"
                        :menu-props="{ bottom: true, offsetY: true }"
                        dense
                        outlined
                        background-color='white'
                        placeholder="-- Tỉnh/Thành --"
                        hide-details
                        item-value="code"
                        item-text="name"
                        return-object
                    >
                        <template v-slot:prepend-item>
                            <v-list-item-title class="pa-2">-- Tỉnh/Thành --</v-list-item-title>
                        </template>
                        <template v-slot:item="{ item }">
                            <span>{{ item.name }}</span>
                        </template>
                    </v-select>
                </v-row>
            </v-col>
            <v-col cols="2" class="px-1">
                <v-row no-gutters>
                    <h3>Quận huyện</h3>
                </v-row>
                <v-row no-gutters>
                    <v-select
                        v-model="district"
                        :items="districtListShow"
                        :menu-props="{ bottom: true, offsetY: true }"
                        dense
                        outlined
                        placeholder="-- Quận/Huyện --"
                        background-color='white'
                        hide-details
                        item-value="code"
                        item-text="name"
                        return-object
                    >
                        <template v-slot:prepend-item>
                            <v-list-item-title class="pa-2">-- Quận/Huyện --</v-list-item-title>
                        </template>
                        <template v-slot:item="{ item }">
                            <span>{{ item.name }}</span>
                        </template>
                    </v-select>
                </v-row>
            </v-col>
            <v-col cols="2" class="px-1">
                <v-row no-gutters>
                    <h3>Khoảng giá</h3>
                </v-row>
                <v-row no-gutters>
                    <v-select
                        v-model="price"
                        :items="priceList"
                        :menu-props="{ bottom: true, offsetY: true }"
                        dense
                        outlined
                        background-color='white'
                        hide-details
                        placeholder="Chọn mức giá"
                        item-text="name"
                        return-object
                    >
                        <template v-slot:prepend-item>
                            <v-list-item-title class="pa-2">Chọn mức giá</v-list-item-title>
                        </template>
                        <template v-slot:item="{ item }">
                            <span>{{ item.name }}</span>
                        </template>
                    </v-select>
                </v-row>
            </v-col>
            <v-col cols="2" class="px-1">
                <v-row no-gutters>
                    <h3>Diện tích</h3>
                </v-row>
                <v-row no-gutters>
                    <v-select
                        v-model="area"
                        :items="areaList"
                        :menu-props="{ bottom: true, offsetY: true }"
                        dense
                        outlined
                        background-color='white'
                        hide-details
                        placeholder="Chọn mức giá"
                        item-text="name"
                        return-object
                    >
                        <template v-slot:prepend-item>
                            <v-list-item-title class="pa-2">Chọn mức giá</v-list-item-title>
                        </template>
                        <template v-slot:item="{ item }">
                            <span>{{ item.name }}</span>
                        </template>
                    </v-select>
                </v-row>
            </v-col>
            <v-col cols="1" class="px-1 d-flex flex-column-reverse">
                <v-btn class="mb-1" color="orange" dark @click="filterData">Lọc tin</v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import { sync, get, call } from 'vuex-pathify'
export default {
    name: 'FilterPage',
    computed: {
        ...sync({ 
            province: 'province',
            provinceList: 'provinceList',
            district: 'district',
            price: 'price',
            priceList: 'priceList',
            area: 'area',
            areaList: 'areaList',
        }),
        ...get(['districtListShow']),
    },

    watch: {
        districtListShow() {
            this.district = this.districtListShow[0];
        }
    },
    methods: {
        ...call(['loadData', 'filterData'])
    },
    mounted() {
        this.loadData();
    }
}
</script>