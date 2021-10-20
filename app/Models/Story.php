<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Story extends Model
{
    protected $fillable = ['title', 'description', 'approval_link'];

    public function approve()
    {
        $this->approval_link = null;
        $this->approved_at = now();
        $this->save();
    }

    public function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function scopeForNoticeBoard($query)
    {
        return $query->select('id', 'title', 'description', 'approved_at', 'created_at')->whereNull('approval_link')->orderBy('approved_at', 'asc');
    }
}
