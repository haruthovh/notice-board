<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Harut',
            'email' => 'harut@task.com',
            'password' => Hash::make('qwertyui'),
            'email_verified_at' => (string)now(),
        ]);
    }
}
