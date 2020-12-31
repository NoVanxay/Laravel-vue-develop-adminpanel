<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSubjectRequest;
use App\Http\Requests\UpdateSubjectRequest;
use App\Http\Resources\Admin\SubjectResource;
use App\Models\Iclass;
use App\Models\Subject;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SubjectApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('subject_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SubjectResource(Subject::with(['iclass'])->advancedFilter());
    }

    public function store(StoreSubjectRequest $request)
    {
        $subject = Subject::create($request->validated());
        $subject->iclass()->sync($request->input('iclass.*.id', []));

        return (new SubjectResource($subject))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Subject $subject)
    {
        abort_if(Gate::denies('subject_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'iclass' => Iclass::get(['id', 'iclass']),
            ],
        ]);
    }

    public function show(Subject $subject)
    {
        abort_if(Gate::denies('subject_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SubjectResource($subject->load(['iclass']));
    }

    public function update(UpdateSubjectRequest $request, Subject $subject)
    {
        $subject->update($request->validated());
        $subject->iclass()->sync($request->input('iclass.*.id', []));

        return (new SubjectResource($subject))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Subject $subject)
    {
        abort_if(Gate::denies('subject_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new SubjectResource($subject->load(['iclass'])),
            'meta' => [
                'iclass' => Iclass::get(['id', 'iclass']),
            ],
        ]);
    }

    public function destroy(Subject $subject)
    {
        abort_if(Gate::denies('subject_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $subject->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
