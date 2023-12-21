@component('_components.filters.filtros2', ['title' => 'Precio'])
    
@endcomponent
<div class="flex flex-col mt-2">
    <div>
        @component('_components.filters.input_radio', ['option1' => 'Pesos', 'option2' => 'Dolares', 'name' => 'precios'])
            
        @endcomponent

    </div>
</div>