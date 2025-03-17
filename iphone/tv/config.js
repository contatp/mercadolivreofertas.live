document.title = 'Mercado Livre Ofertas'

const config = {
  title: 'Apple iPhone 15 Pro 128 Gb Titânio Preto',
  buyUrl: 'https://pay.mercadofertas.org/q510ZOoyQOKZE9D',
  // buyUrl: 'https://checkout.pagarsuacobranca.online/checkout/?checkoutName=televisao',
  images: [
    'https://http2.mlstatic.com/D_NQ_NP_891263-MLA71783089058_092023-O.webp',
    'https://http2.mlstatic.com/D_NQ_NP_725477-MLA74676491984_022024-O.webp',
    'https://http2.mlstatic.com/D_NQ_NP_719197-MLA74808088009_022024-O.webp',
    'https://http2.mlstatic.com/D_NQ_NP_664325-MLA71783366348_092023-O.webp',
    'https://http2.mlstatic.com/D_NQ_NP_915721-MLA74805964619_022024-O.webp'
  ],
  originalPrice: 'R$ 6499,90',
  newPrice: 'R$ 0,00',
  discount: '100%',
  portion: '',
  banner: 'https://havaiahas.myshopify.com/cdn/shop/files/Captura_de_tela_2024-06-20_204407_700x.png?v=1718927078',
  anotherProduct: 'https://promoeofertasml.online/arcond'
}

function redirect(url) {
  window.open(url)
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.attachment-full.size-full.wp-image-573').setAttribute('srcset', config.banner)
  document.querySelector('.discount').textContent = config.discount
  document.querySelector('.portion').textContent = config.portion
  document.querySelector('del').textContent = config.originalPrice
  document.querySelector('.realPrice').textContent = config.newPrice
  document.querySelector('.perfume').setAttribute('onclick', `redirect('${config.anotherProduct}')`)


  document.querySelectorAll('.elementor-button.elementor-button-link.elementor-size-sm').forEach((el) => el.href = config.buyUrl)

  document.querySelectorAll('.productName').forEach(el => el.innerHTML = config.title)

  const SwiperItems = document.querySelector('.swiper-wrapper').innerHTML = config.images.map((image, index) => {
    return `
    <div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${config.images.length}">
      <figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="${image}" alt="6a30ab766311bfba4edfb0d94d0c2575.webp" /></figure>
    </div>
    `
  }).join('')

  let items = document.querySelectorAll('.swiper-slide-inner')
  config.images.forEach((image, index) => {
    if (!SwiperItems[index]) return
    SwiperItems[index].querySelector('img').src = image
  })
  // document.querySelector('.elementor-image-carousel.swiper-wrapper').innerHTML = config.images.map((image, index) => {
  //   return `
  //     <div class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" role="group" aria-roledescription="slide" aria-label="${index + 1} / ${config.images.length}" data-swiper-slide-index="${index + 1}" style="width: 373px;" aria-hidden="true" inert="">
  //     <figure class="swiper-slide-inner">
  //       <img decoding="async" class="swiper-slide-image" src="${image}" alt="4fe9b96b673c46b18b24af55b355cd9f.webp">
  //     </figure>
  //     </div>
  //   `
  // }).join(' ') 
})
