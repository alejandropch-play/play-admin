<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileRequest extends FormRequest
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
    
    public function rules()
    {
        return [
            'full_name' => 'required|max:50',
            'username' => 'required|max:50',
            'email' => ['required',Rule::unique('users')->ignore($this->id),'email'],
        ];
        
    }
}
