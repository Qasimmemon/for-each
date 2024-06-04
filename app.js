var cloth_1 = document.getElementById('cloth_1')



var arr = [
        {
        id:'Coth1',
        price:'109.99$',
        title:'This Shirt is Brand and Summer Colletion.',
        description:'Shirt made Summer Vacation and Cool',
        rating:'4.5',
        image:'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnQlMjBicmFuZHxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            id:'Coth2',
            price:'89.49$',
            title:'This Shirt is Brand and Summer and winter both Colletion.',
            description:'Shirt is Soft and this light weight.',
            rating:'4.0',
            image:'https://images.unsplash.com/photo-1503341733017-1901578f9f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0JTIwZGVzaWdufGVufDB8fDB8fHww',
            },
            {
                id:'Coth3',
                price:'115.19$',
                title:'This Shirt is Branded and Winter Colletion.',
                description:'Shirt is liht weight and body relaxed. ',
                rating:'5.0',
                image:'https://images.unsplash.com/photo-1585032767761-878270336a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0JTIwYnJhbmR8ZW58MHx8MHx8fDA%3D',
                },
]



for (var i = 0; i < arr.length; i++) {
    var div = `<section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">${arr[i].title}</h1>
        <p class="mb-8 leading-relaxed">${arr[i].description}</p>
        
        <p class="text-xl mt-2 text-gray-500 mb-2 w-full" style="margin-left: -250px;">${arr[i].price}</p>
        <br>
        <div class="flex lg:flex-row md:flex-col">
          <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
              <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
            </svg>
            <span class="ml-4 flex items-start flex-col leading-none">
              <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
              <span class="title-font font-medium">Google Play</span>
            </span>
          </button>
          <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
              <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
              <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
            </svg>
            <span class="ml-4 flex items-start flex-col leading-none">
              <span class="text-xs text-gray-600 mb-1">Download on the</span>
              <span class="title-font font-medium">App Store</span>
            </span>
          </button>
          
        </div>
        <br>
        <p class="text-xl mt-2 text-gray-500 mb-2 w-full" style="margin-left: -190px;">Average rating=" ${arr[i].rating}"</p>
      </div>
      
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img src="${arr[i].image}" />
        <!-- <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> -->
      </div>
    </div>
  </section>`;
  
    cloth_1.innerHTML += div;
  }






var Watch = document.getElementById('Watch')





var arr1 = [
    {
    id:'Watch1',
    price:'209.99$',
    description:'This Watch is Branded light feel on hand.',
    title:'Watch look is Nice.',
    rating:'4.5',
    image:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D',
    },
    {
        id:'Watch2',
        price:'189.49$',
        description:'This Watch is light Weight and Water proof.',
       title:'As compare to this watch is light.',
        rating:'4.0',
        image:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww',
        },
        {
            id:'Watch3',
            price:'145.19$',
            description:'This Watch is nice looking and light weight .',
            title:'This watch is light. ',
            rating:'5.0',
            image:'https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fHww',
            },
]



for (var i = 0; i < arr1.length; i++) {
var div1 = `<section class="text-gray-600 body-font">
<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">${arr1[i].title}</h1>
    <p class="mb-8 leading-relaxed">${arr1[i].description}</p>
    
    <p class="text-xl mt-2 text-gray-500 mb-2 w-full" style="margin-left: -250px;">${arr1[i].price}</p>
    <br>
    <div class="flex lg:flex-row md:flex-col">
      <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
          <span class="title-font font-medium">Google Play</span>
        </span>
      </button>
      <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="text-xs text-gray-600 mb-1">Download on the</span>
          <span class="title-font font-medium">App Store</span>
        </span>
      </button>
      
    </div>
    <br>
    <p class="text-xl mt-2 text-gray-500 mb-2 w-full" style="margin-left: -190px;">Average rating=" ${arr1[i].rating}"</p>
  </div>
  
  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
  <img src="${arr1[i].image}" />

  </div>
</div>
</section>`;

Watch.innerHTML += div1;
}





var glass = document.getElementById('glasses')
var arr2 = [
  {
  id:'glass1',
  price:'209.99$',
  description:'This Glasses is Branded light feel.',
  title:'Glasse look is Nice.',
  rating:'4.5',
  image:'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VuJTIwZ2xhc3NlfGVufDB8fDB8fHww',
  },
  {
      id:'glass2',
      price:'189.49$',
      description:'This Glasses is light Weight and not pain.',
     title:'As compare to this Glasses is light.',
      rating:'4.0',
      image:'https://images.unsplash.com/photo-1570993492880-e8b3bfd5e100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdsYXNzZXxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
          id:'glasses3',
          price:'145.19$',
          description:'This Glasses is nice looking and light weight .',
          title:'This Glasses is light weight. ',
          rating:'5.0',
          image:'https://images.unsplash.com/photo-1564867739458-f42235fab442?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdsYXNzZXxlbnwwfHwwfHx8MA%3D%3D',
          },
]



