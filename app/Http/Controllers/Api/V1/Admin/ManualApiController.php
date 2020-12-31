<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreManualRequest;
use App\Http\Requests\UpdateManualRequest;
use App\Http\Resources\Admin\ManualResource;
use App\Models\Manual;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ManualApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('manual_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ManualResource(Manual::advancedFilter());
    }

    public function store(StoreManualRequest $request)
    {
        $manual = Manual::create($request->validated());

        if ($media = $request->input('file', [])) {
            Media::whereIn('id', data_get($media, '*.id'))
                ->where('model_id', 0)
                ->update(['model_id' => $manual->id]);
        }

        return (new ManualResource($manual))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Manual $manual)
    {
        abort_if(Gate::denies('manual_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Manual $manual)
    {
        abort_if(Gate::denies('manual_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ManualResource($manual);
    }

    public function update(UpdateManualRequest $request, Manual $manual)
    {
        $manual->update($request->validated());

        $manual->updateMedia($request->input('file', []), 'manual_file');

        return (new ManualResource($manual))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Manual $manual)
    {
        abort_if(Gate::denies('manual_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ManualResource($manual),
            'meta' => [],
        ]);
    }

    public function destroy(Manual $manual)
    {
        abort_if(Gate::denies('manual_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $manual->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function storeMedia(Request $request)
    {
        abort_if(Gate::none(['manual_create', 'manual_edit']), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new Manual();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }
}
