<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAllbookRequest;
use App\Http\Requests\UpdateAllbookRequest;
use App\Http\Resources\Admin\AllbookResource;
use App\Models\Allbook;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class AllbookApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('allbook_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new AllbookResource(Allbook::advancedFilter());
    }

    public function store(StoreAllbookRequest $request)
    {
        $allbook = Allbook::create($request->validated());

        if ($media = $request->input('file', [])) {
            Media::whereIn('id', data_get($media, '*.id'))
                ->where('model_id', 0)
                ->update(['model_id' => $allbook->id]);
        }

        if ($media = $request->input('photo', [])) {
            Media::whereIn('id', data_get($media, '*.id'))
                ->where('model_id', 0)
                ->update(['model_id' => $allbook->id]);
        }

        return (new AllbookResource($allbook))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Allbook $allbook)
    {
        abort_if(Gate::denies('allbook_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Allbook $allbook)
    {
        abort_if(Gate::denies('allbook_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new AllbookResource($allbook);
    }

    public function update(UpdateAllbookRequest $request, Allbook $allbook)
    {
        $allbook->update($request->validated());

        $allbook->updateMedia($request->input('file', []), 'allbook_file');
        $allbook->updateMedia($request->input('photo', []), 'allbook_photo');

        return (new AllbookResource($allbook))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Allbook $allbook)
    {
        abort_if(Gate::denies('allbook_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new AllbookResource($allbook),
            'meta' => [],
        ]);
    }

    public function destroy(Allbook $allbook)
    {
        abort_if(Gate::denies('allbook_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $allbook->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function storeMedia(Request $request)
    {
        abort_if(Gate::none(['allbook_create', 'allbook_edit']), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new Allbook();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }
}
