@extends('layouts.app')

@section('title', 'Propiedades en venta')

@section('content')
    <main class="flex w-full">
        <aside class="min-w-[360px] bg-white p-6 mt-28 mr-2 rounded-3xl hidden min-[1154px]:w-propiedad1 min-[1154px]:block">
            @component('_components.filters.filtros', ['title' => 'Filtros'])
            @endcomponent
            @component('_components.filters.ubicacion')
            @endcomponent
            @component('_components.filters.scroll_filter', ['title' => 'Tipo de propiedad'])
            @endcomponent
            @component('_components.filters.amount_option', ['title' => 'Ambientes'])
                
            @endcomponent
            @component('_components.filters.scope')
                
            @endcomponent

        </aside>
        <div class="flex flex-col w-full mt-28 p-6">
            <div class="mx-2">
                <h2 class="font-bold text-xl">
                    0 Propiedades de 0 ambientes en venta
                </h2>
            </div>
            <div class="flex flex-wrap w-full">

            </div>
        </div>
    </main>

    <script src="{{ asset('js/updateValue.js')}}"></script>
@endsection
