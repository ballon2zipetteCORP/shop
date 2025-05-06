<template>
  <div class="wrapper">
    <div class="images">
      <img :alt="item.images[currentImageIndex]" :src="item.images[currentImageIndex]" />
      <ul>
        <li v-for="(image, index) in item.images.filter((_, i) => i !== currentImageIndex)" :key="image+index">
          <img :alt="index+image" :src="image" />
        </li>
      </ul>
    </div>

    <div class="content">
      <h1>{{ item.designation }}</h1>
      <p>{{ item.description }}</p>

      <h2>{{ globalUtils.formatPrice(item.price) }} TTC</h2>

      <div class="sizes">
        <h3>Tailles disponibles</h3>
        <ul>
          <li v-for="size in item.sizes" :key="size">
            {{size}}
          </li>
        </ul>
      </div>

      <div class="colors">
        <h3>Couleurs disponibles</h3>
        <ul>
          <li :class="colour" v-for="colour in item.colours" :key="colour" />
        </ul>
      </div>

      <div class="add-to-cart">
        <button class="primary">Ajouter au panier <mdicon name="shopping-outline" /></button>
      </div>

      <div class="descriptions">
        <div>
          <h4>Politique de retour <mdicon name="chevron-down" /></h4>
          <p>
            Vous avez 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation, conformément aux articles L.221-18 à L.221-28 du Code de la consommation. <br />
            Pour annuler votre achat, il vous suffit de nous notifier par e‑mail ou de venir nous voir sur place. <br />
            Une fois le(s) article(s) reçu(s), nous procéderons au remboursement sous 14 jours, via le même moyen de paiement que celui utilisé lors de votre commande.
          </p>
        </div>
        <div>
          <h4>Matériaux & Conseils <mdicon name="chevron-down" /></h4>
          <ul>
            <li v-for="line in item.materialAndAdvices" :key="line">{{ line }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'
import globalUtils from '../../helpers/global.utils'

const item = ref({
  designation: 'T-shirt "Boycott by B2Z"',
  description: 'Un t-shirt 100% coton artisanal proposé par toute l\'équipe ballon2ipztte. Ce t-shirt est livré avec 2 stickers EXCLUSIF uniquement obtenable via la boutique en ligne.',
  price: 10.99,
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  colours: ['black', 'white'],
  materialAndAdvices: [
    'Coton 100%',
    'Conseil de lavage: 30° à la machine à laver'
  ],
  images: [
    '/test.png',
    '/test.png',
    '/test.png',
    '/test.png',
    '/test.png'
  ]
})
const currentImageIndex = ref(0);

onMounted(() => {
  globalUtils.setPageTitle(item.value.designation);
})
</script>

<style scoped>

</style>