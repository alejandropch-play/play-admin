<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\troubleshootingRequest;
use App\Http\Traits\AdminTrait;
use App\Troubleshooting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class TroubleshootingController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view("pages.troubleshooting");
    }

    public function create(troubleshootingRequest $request)
    {
        try {
            $solution = request(["title", "description", "department_id"]);
            if ($request->hasFile('image')) {
                $image_name = $this->setFileName('ssi-', $request->file('image'));
                $store_image = Storage::disk('gcs')->putFileAs('img/solutions/', $request->file('image'), $image_name);
                if (!$store_image) {
                    return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
                }
                $solution = array_merge($solution, ["image" => $image_name]);
            }
            if ($request->hasFile('responsive_image')) {
                $responsive_image_name = $this->setFileName('ssi-', $request->file('responsive_image'));
                $store_responsive_image = Storage::disk('gcs')->putFileAs('img/solutions/responsive/', $request->file('responsive_image'), $responsive_image_name);
                if (!$store_responsive_image) {
                    return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
                }
                $solution = array_merge($solution, ["responsive_image" => $responsive_image_name]);
            }

            $solution_index = $this->getMaxIndex(Troubleshooting::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
            if (count($solution_index) > 0) {
                $solution = array_merge($solution, ["index" => $solution_index[0]["index"] + 1]);
            } else {
                $solution = array_merge($solution, ["index" => 1]);
            }
            $solution = Troubleshooting::UpdateOrCreate($solution);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.troubleshooting')])], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.troubleshooting')])], 500);
        }
    }

    public function getSuccessStories(Request $request)
    {

        $solution = Troubleshooting::where('department_id', $request->department)->orderBy('index')->get();
        return response()->json($solution);
    }

    public function getSuccessStory(Troubleshooting $solution)
    {
        return response()->json($solution);
    }

    public function delete(Troubleshooting $solution)
    {

        $image = $solution->image;
        $responsive_image = $solution->responsive_image;
        try {
            $solution_delete = $solution->delete();
            if ($solution_delete) {
                Storage::disk('private')->delete('files/img/story/' . $image);
                Storage::disk('private')->delete('files/img/story/responsive/' . $responsive_image);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.troubleshooting')])], 200);
        } catch (\Exception $e) {

            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.troubleshooting')])], 500);
        }
    }

    public function order(Request $request)
    {
        $stories = $request->all();
        try {
            for ($i = 0; $i < count($stories); $i++) {
                $solution = Troubleshooting::UpdateOrCreate(["id" => $stories[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.troubleshooting')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.troubleshooting')])], 500);
        }
    }

    public function update(troubleshootingRequest $request, Troubleshooting $solution)
    {
        try {
            $request_solution = request(["title", "description", "department_id"]);
            if ($request->hasFile('image')) {
                $image_name = $this->setFileName('ssl-', $request->file('image'));
                $store_image = Storage::disk('gcs')->putFileAs('img/solutions/', $request->file('image'), $image_name);
                if (!$store_image) {
                    return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
                }
                $request_solution = array_merge($request_solution, ["image" => $image_name]);
            } else {
                $request_solution = array_merge($request_solution, ["image" => $solution->image]);
            }

            if ($request->hasFile('image') && $solution->image) {
                Storage::disk('gcs')->delete('img/solutions/' . $solution->image);
            }
            if ($request->hasFile('responsive_image')) {
                $responsive_image_name = $this->setFileName('ssl-', $request->file('responsive_image'));
                $store_image = Storage::disk('gcs')->putFileAs('img/solutions/responsive/', $request->file('responsive_image'), $responsive_image_name);
                if (!$store_image) {
                    return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
                }
                $request_solution = array_merge($request_solution, ["responsive_image" => $responsive_image_name]);
            } else {
                $request_solution = array_merge($request_solution, ["responsive_image" => $solution->responsive_image]);
            }

            if ($request->hasFile('responsive_image') && $solution->responsive_image) {
                Storage::disk('gcs')->delete('img/solutions/responsive' . $solution->responsive_image);
            }
            $solution = Troubleshooting::UpdateOrCreate(["id" => $solution->id], $request_solution);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.troubleshooting')])], 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.troubleshooting')])], 500);
        }
    }
}
