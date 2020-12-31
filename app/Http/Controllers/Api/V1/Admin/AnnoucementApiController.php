<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAnnoucementRequest;
use App\Http\Requests\UpdateAnnoucementRequest;
use App\Http\Resources\Admin\AnnoucementResource;
use App\Models\Annoucement;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class AnnoucementApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('annoucement_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new AnnoucementResource(Annoucement::advancedFilter());
    }

    public function store(StoreAnnoucementRequest $request)
    {
        $annoucement = Annoucement::create($request->validated());

        if ($media = $request->input('annoucement', [])) {
            Media::whereIn('id', data_get($media, '*.id'))
                ->where('model_id', 0)
                ->update(['model_id' => $annoucement->id]);
        }

        return (new AnnoucementResource($annoucement))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Annoucement $annoucement)
    {
        abort_if(Gate::denies('annoucement_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Annoucement $annoucement)
    {
        abort_if(Gate::denies('annoucement_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new AnnoucementResource($annoucement);
    }

    public function update(UpdateAnnoucementRequest $request, Annoucement $annoucement)
    {
        $annoucement->update($request->validated());

        $annoucement->updateMedia($request->input('annoucement', []), 'annoucement_annoucement');

        return (new AnnoucementResource($annoucement))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Annoucement $annoucement)
    {
        abort_if(Gate::denies('annoucement_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new AnnoucementResource($annoucement),
            'meta' => [],
        ]);
    }

    public function destroy(Annoucement $annoucement)
    {
        abort_if(Gate::denies('annoucement_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $annoucement->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function storeMedia(Request $request)
    {
        abort_if(Gate::none(['annoucement_create', 'annoucement_edit']), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new Annoucement();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }
}
