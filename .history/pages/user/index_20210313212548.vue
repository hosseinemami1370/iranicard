<template>
  
</template>

<script>

export default {
layout: "header",
middleware: ['check-auth', 'auth'],
}
asyncData(context) {
    return context.app.$axios
      .$get(
        process.env.baseUrl + "/posts/" +
          context.params.postId +
          ".json"
      )
      .then(data => {
        return {
          loadedPost: { ...data, id: context.params.postId }
        };
      })
      .catch(e => context.error());
  },
</script>

<style>

</style>