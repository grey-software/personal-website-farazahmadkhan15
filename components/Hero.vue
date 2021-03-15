<template>
<section class="text-gray-400 bg-grey-900 body-font h-screen">
  <div class="absolute w-full h-full bg-gray-900"  id="particles-js">
    
  </div>

<div class="flex-col text h-full">
  <NavBar/>
 <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover p-0 object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    <div class="text-center lg:w-2/3 w-full">
      <h1 class=" sm:text-4xl text-3xl mb-4 p-1 font-medium font-fans italic text-gray-400">Faraz Ahmad Khan</h1>
      <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>

    </div>
  </div>


</div>

 
</section>
</template>

<script>
export default {

 
}




</script>



<style lang="scss">
// SASS Variables.

$link: #9CA3AF;
$link-hover: #4B5563;


canvas {
  display: block;
  vertical-align: bottom;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;

}

.text {
	position: absolute;
	top: 50%;
	right: 50%;
	transform: translate(50%,-50%);
	// color: $text;
	max-width: 90%;
	// padding: 2em 3em;
	background: rgba(0, 0, 0, 0.4);
	text-shadow: 0px 0px 2px #131415;
	font-family: 'Open Sans', sans-serif;
}

h1 {
	font-size: 2.25em;
	font-weight: 700;
	letter-spacing: -1px;
}

a,
a:visited {
	color: $link;
	transition: 0.25s;
}

a:hover,
a:focus {
	color: $link-hover;
}
</style>



<style>

.iconify { width: 80px; height: 80px; padding:10px }

</style>
