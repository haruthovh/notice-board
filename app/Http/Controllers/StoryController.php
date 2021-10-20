<?php

namespace App\Http\Controllers;

use App\Http\Requests\Story\CreateRequest;
use App\Models\Story;
use App\Models\User;
use App\Notifications\StoryCreatedNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class StoryController extends Controller
{
    public function listStories()
    {
        $data['message'] = Session::get('message');
        $data['stories'] = Story::orderBy('id', 'desc')->get();
        return view('pages.stories.list', $data);
    }

    public function showCreateForm()
    {
        return view('pages.stories.form');
    }

    public function createStory(CreateRequest $request)
    {
        $data = $request->validated();
        $data['approval_link'] = Str::random(32);
        $story = Story::create($data);

        /**
         * @var User $user
         */
        $user = Auth::user();
        $user->notify(new StoryCreatedNotification($story));

        return redirect()->route('stories.list')->with('message', 'Story has been created, please check your email to approve this story.');
    }
}
