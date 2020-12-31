<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreExamResultRequest;
use App\Http\Requests\UpdateExamResultRequest;
use App\Http\Resources\Admin\ExamResultResource;
use App\Models\ExamResult;
use App\Models\Iclass;
use App\Models\School;
use App\Models\Student;
use App\Models\Subject;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ExamResultApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('exam_result_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ExamResultResource(ExamResult::with(['gender', 'student', 'lastName', 'subject', 'iclass', 'school'])->advancedFilter());
    }

    public function store(StoreExamResultRequest $request)
    {
        $examResult = ExamResult::create($request->validated());
        $examResult->student()->sync($request->input('student.*.id', []));
        $examResult->subject()->sync($request->input('subject.*.id', []));

        return (new ExamResultResource($examResult))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(ExamResult $examResult)
    {
        abort_if(Gate::denies('exam_result_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'gender'    => Student::get(['id', 'gender']),
                'student'   => Student::get(['id', 'first_name']),
                'last_name' => Student::get(['id', 'last_name']),
                'subject'   => Subject::get(['id', 'subject']),
                'iclass'    => Iclass::get(['id', 'iclass']),
                'school'    => School::get(['id', 'school']),
            ],
        ]);
    }

    public function show(ExamResult $examResult)
    {
        abort_if(Gate::denies('exam_result_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ExamResultResource($examResult->load(['gender', 'student', 'lastName', 'subject', 'iclass', 'school']));
    }

    public function update(UpdateExamResultRequest $request, ExamResult $examResult)
    {
        $examResult->update($request->validated());
        $examResult->student()->sync($request->input('student.*.id', []));
        $examResult->subject()->sync($request->input('subject.*.id', []));

        return (new ExamResultResource($examResult))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(ExamResult $examResult)
    {
        abort_if(Gate::denies('exam_result_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ExamResultResource($examResult->load(['gender', 'student', 'lastName', 'subject', 'iclass', 'school'])),
            'meta' => [
                'gender'    => Student::get(['id', 'gender']),
                'student'   => Student::get(['id', 'first_name']),
                'last_name' => Student::get(['id', 'last_name']),
                'subject'   => Subject::get(['id', 'subject']),
                'iclass'    => Iclass::get(['id', 'iclass']),
                'school'    => School::get(['id', 'school']),
            ],
        ]);
    }

    public function destroy(ExamResult $examResult)
    {
        abort_if(Gate::denies('exam_result_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $examResult->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
