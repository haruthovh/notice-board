<?php

namespace App\Http\Requests\Api\Stories;

use Illuminate\Foundation\Http\FormRequest;

class FetchRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'lastApprovedAt' => [
                'nullable',
                'date_format:Y-m-d H:i:s',
            ]
        ];
    }
}
