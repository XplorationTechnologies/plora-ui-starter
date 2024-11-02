export default defineNuxtPlugin(() => {
  const $service = {};
  return {
    provide: {
      service: $service,
    },
  };
});
