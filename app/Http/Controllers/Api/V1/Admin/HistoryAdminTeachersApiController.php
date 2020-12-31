<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreHistoryAdminTeacherRequest;
use App\Http\Requests\UpdateHistoryAdminTeacherRequest;
use App\Http\Resources\Admin\HistoryAdminTeacherResource;
use App\Models\HistoryAdminTeacher;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class HistoryAdminTeachersApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('history_admin_teacher_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new HistoryAdminTeacherResource(HistoryAdminTeacher::advancedFilter());
    }

    public function store(StoreHistoryAdminTeacherRequest $request)
    {
        $historyAdminTeacher = HistoryAdminTeacher::create($request->validated());

        if ($media = $request->input('photo', [])) {
            Media::whereIn('id', data_get($media, '*.id'))
                ->where('model_id', 0)
                ->update(['model_id' => $historyAdminTeacher->id]);
        }

        return (new HistoryAdminTeacherResource($historyAdminTeacher))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(HistoryAdminTeacher $historyAdminTeacher)
    {
        abort_if(Gate::denies('history_admin_teacher_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'gender' => HistoryAdminTeacher::GENDER_RADIO,
            ],
        ]);
    }

    public function show(HistoryAdminTeacher $historyAdminTeacher)
    {
        abort_if(Gate::denies('history_admin_teacher_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new HistoryAdminTeacherResource($historyAdminTeacher);
    }

    public function update(UpdateHistoryAdminTeacherRequest $request, HistoryAdminTeacher $historyAdminTeacher)
    {
        $historyAdminTeacher->update($request->validated());

        $historyAdminTeacher->updateMedia($request->input('photo', []), 'history_admin_teacher_photo');

        return (new HistoryAdminTeacherResource($historyAdminTeacher))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(HistoryAdminTeacher $historyAdminTeacher)
    {
        abort_if(Gate::denies('history_admin_teacher_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new HistoryAdminTeacherResource($historyAdminTeacher),
            'meta' => [
                'gender' => HistoryAdminTeacher::GENDER_RADIO,
            ],
        ]);
    }

    public function destroy(HistoryAdminTeacher $historyAdminTeacher)
    {
        abort_if(Gate::denies('history_admin_teacher_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $historyAdminTeacher->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function storeMedia(Request $request)
    {
        abort_if(Gate::none(['history_admin_teacher_create', 'history_admin_teacher_edit']), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new HistoryAdminTeacher();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }
}
