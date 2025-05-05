<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Lead;
use App\MasterPage;
use App\Http\Requests\Api\LeadRequest;
use App\Http\Requests\Api\LeadLandingRequest;

class LeadController extends Controller
{

    public function getDepartment($request_department){
        $department_id = NULL;
        if($request_department == 'index'){
            $department_id = 1;
        }
        else{
            $department = MasterPage::where('slug',$request_department)->first();
            $department_id = $department->department_id;
        }
        return $department_id;
    }

    public function saveFacebookChatbot(Request $request)
    {
		#Validate Token
		if ($request->token == 'playgroup2020')
		{
            $data = array(
                'full_name' 	=> $request->full_name,
                'email' 	=> $request->email,
                'phone' 	=> $request->phone,
                'department_id' 	=> $request->department_id,
                "lead_source_id"    => 3
            );
		 	try {
                $lead = Lead::UpdateOrCreate($data);
                return response()->json(['title'=> trans('custom.title.success')],200);
		 	} catch (\Exception $e) {
                return response()->json(['title'=> trans('custom.title.error')],500);
            }
        }
        else{
            return response()->json(['title'=> trans('custom.title.error')],401);
        }
    }


    public function saveCliengo(Request $request)
    {
		#Validate Token
		if ($request->webhookKey == 'd0083f45-c7ae-4dca-893f-9b8c3bb26385')
		{
            $data = array(
                'full_name' 	=> $request->name,
                'email' 	=> $request->email,
                'phone' 	=> $request->phone,
                'message' 	=> $request->message,
                "lead_source_id"    => 2
            );
		 	try {
                $lead = Lead::UpdateOrCreate($data);
                return response()->json(['title'=> trans('custom.title.success')],200);
		 	} catch (\Exception $e) {
                return response()->json(['title'=> trans('custom.title.error')],500);
            }
        }
        else{
            return response()->json(['title'=> trans('custom.title.error')],401);
        }
    }

    public function save(LeadRequest $request)
    {
        // $lead = request(['full_name','phone', 'company', 'email', 'message','lead_medium_id']);
        $lead = request(['full_name','phone', 'company', 'email', 'message']);
        #Validate Token
        if($request->has('department')){
            /*if($request->department == 'index'){
                $department_id = 1;
            }
            else{
                $department = MasterPage::where('slug',$request->department)->first();
                $department_id = $department->department_id;
            }*/
            $department_id = $this->getDepartment($request->department);
            $lead = array_merge($lead,["department_id" => $department_id]);
        }
		try {
            $lead = Lead::UpdateOrCreate(array_merge($lead,["lead_source_id" => 1]));
            return response()->json(['title'=> trans('custom.title.success')],200);
        } catch (\Exception $e) {
            //dd($e);
            return response()->json(['title'=> trans('custom.title.error')],500);
        }
    }

    public function saveLanding(LeadLandingRequest $request){
        $lead = request(['full_name','phone', 'company', 'email']);
        if($request->has('department')){
            $department_id = $this->getDepartment($request->department);
            $lead = array_merge($lead,["department_id" => $department_id]);
        }
        try {
            $lead = Lead::UpdateOrCreate(array_merge($lead,["lead_source_id" => 1]));
            return response()->json(['title'=> trans('custom.title.success')],200);
        } catch (\Exception $e) {
            //dd($e);
            return response()->json(['title'=> trans('custom.title.error')],500);
        }
    }

    public function saveChatbot(Request $request)
    {
		#Validate Token
		if ($request->token == 'QJvy7V0DGehNRdzlo2YRrYXeJdoKSWI1')
		{
            $department_id = NULL;
            switch ($request->department) {
                case 'Campañas de Digital Performance':
                case 'Digital Performance':
                case 'digital-performance':
                    $department_id = $this->getDepartment('digital-performance');
                    break;

                case 'Social Media & Creatividad Publicitaria':
                case 'Creativity Hub':
                case 'creativity-hub':
                    $department_id = $this->getDepartment('creativity-hub');
                    break;

                case 'Desarrollo Web, Ecommerce e Inteligencia Artificial':
                case 'Software Factory':
                case 'software-factory':
                    $department_id = $this->getDepartment('software-factory');
                    break;

                default:
                    # code...
                    break;
            }
            $data = array(
                'full_name' 	    => $request->name,
                'email' 	        => $request->email,
                'phone' 	        => $request->mobile,
                'company' 	        => $request->company,
                'department_id' 	=> $department_id,
                "lead_source_id"    => 4
            );

            $data2 = array(
                'full_name' 	    => $request->name,
                'email' 	        => $request->email,
                'phone' 	        => $request->mobile,
                'company'=>$request->company,
                'department' => $request->department
            );

		 	try {
                $lead = Lead::UpdateOrCreate($data);

                $options = [
                    'http' => [
                        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                        'method' => 'POST',
                        'content' => http_build_query($data2),
                    ],
                ];

                $context = stream_context_create($options);
$result = file_get_contents("https://apirestful.playgroup.pe/api/mailing", false, $context);

                return response()->json(['title'=> trans('custom.title.success')],200);
		 	} catch (\Exception $e) {
                return response()->json(['title'=> trans('custom.title.error')],500);
            }
        }
        else{
            return response()->json(['title'=> trans('custom.title.error')],401);
        }
    }
}
