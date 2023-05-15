<template>
  <div class="h-screen flex items-center justify-center">
		<spinner />
	</div>
</template>

<script setup>
const { getSession } = useAuth()

onMounted(() => {
	// Load all user data here
	getSession()
		.then((session) => {
			if (!session?.user?.email) {
				return useRouter().replace({ path: '/signin' })
			} else {
				return useRouter().replace({ path: '/home' })
			}
		})
		.catch(error => {
			// TODO: show error message on the loading screen and handle the error
			console.error(error)
		})
})
</script>
