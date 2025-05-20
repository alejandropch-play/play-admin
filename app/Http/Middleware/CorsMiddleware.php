<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CorsMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $allowedOrigins = [ env('FRONTEND_URL') ];
	$origin = $request->headers->get('Origin');
	$response = $next($request);
	if (in_array($origin, $allowedOrigins)) {
		$response->headers->set('Access-Control-Allow-Origin', $origin);
	}
	$response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	$response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	return $response;
    }
}
?>