for (var i = 0; i < arr2.length; i++) {
var div2 = `<section class="text-gray-600 body-font">
<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">${arr2[i].title}</h1>
  <p class="mb-8 leading-relaxed">${arr2[i].description}</p>
  
  <p class="text-xl mt-2 text-gray-500 mb-2 w-full" style="margin-left: -259px;">${arr2[i].price}</p>
  <br>
  <div class="flex lg:flex-row md:flex-col">
    <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
      </svg>
      <span class="ml-4 flex items-start flex-col leading-none">
        <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
        <span class="title-font font-medium">Google Play</span>
      </span>
    </button>
    <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
        <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
        <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
      </svg>
      <span class="ml-4 flex items-start flex-col leading-none">
        <span class="text-xs text-gray-600 mb-1">Download on the</span>
        <span class="title-font font-medium">App Store</span>
      </span>
    </button>
    
  </div>
  <br>
  <p class="text-xl mt-2 text-gray-500 mb-2 w-full" style="margin-left: -190px;">Average rating=" ${arr2[i].rating}"</p>
</div>

<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
<img src="${arr2[i].image}" />

</div>
</div>
</section>`;

glass.innerHTML += div2;
}





var shoe = document.getElementById('shoes')
var arr3 = [
  {
  id:'glass1',
  price:'209.99$',
  description:'This Shoes is Branded light feel.',
  title:'Glasse look is Nice.',
  rating:'4.5',
  image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
  },
  {
      id:'glass2',
      price:'189.49$',
      description:'This Shoes is light Weight and not pain.',
     title:'As compare to this Shoes is light.',
      rating:'4.0',
      image:'https://plus.unsplash.com/premium_photo-1663100769321-9eb8fe5a8e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
      },
      {
          id:'Shoes3',
          price:'145.19$',
          description:'This Shoes is nice looking and light weight .',
          title:'This Shoes is light weight. ',
          rating:'5.0',
          image:'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D',
          },
]



for (var i = 0; i < arr3.length; i++) {
var div3 = `<section class="text-gray-600 body-font">
<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">${arr3[i].title}</h1>
  <p class="mb-8 leading-relaxed">${arr3[i].description}</p>
  
  <p class="text-xl mt-2 text-gray-500 mb-2 w-full" style="margin-left: -250px;">${arr3[i].price}</p>
  <br>
  <div class="flex lg:flex-row md:flex-col">
    <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
      </svg>
      <span class="ml-4 flex items-start flex-col leading-none">
        <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
        <span class="title-font font-medium">Google Play</span>
      </span>
    </button>
    <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
        <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
        <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
      </svg>
      <span class="ml-4 flex items-start flex-col leading-none">
        <span class="text-xs text-gray-600 mb-1">Download on the</span>
        <span class="title-font font-medium">App Store</span>
      </span>
    </button>
    
  </div>
  <br>
  <p class="text-xl mt-2 text-gray-500 mb-2 w-full" style="margin-left: -190px;">Average rating=" ${arr3[i].rating}"</p>
</div>

<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
<img src="${arr3[i].image}" id="img" />

</div>
</div>
</section>`;

shoe.innerHTML += div3;
}


// var img = document.getElementById('img')
// var img1 = document.getElementsById('img1')
// var img2 = document.getElementById('')
// img1.addEventListener('click', function () {
//   img = img1
// })

var img_main = document.getElementById('img_main');
var img_1 = document.getElementById("img_1");
var img_2 = document.getElementById("img_2");
var img_3 = document.getElementById("img_3");


// img_1.addEventListener('mouseover', function () {
//     img_main.src = this.src;
//     this.style.border = "2px solid blue"; 
//     img_2.style.border = "none"; 
//     img_3.style.border = "none"; 
// });

// img_2.addEventListener('mouseover', function () {
//     img_main.src = this.src;
//     this.style.border = "2px solid blue"; 
//     img_1.style.border = "none"; 
//     img_3.style.border = "none"; 
// });

// img_3.addEventListener('mouseover', function () {
//     img_main.src = this.src;
//     this.style.border = "2px solid blue"; 
//     img_1.style.border = "none"; 
//     img_2.style.border = "none"; 

// });
    img_1.addEventListener('click', function () {
      img_main.src = this.src;
    this.style.border = "2px solid blue";
    })