<template>
  <v-container>
    <div>
        <v-row>
            <v-col cols="auto">
                <div class="pa-1 ms-4">
                <h2>장바구니</h2>
                </div>
            </v-col>
        </v-row>
        <v-divider color="black" class="mb-0"></v-divider>
        <div class="grey lighten-3 mt-0 pt-0">
            <v-row>
                <v-col cols="auto" class="ms-3">
                    <v-checkbox label="전체 선택"></v-checkbox>
                </v-col>
                <v-col cols="auto">
                    <v-btn text @click="btnDeleteCartItem">
                        <v-icon>mdi-delete-outline</v-icon>
                        선택 삭제
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-3 pa-3" max-width="700" flat outlined>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="overline mb-4">상품정보 들어갈 곳</div>
                                <v-list-item-title class="headline mb-1">상품 제목</v-list-item-title>
                                <v-list-item-subtitle>어쩌구저쩌구</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-avatar tile size="150" color="grey">상품 사진</v-list-item-avatar>
                        </v-list-item>
                        <v-card-actions>
                            <v-btn text>구입</v-btn>
                            <v-btn text>삭제</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card class="mx-3 pa-3" max-width="500" flat outlined>
                        <v-card-text>
                            <div>결제 정보</div>
                            <p class="display-1 text--primary">
                                50,000원
                            </p>
                            <p>상품금액</p>
                            <div class="text--primary">
                                합계총액
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary">
                                구매하기
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
  </v-container>
  
</template>

<script>
export default {
    name: 'ShoppingCartPage',
}
</script>

<style scoped>

</style>