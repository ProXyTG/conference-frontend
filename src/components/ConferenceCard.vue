<template>
  <ion-card>
    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
    <ion-card-header>
      <ion-card-title>{{ conference.name }}</ion-card-title>
      <ion-card-subtitle>{{ conference.date }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      {{ conference.description }}
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
//Interfaces & Enums
import { ConferenceInterface } from '@/types/conference/interface'

export default defineComponent({
  name: 'ConferenceCard',
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
  },
  props: {
    conference: {
      type: Object as PropType<ConferenceInterface>,
      required: true
    }
  },
})
</script>

<style lang="scss">

</style>
