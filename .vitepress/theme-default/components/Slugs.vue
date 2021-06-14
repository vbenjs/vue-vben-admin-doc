<template>
  <!-- <aside to="body"> -->
  <ul class="slugs">
    <li v-for="{ level, link, title } of slugs" :class="`slug-item level-${level}`" :key="link">
      <a :href="link" class="link">
        {{ title }}
      </a>
    </li>
  </ul>
  <!-- </aside> -->
</template>

<script lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vitepress';

  export default {
    setup() {
      const route = useRoute();
      const slugs = computed(() => {
        // only display two level
        const headers = (route.data.headers ?? []).filter((i) => i.level > 1);
        let minLevel = 10;
        for (const { level } of headers) {
          minLevel > level && (minLevel = level);
        }

        return headers
          .filter((h) => h.level < minLevel + 2)
          .map((h) => ({
            ...h,
            link: `#${h.slug}`,
            level: h.level === minLevel ? 1 : 2,
          }));
      });

      return {
        slugs,
      };
    },
  };
</script>

<style scoped>
  .slug-item {
    list-style: none;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 4px 0 4px 16px;
    margin: 0;
    border-left: 2px solid #ebedf1;
  }

  .level-2 {
    font-size: 13px;
    padding-left: 28px;
  }

  .link {
    color: var(--text-color);
  }

  .slugs {
    transform: translateX(100%);
    transition: transform 0.25s ease;
  }

  @media (min-width: 900px) {
    .slugs {
      transform: translateX(0);
    }
  }
</style>
