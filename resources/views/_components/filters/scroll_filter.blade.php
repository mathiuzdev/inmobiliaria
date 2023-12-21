<div class="flex flex-col mt-3">
    <div class="flex justify-between items-center mt-4 border-b-2 border-gray-300 pb-1">
      <h2 class="font-bold text-lg ml-2">{{ $title }}</h2>
      <button
        type="button"
        class="bg-gray-200 p-2 rounded-2xl text-sm opacity-40"
        disabled
      >
        <span>x</span> Limpiar
      </button>
    </div>
    <div class="flex flex-col h-40 mt-2 overflow-auto">
      @component('_components.filters.input_select', ['name' => 'Departamento'])

      @endcomponent
      @component('_components.filters.input_select', ['name' => 'Departamento'])

      @endcomponent
      @component('_components.filters.input_select', ['name' => 'Departamento'])

      @endcomponent
      @component('_components.filters.input_select', ['name' => 'Departamento'])

      @endcomponent
      @component('_components.filters.input_select', ['name' => 'Departamento'])

      @endcomponent

    </div>
  