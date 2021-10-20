<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">Stories</h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                @if($message)
                   <div class="text-green-500 text-center font-bold mb-2">{{ $message }}</div>
                @endif
                <a href="{{ route('stories.create') }}" class="font-bold py-2 px-4 rounded bg-blue-500 text-white">Create new story</a>
                @if($stories->count())
                        <div class="p-6 bg-white border-b border-gray-200">
                            <table class="table w-full text-left">
                                <thead>
                                <tr>
                                    <th class="p-2">ID</th>
                                    <th class="p-2">Title</th>
                                    <th class="p-2">Is Approved</th>
                                    <th class="p-2">Created At</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($stories as $story)
                                    <tr>
                                        <td class="p-2">{{ $story->id }}</td>
                                        <td class="p-2">{{ $story->title }}</td>
                                        <td class="p-2">{{ $story->approved_at ? 'Yes' : 'No' }}</td>
                                        <td class="p-2">{{ $story->created_at->format('d.m.Y H:i') }}</td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                @endif
            </div>
        </div>
    </div>
</x-app-layout>
