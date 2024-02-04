const app = Vue.createApp({
	data() {
		return {
			detailsAreVisible: false,
			friends: [
				{
					id: "manuel",
					name: "Manuel Lorenz",
					phone: "0120 589 3789",
					email: "manuel@example.com",
				},
				{
					id: "julie",
					name: "Julie Lorenz",
					phone: "0120 539 3389",
					email: "julie@example.com",
				},
			],
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
});

app.mount("#app");