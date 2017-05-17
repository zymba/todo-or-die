<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Tarefa;

class TarefaController extends Controller
{
    public function index(Request $request) {
    	// $tarefas = Tarefa::with('projeto')->paginate();
    	// return response()->json($tarefas);

        $limit = $request->all()['limit'] ?? 20;
        $order = $request->all()['order'] ?? null;
   
        if ($order !== null) {
            $order = explode(',', $order);
        }
        
        $order[0] = $order[0] ?? 'id';
        $order[1] = $order[1] ?? 'asc';
        
        $where = $request->all()['where'] ?? [];
        $like = $request->all()['like'] ?? null;
        
        if ($like) {
            $like = explode(',', $like);
            $like[1] = '%' . $like[1] . '%';
        }
        
        $tarefas = Tarefa::orderBy($order[0], $order[1])
            ->where(function($query) use ($like) {
                if ($like) {
                    return $query->where($like[0], 'like', $like[1]);
                }
                    return $query;
                })
            ->where($where)
            ->with('projeto')
            ->paginate($limit);
        
        return response()->json($tarefas);
    }

    public function criar(Request $request) {
    	$tarefa = Tarefa::create($request->all());
    	return response()->json($tarefa);
    }

    public function editar(Request $request, Tarefa $tarefa) {
    	$tarefa->update($request->all());
    	return response()->json($tarefa);
    }

    public function excluir(Tarefa $tarefa) {
    	$tarefa->delete();
    	return response()->json($tarefa);
    }

    public function ver(Tarefa $tarefa) {
    	return response()->json($tarefa);
    }
}
