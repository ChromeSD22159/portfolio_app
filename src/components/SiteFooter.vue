<template>
  <footer
    class="p-10 flex flex-col sm:flex-row sm:justify-between items-center"
  >
    <ul class="flex">
      <li
        v-for="contact in contacts"
        v-bind:key="contact.name"
        class="py-10 sm:py-0 px-2"
      >
        <a :href="contact.url" target="_blank" class="text-xl sm:text-sm">
          {{ contact.name }}.
        </a>
      </li>
    </ul>
    <p class="text-xs sm:text-sm">&copy; copyright 2021 | Frederik Kohler</p>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      contacts: [
        {
          name: 'xing',
          url: 'https://www.xing.com/profile/Frederik_Kohler2/cv',
        },
        { name: 'Git', url: 'https://github.com/ChromeSD22159/my-portfolio' },
        { name: 'tel', url: 'tel:+4915147141009' },
        { name: 'mail', url: 'mailto:info@frederikkohler.de' },
      ],
    }
  },
}
</script>

<style scoped>
a,
p {
  font-family: 'Maven Pro', sans-serif;
  text-transform: uppercase;
}
</style>
