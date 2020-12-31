<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreIclassRequest;
use App\Http\Requests\UpdateIclassRequest;
use App\Http\Resources\Admin\IclassResource;
use App\Models\Iclass;
use App\Models\School;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class IclassApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('iclass_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new IclassResource(Iclass::with(['school'])->advancedFilter());
    }

    public function store(StoreIclassRequest $request)
    {
        $iclass = Iclass::create($request->validated());
        $iclass->school()->sync($request->input('school.*.id', []));

        return (new IclassResource($iclass))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Iclass $iclass)
    {
        abort_if(Gate::denies('iclass_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'school' => School::get(['id', 'school']),
            ],
        ]);
    }

    public function show(Iclass $iclass)
    {
        abort_if(Gate::denies('iclass_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new IclassResource($iclass->load(['school']));
    }

    public function update(UpdateIclassRequest $request, Iclass $iclass)
    {
        $iclass->update($request->validated());
        $iclass->school()->sync($request->input('school.*.id', []));

        return (new IclassResource($iclass))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Iclass $iclass)
    {
        abort_if(Gate::denies('iclass_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new IclassResource($iclass->load(['school'])),
            'meta' => [
                'school' => School::get(['id', 'school']),
            ],
        ]);
    }

    public function destroy(Iclass $iclass)
    {
        abort_if(Gate::denies('iclass_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $iclass->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
