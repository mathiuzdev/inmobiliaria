<header class="flex w-full">
    <nav class='flex w-full h-auto bg-custom_orange justify-between items-center fixed shadow-xl z-40'>
        <button class="m-2">
            <img src="{{ asset('assets/img/logo.png') }}" width='200' height='30' alt="">
        </button>
        <button class="m-2 md:hidden">
            <img src="{{ asset('assets/img/menu_icon.svg') }}" width='30' height='30' alt="">
        </button>
        <ul class="hidden md:flex h-full items-center text-center">
            <li class="w-auto font-sans p-2 mx-2 font-extrabold text-black"><a href="{{ route('index') }}">INICIO</a></li>
            <li class="w-auto font-sans p-2 mx-2 font-extrabold text-black"><a href="{{ route('comprar.index') }}">COMPRAR</a></li>
            <li class="w-auto font-sans p-2 mx-2 font-extrabold text-black"><a href="#">ALQUILAR</a></li>
            <li class="w-auto font-sans p-2 mx-2 font-extrabold text-black"><a href="#">TASÁ AHORA</a></li>
            <li class="w-auto font-sans p-2 mx-2 font-extrabold text-black"><a href="#">CONTACTO</a></li>
        </ul>
    </nav>
</header>
