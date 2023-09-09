<template>
  <ion-page class="homePageWrapper">
    <ion-content :fullscreen="true">
      <div class="homePageContainer">
        <ConferenceCard
          v-for="(item, i) in conferencesList" :key="i"
          :conference="item"
          @click="router.push(`/conference/details/${item._id}`)"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { IonPage, IonContent, useIonRouter } from '@ionic/vue';
  //Interfaces & Enums
  import { ConferenceInterface } from '@/types/conference/interface'
  //Endpoints
  import { getConferences } from '@/api/conferenceApi'
  //Components
  import ConferenceCard from '@/components/ConferenceCard.vue'
  
  export default defineComponent({
    name: 'HomePage',
    components: {
      IonPage,
      IonContent,
      ConferenceCard,
    },
    data() {
      return {
        conferencesList: [] as Array<ConferenceInterface>
      }
    },
    setup() {
      const router = useIonRouter()

      return {
        router
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

<style lang="scss">
</style>
