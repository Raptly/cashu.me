<template>
  <q-dialog
    v-model="showP2PKDialog"
    position="top"
    backdrop-filter="blur(2px) brightness(60%)"
  >
    <q-card v-if="showP2PKData.publicKey" class="q-px-lg q-pt-md q-pb-md qcard">
      <div class="text-center q-mb-md q-mt-none q-pt-none">
        <q-responsive :ratio="1" class="q-mx-md q-mt-none q-pt-none">
          <vue-qrcode
            :value="showP2PKData.publicKey"
            :options="{ width: 340 }"
            class="rounded-borders"
          >
          </vue-qrcode>
        </q-responsive>
        <div class="row justify-center">
          <q-card-section class="q-pa-sm">
            <div class="row justify-center">
              <q-item-label overline class="q-mb-sm q-pt-md text-white">
                P2PK Lock</q-item-label
              >
            </div>
            <div class="row justify-center q-py-md">
              <q-item-label style="font-size: 28px" class="text-weight-bold">
                <q-spinner-dots
                  v-if="runnerActive"
                  color="primary"
                  size="0.8em"
                  class="q-mr-md"
                />
                <q-icon
                  name="lock"
                  :color="showP2PKData.used ? 'red' : 'green'"
                  class="q-mr-sm"
                  size="sm"
                />
              </q-item-label>
            </div>
            <div v-if="showP2PKData.used" class="row justify-center q-pt-sm">
              <q-item-label
                caption
                class="text-weight-light text-white"
                style="font-size: 14px"
                >Warning: You have already used this lock before.</q-item-label
              >
            </div>
            <div v-else class="row justify-center q-pt-sm">
              <q-item-label
                caption
                class="text-weight-light text-white"
                style="font-size: 14px"
                >You can receive ecash locked to this key.</q-item-label
              >
            </div>
          </q-card-section>
        </div>
        <div class="row q-mt-lg">
          <q-btn
            class="q-mx-xs"
            size="md"
            flat
            @click="copyText(showP2PKData.publicKey)"
            >Copy</q-btn
          >
          <q-btn v-close-popup flat color="grey" class="q-ml-auto">Close</q-btn>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import VueQrcode from "@chenfengyuan/vue-qrcode";

import { useP2PKStore } from "src/stores/p2pk";

export default defineComponent({
  name: "P2PKDialog",
  mixins: [windowMixin],
  components: {
    VueQrcode,
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapState(useP2PKStore, ["p2pkKeys", "showP2PKData"]),
    ...mapWritableState(useP2PKStore, ["showP2PKDialog"]),
  },
  methods: {
    ...mapActions(useP2PKStore, ["generateKeypair", "showKeyDetails"]),
  },
});
</script>
