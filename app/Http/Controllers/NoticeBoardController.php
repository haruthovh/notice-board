<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Support\Facades\Session;

class NoticeBoardController extends Controller
{
    public function listStories()
    {
        $data['message'] = Session::get('message');
        $data['stories'] = Story::forNoticeBoard()->get();
        return view('pages.notice-board.list', $data);
    }

    public function approve($link)
    {
        $story = Story::where('approval_link', $link)->first();
        if (!$story) abort(404);
        $story->approve();
        return redirect()->route('notice_board.list')->with('message', 'Story has been approved.');
    }
}
