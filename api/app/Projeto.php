<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Projeto extends Model
{
    protected $fillable = ['nome'];

    public function tarefas() {
    	return $this->hasMany('App\Tarefa');
    }
}
