<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Conferences List</ion-title>
        </ion-toolbar>
      </ion-header>
      <ConferenceCard
        v-for="(item, i) in conferencesList" :key="i"
        :conference="item"
      />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
//Interfaces & Enums
import { ConferenceInterface } from '@/types/conference/interface'
//Endpoints
import { getConferences } from '@/api/conferenceApi'
//Components
import ConferenceCard from '@/components/ConferenceCard.vue'

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ConferenceCard,
  },
  data() {
    return {
      conferencesList: [] as Array<ConferenceInterface>
    }
  },
  async created() {
    await this.fetchConferences()
  },
  methods: {
    async fetchConferences() {
      const data = await (await getConferences()).data
      this.conferencesList = data as Array<ConferenceInterface>
    }
  }
})
</script>

