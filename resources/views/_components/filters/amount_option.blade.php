@props(['title'])

@php
    $amounts = ["1", "2", "3", "4", "5", "6"];
@endphp

<div class="flex flex-col mt-3">
    <div class="flex justify-between items-center mt-4 border-b-2 border-gray-300 pb-1">
        <h2 class="font-bold text-lg ml-2">{{ $title }}</h2>
        <button type="button" class="bg-gray-200 p-2 rounded-2xl text-sm opacity-40" disabled>
            <span>x</span> Limpiar
        </button>
    </div>
    <div class="flex mt-2">
        @foreach ($amounts as $amount)
            <button
                name="{{ $title }}"
                class="bg-gray-200 ml-2 mr-1 w-10 h-10 aspect-square rounded-lg hover:bg-gray-300"
            >
                {{ $amount === '6' ? '+6' : $amount }}
            </button>
        @endforeach
    </div>
</div>