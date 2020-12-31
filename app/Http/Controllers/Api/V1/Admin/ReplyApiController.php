<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreReplyRequest;
use App\Http\Requests\UpdateReplyRequest;
use App\Http\Resources\Admin\ReplyResource;
use App\Models\Reply;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ReplyApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('reply_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ReplyResource(Reply::with(['users', 'comment'])->advancedFilter());
    }

    public function store(StoreReplyRequest $request)
    {
        $reply = Reply::create($request->validated());
        $reply->users()->sync($request->input('users.*.id', []));

        return (new ReplyResource($reply))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Reply $reply)
    {
        abort_if(Gate::denies('reply_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Reply $reply)
    {
        abort_if(Gate::denies('reply_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ReplyResource($reply->load(['users', 'comment']));
    }

    public function update(UpdateReplyRequest $request, Reply $reply)
    {
        $reply->update($request->validated());
        $reply->users()->sync($request->input('users.*.id', []));

        return (new ReplyResource($reply))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Reply $reply)
    {
        abort_if(Gate::denies('reply_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ReplyResource($reply),
            'meta' => [],
        ]);
    }

    public function destroy(Reply $reply)
    {
        abort_if(Gate::denies('reply_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $reply->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
