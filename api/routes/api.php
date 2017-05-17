<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'UsuarioController@login');

Route::group(['middleware' => 'jwt.auth'], function () {
	Route::get('projetos', 'ProjetoController@index');
	Route::post('projetos', 'ProjetoController@criar');
	Route::put('projetos/{projeto}', 'ProjetoController@editar');
	Route::delete('projetos/{projeto}', 'ProjetoController@excluir');
	Route::get('projetos/{projeto}', 'ProjetoController@ver');

	Route::get('tarefas', 'TarefaController@index');
	Route::post('tarefas', 'TarefaController@criar');
	Route::put('tarefas/{tarefa}', 'TarefaController@editar');
	Route::delete('tarefas/{tarefa}', 'TarefaController@excluir');
	Route::get('tarefas/{tarefa}', 'TarefaController@ver');
});
