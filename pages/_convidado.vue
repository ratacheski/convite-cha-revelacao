<template>
  <div class="container text-center mx-auto">
    <div class="mt-4 bg-black rounded-2xl shadow-2xl">
      <div class="grid grid-cols-12 h-auto py-4 items-center">
        <img
          class="col-span-12 lg:col-span-8 lg:col-start-3"
          src="/convite-cha-revelacao/logo.png"
          alt="Miguel ou Alice"
        />
        <span class="col-span-12 text-pink-100"> Olá, {{ convidado }}! </span>
        <span class="col-span-10 col-start-2 text-pink-100">
          Baby Ratacheski vem aí!
        </span>
        <span class="col-span-10 mt-3 col-start-2 text-pink-100">
          Para celebrar este dia, contamos com sua presença no nosso chá
          revelação.
        </span>
        <span class="col-span-10 col-start-2 text-pink-100">
          Será Alice ou Miguel?
        </span>
        <span class="col-span-10 col-start-2 text-pink-100">
          Para que possamos lhe receber com as pompas que merece, pedimos que
          confirme sua presença até o dia 26/11 no botão de confirmação abaixo.
        </span>
        <img
          class="col-span-12 mt-3 lg:col-span-4 lg:col-start-5"
          src="/convite-cha-revelacao/data.png"
          alt="Data do chá"
        />
        <span class="col-span-10 col-start-2 text-pink-100">
          Recadinho importante: Com muito carinho, disponibilizaremos um link
          para acompanhar a revelação, caso infelizmente você esteja com algum
          sintoma gripal, não tiver se vacinado, ou algum outro problema que lhe
          impossibilite de estar com a gente fisicamente, poderá acompanhar
          online a revelação do sexo do nosso bebê.
        </span>

        <span class="col-span-10 col-start-2 text-pink-100 mt-3">
          Com carinho, Natalia e Rafael
        </span>
      </div>
      <div class="flex py-4 justify-center gap-4">
        <div class="flex flex-col items-center">
          <a
            href="https://api.whatsapp.com/send?phone=5534999251971"
            target="_blank"
          >
            <img class="links" src="/convite-cha-revelacao/confirmacao.png" alt="Confirmação" />
          </a>
          <span class="text-purple-200">Confirme Sua Presença</span>
        </div>
        <div class="flex flex-col items-center">
          <a href="https://meet.google.com/anw-swie-hmy" target="_blank">
            <img class="links" src="/convite-cha-revelacao/live.png" alt="Link da live" />
          </a>
          <span class="text-pink-100">05/12 - 12H</span>
        </div>
        <div class="flex flex-col items-center">
          <a href="https://goo.gl/maps/E6g8WNstKo1SU9fW6" target="_blank">
            <img class="links" src="/convite-cha-revelacao/localizacao.png" alt="Localização" />
          </a>
          <span class="text-green-100">R. Alferes Euzébio 266</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params, methods }) {
    const sentence = params.convidado.toLowerCase().split('_')
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
    }
    return { convidado: sentence.join(' ') }
  },
}
</script>

<style>
.links {
  height: 100px;
  margin: 0px 8px;
}
</style>
