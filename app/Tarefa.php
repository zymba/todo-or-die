<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tarefa extends Model
{
    protected $fillable = ['projeto_id', 'nome', 'concluida'];

    public function projeto() {
    	return $this->belongsTo('App\Projeto');
    }
}
