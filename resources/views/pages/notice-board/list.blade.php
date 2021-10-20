<x-guest-layout>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                @if($message)
                    <div class="text-green-500 text-center font-bold mb-2">{{ $message }}</div>
                @endif
                <div id="story-container"></div>
            </div>
        </div>
    </div>

    <x-slot name="scripts">
        <script src="{{ mix('js/notice-board.js') }}"></script>
        <script>
            new NoticeBoard({!! $stories->toJson() !!}, $('#story-container'));
        </script>
    </x-slot>
</x-guest-layout>
