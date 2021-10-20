<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Stories\FetchRequest;
use App\Models\Story;
use Illuminate\Http\Request;

class StoryController extends Controller
{
    public function fetchStories(FetchRequest $request)
    {
        $query = Story::forNoticeBoard();
        $lastApprovedAt = $request->input('lastApprovedAt');
        if ($lastApprovedAt) $query->where('approved_at', '>=', $lastApprovedAt);
        $stories = $query->get();
        return response()->json([
            'stories' => $stories,
        ]);
    }
}
