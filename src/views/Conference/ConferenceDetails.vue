<template>
  <ion-page class="conferenceDerailsWrapper">
		<ion-content :fullscreen="true">
			{{ conference }}
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonContent } from '@ionic/vue';
import { useRoute } from 'vue-router';
//Interfaces & Enums
import { ConferenceInterface } from '@/types/conference/interface';
//Endpoints
import { getConferenceById } from '@/api/conferenceApi'

export default defineComponent({
	name: 'ConferenceDetails',
	components: {
		IonPage,
		IonContent
	},
	data() {
		return {
			conference: {} as ConferenceInterface
		}
	},
	setup() {
		const route = useRoute()
		const conferenceId = route.params.id as string

		return {
			route,
			conferenceId
		}
	},
	created() {
		this.fetchConference()
	},
	methods: {
		async fetchConference() {
			const data = await (await getConferenceById(this.conferenceId)).data
			this.conference = data
		}
	}
})
</script>

<style lang="scss">

</style>
