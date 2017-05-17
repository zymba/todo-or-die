<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Projeto;

class ProjetoController extends Controller
{
    public function index() {
    	$projetos = Projeto::paginate();
    	return response()->json($projetos);
    }

    public function criar(Request $request) {
    	$projeto = Projeto::create($request->all());
    	return response()->json($projeto);
    }

    public function editar(Request $request, Projeto $projeto) {
    	$projeto->update($request->all());
    	return response()->json($projeto);
    }

    public function excluir(Projeto $projeto) {
    	$projeto->delete();
    	return response()->json($projeto);
    }

    public function ver(Projeto $projeto) {
    	return response()->json($projeto);
    }
}
