<?php

namespace App\Http\Controllers\Admin\Information;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\MasterPage;
use App\MasterSection;
use App\Content;

use App\Http\Traits\AdminTrait;
use App\MasterField;
use Illuminate\Support\Facades\Storage;

class PagesController extends Controller
{

    use AdminTrait;

    public function index()
    {
        return view("pages.info.pages");
    }

    public function getPages()
    {
        $pages = MasterPage::with('sections')->withCount('sections')->get();
        return response()->json($pages);
    }

    public function getPageSections(MasterPage $page)
    {
        //return response()->json($page->load('sections'));
    }

    public function getPageSectionFields(MasterSection $section)
    {
        $section = $section->load('fields');
        $content = Content::where('master_section_id', $section->id)->get()->toArray();
        $data = [];
        foreach ($section->fields as $key => $value) {
            $data[] = array(
                "type" => $value->type,
                "variable" => $value->variable,
                "name" => $value->name,
                "value" => "",
            );
        }
        foreach ($data as $key => $element) {
            foreach ($element as $key2 => $value) {
                foreach ($content as $key3 => $content_value) {
                    if ($key2 == "variable" && $value == $content_value["field"]) {
                        unset($data[$key]['value']);
                        $data[$key]['value'] = $content_value["value"];
                    }
                }
            }
        }
        return response()->json($data);
    }

    public function postAddMore(MasterSection $section)
    {
        $section = $section->load('fields');
        if($section->id == 42){
            $nextIndex = $section->fields->count(); // there are already 2 fields in this section by default

            $field_insert = [
                    'name' => 'Imagen de Slide ' . $nextIndex,
                    'variable' => 'image_' . $nextIndex,
                    'type' => 'image',
                    'master_section_id' => $section->id
            ];
        }else{

            // Contar cuántos bloques de 3 campos (title, description, image) ya hay
            $existingCount = floor($section->fields->count() / 3);
            $nextIndex = $existingCount + 1; // empieza en 1 si no hay campos

            $field_insert = [
                [
                    'name' => 'Título ' . $nextIndex,
                    'variable' => 'title_' . $nextIndex,
                    'type' => 'input',
                    'master_section_id' => $section->id
                ],
                [
                    'name' => 'Descripción ' . $nextIndex,
                    'variable' => 'description_' . $nextIndex,
                    'type' => 'input',
                    'master_section_id' => $section->id
                ],
                [
                    'name' => 'Imagen ' . $nextIndex,
                    'variable' => 'image_' . $nextIndex,
                    'type' => 'image',
                    'master_section_id' => $section->id
                ],
            ];
        }
        MasterField::insert($field_insert);

        return response()->json([
            'message' => 'Campos agregados correctamente'
        ]);

    }

    public function updateSection(Request $request)
    {
        $section_id = $request->section_id;
        $request_content = json_decode($request->content, true);
        try {
            foreach ($request_content as $key => $element) {
                $value = NULL;
                $value = $element["value"];
                //if($element["variable"] == "image"){
                if ($element["type"] == "image") {
                    if ($request->hasFile($element["variable"])) {
                        $filename = $this->setFileName('p-', $request->file($element["variable"]));
                        $store_image = Storage::disk('gcs')->putFileAs('img/pages/', $request->file($element["variable"]), $filename);
                        if (!$store_image) {
                            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
                        }
                        $content = Content::where("master_section_id", $section_id)->where("field", $element["variable"])->first();
                        if ($content) {
                            $delete_image = Storage::disk('gcs')->delete('img/pages/' . $content->value);
                            $content = $content->delete();
                        }
                        $element["value"] = $filename;
                        $content = Content::UpdateOrCreate(array_merge(["value" => $element["value"], "field" => $element["variable"], "master_section_id" => $section_id]));
                    }
                } else if ($element["type"] == "video") {
                    if ($request->hasFile($element["variable"])) {
                        $filename = $this->setFileName('pv-', $request->file($element["variable"]));
                        $store_video = Storage::disk('gcs')->putFileAs('videos/pages/', $request->file($element["variable"]), $filename);
                        if (!$store_video) {
                            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.video')], 500);
                        }
                        $content = Content::where("master_section_id", $section_id)->where("field", $element["variable"])->first();
                        if ($content) {
                            $delete_video = Storage::disk('gcs')->delete('videos/pages/' . $content->value);
                            $content = $content->delete();
                        }
                        $element["value"] = $filename;
                        $content = Content::UpdateOrCreate(array_merge(["value" => $element["value"], "field" => $element["variable"], "master_section_id" => $section_id]));
                    }
                } else {
                    if ($value) {
                        $content = Content::where("master_section_id", $section_id)->where("field", $element["variable"]);
                        if ($content) {
                            $content = $content->delete();
                        }
                        $content = Content::UpdateOrCreate(array_merge(["value" => $element["value"], "field" => $element["variable"], "master_section_id" => $section_id]));
                    }
                }
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.section')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.section')])], 500);
        }
    }

    public function storeImage(Request $request)
    {
        $filename = $this->setFileName('pe-', $request->file('image'));
        try {
            $upload_file = Storage::disk('gcs')->putFileAs('img/pages/', $request->file('image'), $filename);
            return response()->json(['image' => Storage::disk('gcs')->url('img/pages/' . $filename)]);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
        }
    }
}
