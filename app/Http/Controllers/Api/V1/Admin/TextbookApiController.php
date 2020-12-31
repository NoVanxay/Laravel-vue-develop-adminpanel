<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTextbookRequest;
use App\Http\Requests\UpdateTextbookRequest;
use App\Http\Resources\Admin\TextbookResource;
use App\Models\Textbook;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class TextbookApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('textbook_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new TextbookResource(Textbook::advancedFilter());
    }

    public function store(StoreTextbookRequest $request)
    {
        $textbook = Textbook::create($request->validated());

        if ($media = $request->input('file', [])) {
            Media::whereIn('id', data_get($media, '*.id'))
                ->where('model_id', 0)
                ->update(['model_id' => $textbook->id]);
        }

        return (new TextbookResource($textbook))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Textbook $textbook)
    {
        abort_if(Gate::denies('textbook_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Textbook $textbook)
    {
        abort_if(Gate::denies('textbook_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new TextbookResource($textbook);
    }

    public function update(UpdateTextbookRequest $request, Textbook $textbook)
    {
        $textbook->update($request->validated());

        $textbook->updateMedia($request->input('file', []), 'textbook_file');

        return (new TextbookResource($textbook))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Textbook $textbook)
    {
        abort_if(Gate::denies('textbook_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new TextbookResource($textbook),
            'meta' => [],
        ]);
    }

    public function destroy(Textbook $textbook)
    {
        abort_if(Gate::denies('textbook_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $textbook->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function storeMedia(Request $request)
    {
        abort_if(Gate::none(['textbook_create', 'textbook_edit']), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new Textbook();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }
}
