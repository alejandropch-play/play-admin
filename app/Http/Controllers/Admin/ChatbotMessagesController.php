<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use GuzzleHttp\Client;
use App\Http\Traits\AdminTrait;

class ChatbotMessagesController extends Controller
{
    private $routeBy = 'api/get-conversation-by';
    private $routeAll = 'api/get-conversations';
    private $chatbotDomain = "https://app-chat.playgroup.pe";
    //private $chatbotDomain = "http://localhost:3005";
    private $chatbotApiBearer = "";
    use AdminTrait;

    public function __construct()
    {
        $this->chatbotApiBearer = config("services.chatbot_api_bearer");
    }

    public function index(){
        return view ("pages.chatbot-messages");    
    }

    public function getAll(Request $request){
        $perPage = 15;
        $page = 1;
        if($request->page) $page = $request->page;
        if($request->perPage) $perPage = $request->perPage;
        try {
            $client = new Client();
            $route = $this->chatbotDomain . '/' .$this->routeAll .'?page=' .$page .'&perPage=' . $perPage;
            if($request->date){
                $route = $route.'&date='.$request->date;
            }
            if($request->range){
                $route = $route.'&range[]='.$request->range[0].'&range[]='.$request->range[1];
            }
            if($request->q){
                $route = $route.'&q='.$request->q;
            }
            $responseApi = $client->request('GET', $route , [
                'headers' => ['Accept' => 'application/json', 'Authorization' => 'Bearer '.$this->chatbotApiBearer]
            ]);
            $bodyResponse = json_decode($responseApi->getBody());
            return response()->json($bodyResponse);
        }
        catch (\GuzzleHttp\Exception\RequestException $e) {
            $status = $e->getResponse()->getStatusCode();
            return response($status);
        }
    }

    public function getBy(Request $request){
        try {
            $client = new Client();
            $route = $this->chatbotDomain . '/' .$this->routeBy .'?id=' .$request->id;
            $responseApi = $client->request('GET', $route , [
                'headers' => ['Accept' => 'application/json', 'Authorization' => 'Bearer '.$this->chatbotApiBearer]
            ]);
            $bodyResponse = json_decode($responseApi->getBody());
            return response()->json($bodyResponse);
        }
        catch (\GuzzleHttp\Exception\RequestException $e) {
            $status = $e->getResponse()->getStatusCode();
            return response($status);
        }
    }
}